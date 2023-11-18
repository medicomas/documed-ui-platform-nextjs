import { Grid } from '@mui/material';
import { ConsultationForm } from './ConsultationForm';
import { MedSummary } from '@/components/med-summary';
import { useState } from 'react';

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

    const [selectedPatient, setSelectedPatient] = useState<any>({
        surnames: 'Gamarra Ostos',
        names: 'Carmen',
      });

    return (

        <Grid container>
        <Grid item container xs={12} md={4} p={5}>
          <MedSummary
            lastName={selectedPatient.surnames}
            name={selectedPatient.names}
            antecedentsList={listData}
            events={events}
            buttonLabel="Finalizar Consulta"
            onAction={() => {}}
          />
        </Grid>
        <Grid item xs={12} md={8} padding={5} sx={{ }}>
            <ConsultationForm />
        </Grid>
      </Grid>
    )
};
