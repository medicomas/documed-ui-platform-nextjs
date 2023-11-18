import medicomasAxiosClient from "../medicomas-axios-client";

const RESOURCE_PATIENT = `/patient`
const RESOURCE_APPOINTMENT = `citas`
const START = `iniciar`
const RESOURCE_CONSULTATION = `/consultas`

const ConsultationService = {
    init: async (patientId: number, citaId: number) =>{
        const response = await medicomasAxiosClient.post(`${RESOURCE_PATIENT}/${patientId}/${RESOURCE_APPOINTMENT}/${citaId}/${START}`);
        return response?.data;
    },
    update: async (patientId: number, consultaId: number, data: any) =>{
        const response = await medicomasAxiosClient.put(`${RESOURCE_PATIENT}/${patientId}/${RESOURCE_CONSULTATION}/${consultaId}`, data);
        return response?.data;
    },
}

export default ConsultationService;
