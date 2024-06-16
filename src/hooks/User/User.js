import { useState } from "react";
import { HTTP_API } from "../../boot/https";

const useGetUser = () => {
    const [user, setUser] = useState ([])
  const getUserFromAPI = async () => {
    const response = await HTTP_API().get("view/profile/");
    console.log("response", response)
    setUser(response.data.data)
  };
  return {
    getUserFromAPI, 
    user
  };
};

export default useGetUser;
