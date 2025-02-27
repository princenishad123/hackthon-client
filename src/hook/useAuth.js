import {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import {useCheckAuthQuery} from "../rtkQuery/auth"
import {setLogin,setUser,logoutUser} from "../redux/AuthSlice"
const useAuth = () => {
    const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  // API se user verify karna
  const { data, isSuccess, isError ,isLoading} = useCheckAuthQuery(undefined,{skip:isLoggedIn});

  useEffect(() => {
    if (isSuccess && data?.success) {
        dispatch(setUser(data.user)); // API valid user data de rahi hai
        dispatch(setLogin(data.success))
    } else if (isError) {
      dispatch(logoutUser()); // Agar API fail hui toh logout kar do
    }
  }, [data, isSuccess, isError, dispatch]);

  return {user,isLoading};
}

export default useAuth
