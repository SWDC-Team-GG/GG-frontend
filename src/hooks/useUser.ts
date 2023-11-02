import { useLocation } from "react-router-dom";
import { getLogout, getUser } from "api/allGets";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import IUser from "interfaces/IUser";

const useUser = () => {
  const location = useLocation();
  const [user, setUser] = useState<IUser | null>(null);

  const fetchUser = async () => {
    try {
      const data = await getUser();
      setUser(data);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [location]);

  const logout = async () => {
    try {
      const data = await getLogout();
      toast.success(`${data}`);
      setUser(null);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (err && axiosError.response) {
        toast.error(`${axiosError.response.data}`);
      } else {
        toast.error("알 수 없는 에러가 발생하였습니다!");
      }
    }
  };

  const isLogined = user ? 1 : 0;

  return { user, logout, isLogined };
};

export default useUser;
