import { http } from "../interceptor";

export const getAllTeachers = async () => {
  try {
    const res = await http.get("/Home/GetTeachers");
    return res;
  } catch (error) {
    throw new Error("No Data!");
  }
};
