import API from "../config/urlConfig";

export const getPersonajePorNombre = async (url, method) => {
  try {
    return await API[method](url).then((resp) => resp.data);
  } catch (error) {
    console.log(error);
    return false;
  }
};
