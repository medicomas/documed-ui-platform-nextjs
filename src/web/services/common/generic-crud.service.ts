import medicomasAxiosClient from '@/web/medicomas-axios-client';

export type Config = {
  bodyPostWithOutItemKey: boolean;
};
type IndexableType = {
  [key: string]: any;
};

class GenericService<T extends IndexableType> {
  private endpoint: string;
  private itemKey: string;
  // todo private itemsKey: string;
  private idKey: keyof T;
  // toto private cache: boolean;
  private config: Config;

  constructor(
    endpoint: string,
    itemKey: string,
    idKey: string,
    config: Config,
    // itemsKey: string,
  ) {
    this.endpoint = endpoint;
    this.itemKey = itemKey;
    // todo this.itemsKey = itemsKey;
    this.idKey = idKey;
    // todo this.cache = cache;
    this.config = config;
  }

  async get(): Promise<T[]> {
    const response = await medicomasAxiosClient.get(`${this.endpoint}`);
    return response?.data || [];
  }

  async getById(id: number): Promise<T> {
    const response = await medicomasAxiosClient.get(`${this.endpoint}/${id}`);
    return response?.data;
  }

  async create(data: any): Promise<T> {
    const body = this.config?.bodyPostWithOutItemKey ? { ...data } : { [this.itemKey]: data };
    const response = await medicomasAxiosClient.post(`${this.endpoint}`, body);
    return response?.data;
  }

  async update(data: T): Promise<T> {
    const id = data[this.idKey] as unknown as number;
    const copyData = { ...data };
    delete copyData[this.idKey];
    const response = await medicomasAxiosClient.put(`${this.endpoint}/${id}`, copyData);
    return response?.data;
  }

  async delete(id: string): Promise<any> {
    const response = await medicomasAxiosClient.delete(`${this.endpoint}/${id}`);
    return response?.data;
  }
}

export default GenericService;
