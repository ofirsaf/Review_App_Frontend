import client from "./client";
export const createUser = async (userInfo) => {
  try {
    const { data } = await client.post("/user/create", userInfo);
    return data;
  } catch (error) {
    const response = error.response;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const verifyUserEmail = async (userInfo) => {
  console.log(userInfo);
  try {
    const { data } = await client.post("/user/verify-email", userInfo);
    return data;
  } catch (error) {
    console.log(error);
    const response = error.response;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
