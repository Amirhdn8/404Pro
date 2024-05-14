import { http } from "../interceptor";

export const getVerifyCode = async (phoneNumber) => {
  try {
    const res = await http.post("/Sign/SendVerifyMessage", { phoneNumber });
    return res;
  } catch (error) {
    throw new Error("شماره موبایل معتبر نیست");
  }
};

export const sendVerifyCode = async ({ phoneNumber, verifyCode }) => {
  try {
    const res = await http.post("/Sign/VerifyMessage", {
      phoneNumber,
      verifyCode,
    });
    return res;
  } catch (error) {
    throw new Error("کد واردشده معتبر نیست");
  }
};

export const signUpUser = async ({ password, gmail, phoneNumber }) => {
  try {
    const res = await http.post("/Sign/Register", {
      password,
      gmail,
      phoneNumber,
    });
    return res;
  } catch (error) {
    throw new Error("مشخصات صحیح نیست");
  }
};
