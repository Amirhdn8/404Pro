import { http } from "../interceptor";

export const getAllNews = async () => {
  try {
    const res = await http.get("/News", {
      params: {
        PageNumber: 1,
        RowsOfPage: 10,
      },
    });
    return res;
  } catch (error) {
    throw new Error("No Data!!");
  }
};
