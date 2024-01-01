import api from "@/api.json";
import axios from "axios";
import { ExamListInterface } from "@/interfaces/exam/exam.interface";

export const ExamsService = {
  async getAllExams() {
    const { data } = await axios.get<ExamListInterface[]>(`${api.api}/grade/`);
    return data;
  },
};
