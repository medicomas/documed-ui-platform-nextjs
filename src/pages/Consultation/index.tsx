import { Alert, AlertTitle, Grid } from '@mui/material';
import { ConsultationForm } from './ConsultationForm';
import { MedSummary } from '@/components/med-summary';
import { useEffect, useState } from 'react';
import AntecedentsService from '@/web/services/antecedents.service';
import { useAppContext } from '@/context/AppContext';
import ConsultationService from '@/web/services/consultation.service';
import { useNavigate } from 'react-router-dom';

const listData: any[] = [
    {
      label: 'RAM',
      value: 'Ampicilina',
    },
    {
      label: 'DM2',
      value: 'Niega',
    },
    {
      label: 'HTA',
      value: 'Losartan 50 mg c/24h',
    },
    {
      label: 'QX',
      value: 'Cesárea (3 veces)',
    },
  ];
  
  const events = [
    { eventName: 'Constipación', date: '02/09/23' },
    { eventName: 'Hiperglicemia, otra hiperlipidemia', date: '25/07/23' },
    { eventName: 'Pancreatitis', date: '21/07/23' },
  ];

  
export const Consultation = () => {

    const { loading, isInConsult, setLoading, setIsInConsult, selectedPatient, setSelectedPatient, currentCita, setCurrentCita } = useAppContext();

    const [ antecedentList, setAntecedentList ] = useState<any>(null);

    const [ isAlert, setAlert ] = useState(false);

    const navigate = useNavigate();

    const onClear = () => {
        // setLoading(true); 

       
        // setLoading(false); 
    };

      const fecthAntecedents = async (id: number) => {
        let ants; 
        try {
          ants =  await AntecedentsService.getByPatientId(id);
        } catch (error) {
          console.error(error)
        }
        return ants;
    }

    const finishConsultation = async (event: any, data: any) => {
        setAlert(true)
        setLoading(true); 
    }

  useEffect(() => {
    if(isAlert) {
        setTimeout(() => {
            setAlert(false)
            setSelectedPatient(null);
            setIsInConsult(false);
            setLoading(false); 
            navigate('/patients'); 
          }, 4000)
    }
    // return () => clearTimeout(timeId)
  }, [isAlert]);

    useEffect(() => {
        if(selectedPatient) {
          fecthAntecedents(selectedPatient.id).then(
            (res) => setAntecedentList(res)
          )
        }
      }, [selectedPatient])



    return (
        <>
        
        <Grid container>
        <Grid item container xs={12} md={4} p={5}>
          <MedSummary
            lastName={selectedPatient.surnames}
            name={selectedPatient.names}
            antecedentsList={antecedentList}
            events={events}
            buttonLabel="Finalizar Consulta"
            onAction={finishConsultation}
          />
        </Grid>
        <Grid item xs={12} md={8} padding={5} sx={{ }}>
            <ConsultationForm onHandleSubmit={finishConsultation} onClear={onClear} />
        </Grid>
      </Grid>
        {isAlert && <Alert severity="success">
            <AlertTitle>Exito</AlertTitle>
            Se guardo con exito su <strong>Consulta!</strong>
        </Alert>}
        </>
    )
};
