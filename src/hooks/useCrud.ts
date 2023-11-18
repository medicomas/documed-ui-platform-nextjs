import { useState, useEffect, useRef } from 'react';
import GenericService from '@/web/services/common/generic-crud.service';
import { debounce } from '@mui/material';

type IndexableType = {
  [key: string]: any;
};

interface UseCrudProps<T extends IndexableType> {
  service: GenericService<T>;
}

interface SearchConfig {
    fields: Array<any>;
}

const useCrud = <T extends IndexableType>({ service }: UseCrudProps<T>) => {
    const [data, setData] = useState<T[]>([]);
    const [originalData, setOriginalData] = useState<T[]>([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
  
    const fetchEntities = async () => {
      setLoading(true);
      try {
        const result = await service.get();
        setData(result);
        setOriginalData(result);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };
 
    const createEntity = async (newData: T) => {
      try {
        const created = await service.create(newData);
        setData([...data, created]);
      } catch (e) {
        setError(e as Error);
      }
    };
  
    const updateEntity = async (updatedData: T) => {
      try {
        const updated = await service.update(updatedData);
        const idKey = service.getIdKey();
        setData(data.map(item => item[idKey] === updated[idKey] ? updated : item));
      } catch (e) {
        setError(e as Error);
      }
    };
  
    const deleteEntity = async (id: string | number) => {
      try {
        await service.delete(id.toString());
        const idKey = service.getIdKey();
        setData(data.filter(item => item[idKey] !== id));
      } catch (e) {
        setError(e as Error);
      }
    };

    const search = ( query: string ) => {
        if (!query) {
                    setData(originalData);
                    return;
                }
       const lowerCaseQuery = query.toLowerCase();
       const filteredData = originalData.filter((ele) => {
        return Object.values(ele).some(value => value.toString().toLowerCase().includes(lowerCaseQuery))
       })
       setData(filteredData);
    }

    const clearSearch = () => {
        setData(originalData);
    };
  
    useEffect(() => {
      fetchEntities();
    }, []);
  
    return { data, loading, error, createEntity, updateEntity, deleteEntity, fetchEntities, service, search, clearSearch };
  };
  
  export default useCrud;
  