import axios from "axios";

const fhirClient = axios.create({
  baseURL: "https://your-fhir-server-url", // ใส่ URL ของ FHIR Server
  headers: {
    "Content-Type": "application/fhir+json",
  },
});

export const getPatientData = async (patientId) => {
  try {
    const response = await fhirClient.get(`/Patient/${patientId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching patient data:", error);
    throw error;
  }
};
