import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useLoginMutation } from "@/rtkQuery/auth";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { IoEyeOffOutline } from "react-icons/io5";

import { setLogin, setUser } from "../redux/AuthSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
const Login = () => {
  const [passwordValidation, setPasswordValidation] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [login, { isLoading, isError }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Getting the route where the user wanted to go
  const redirectTo = searchParams.get("redirectTo") || "/";
  function validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(password)) {
      return true;
    } else {
      setPasswordValidation(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );

      return false;
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const values = Object.fromEntries(formData.entries());

      let isPasswordValid = validatePassword(values.password);
      if (!isPasswordValid) return;

      const res = await login(values);
      console.log(res);
      if (res.data) {
        dispatch(setLogin(res.data.success));
        dispatch(setUser(res.data.user));

        toast.success(res.data.message);

        if (res.data.user.iAm === "doctor") return navigate("/dashboard");
        navigate(redirectTo, { replace: true });
      }
      if (res.error) toast.error(res.error.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <div className="w-full  lg:w-4/5 xl:w-[60%] mx-auto min-h-[60vh] bg-[#4d23b8] sm:rounded-3xl my-6 sm:shadow-lg overflow-hidden flex ">
      <div className="w-96 min-h-[60vh] p-4 flex flex-col items-center justify-around max-md:hidden">
        <h2 className="text-2xl font-bold text-center text-white">
          Login with your credentials
        </h2>
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/login-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--security-access-key-password-ouuu-scenes-pack-people-illustrations-2526913.png?f=webp"
          alt=""
          className="w-64"
        />
      </div>

      <div className="w-full md:w-3/4  bg-white sm:rounded-3xl flex justify-center max-sm:px-4">
        <form action="" onSubmit={handleLogin} className="w-full sm:w-96 py-12">
          <h2 className="font-semibold text-2xl my-4 text-[#4d23b8] ">Login</h2>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="outline-none border-b border-gray-300 py-2 my-2 w-full"
            />
          </div>
          <div className="flex items-center justify-between w-full border-b">
            <input
              type={togglePassword ? "text" : "password"}
              name="password"
              onChange={() => setPasswordValidation(false)}
              placeholder="Password"
              className="outline-none  border-gray-300 py-2 w-full"
            />

            <button
              type="button"
              onClick={() => setTogglePassword(!togglePassword)}
              className=""
            >
              {togglePassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>

          <div>
            <p className="text-sm text-red-600">{passwordValidation}</p>
          </div>

          <Button type="submit" className="w-full rounded-full my-4">
            {isLoading ? "Loading..." : "Login"}
          </Button>

          <div className="flex justify-center items-center">
            <hr className=""></hr>
            <span className="block text-gray-500">Or Login with</span>
            <hr className=""></hr>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
