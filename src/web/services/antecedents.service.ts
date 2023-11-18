import medicomasAxiosClient from "../medicomas-axios-client"

const RESOURCE_PATIENT = `/patient`
const RESOURCE_ANTECEDENTS = `/antecedentes`

const AntecedentsService = {
    getByPatientId: async (id: number) => {
        const response = await medicomasAxiosClient.get(`${RESOURCE_PATIENT}/${id}${RESOURCE_ANTECEDENTS}`)
        return response.data;
    },
}

export default AntecedentsService;
