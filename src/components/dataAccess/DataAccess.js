import axios from "axios";

const baseUrl = "https://cp.freaksofnature.me/fronend_site_api";

const FONBackend = axios.create({ baseURL: baseUrl });

export const getProducts = async () => {
  let allProds = await FONBackend.get("get_products");
  console.table(allProds)
  return allProds.data
}

export const validateCoupon = async (coupon) => {
  let couponPercentage = await FONBackend.post("is_coupon_valid", { "coupon_code": coupon });
  return couponPercentage.data;
};

export const submitApplication = async (application) => {
  //debugger;
  let message = "";
  const headers = {
    "Content-Type": " text/html; charset=UTF-8",
  };
  const res = await FONBackend.post("save_application", application, {
    headers: headers,
  });
  message = res.data;
  return message;
};

export const getUserInfo = (user) => {
  return FONBackend.post("get_transaction_details", user).then((res) => {
    return res.data;
  });
};

export function DataAccess() { }

//! outDated with the new endpoints.
export const getInitData = async () => {
  let initData = await FONBackend.get("get_init");
  return initData.data;
};
