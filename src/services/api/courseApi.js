import { http } from "../interceptor";

export const getCourses = async (courseQuery) => {
  try {
    const res = await http.get("/Home/GetCoursesWithPagination", {
      params: { Query: courseQuery.searchText, RowsOfPage: 10, PageNumber: 1 },
    });
    return res;
  } catch (error) {
    throw new Error("No Data!!");
  }
};

export const topCourses = async (countNumber) => {
  try {
    const res = await http.get(`/Home/GetCoursesTop?Count=${countNumber}`);
    return res;
  } catch (error) {
    throw new Error("No Data!!");
  }
};
