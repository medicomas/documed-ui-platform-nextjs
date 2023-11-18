import medicomasAxiosClient from "../medicomas-axios-client"

const RESOURCE_PATIENT = `/patient`
const RESOURCE_APPOINTMENT_NEW = `/citas/nueva`

const AppointmentService = {
    makeAppoinment: async (id: number, date: Date) => {
        const response = await medicomasAxiosClient.post(`${RESOURCE_PATIENT}/${id}${RESOURCE_APPOINTMENT_NEW}`, {
            date: date.toLocaleDateString("es-PE")
        });
        return response?.data;    
    },
    makeInstAppoinment: async (id: number) => {
        const response = await medicomasAxiosClient.post(`${RESOURCE_PATIENT}/${id}${RESOURCE_APPOINTMENT_NEW}`, {
            date: new Date().toISOString()
        });
        return response?.data;
    }
}

export default AppointmentService;
