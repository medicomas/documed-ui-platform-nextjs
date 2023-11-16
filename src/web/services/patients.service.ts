import GenericService from './common/generic-crud.service';

const PatientService = new GenericService('patient', 'patient', 'id', {
  bodyPostWithOutItemKey: true,
});

export default PatientService;
