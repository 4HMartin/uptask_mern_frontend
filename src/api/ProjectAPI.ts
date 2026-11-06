import api from "@/lib/axios";
import type {ProjectFormData} from "../types";

export async function createProject(formData: ProjectFormData): Promise<void> {
    try {
        const { data } = await api.post("/projects", formData);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}