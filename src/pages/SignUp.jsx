import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useSignUpMutation } from "../rtkQuery/auth";
import { toast } from "react-hot-toast";
const SignUp = () => {
  const [signUp, { isLoading, isError }] = useSignUpMutation();
  const [passwordValidation, setPasswordValidation] = useState(false);

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
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const values = Object.fromEntries(formData.entries());
      console.log(values);
      let isPasswordValid = validatePassword(values.password);
      if (!isPasswordValid) return;

      const res = await signUp(values);

      if (res.data) {
        toast.success(res.data.message);
      }

      if (isError) toast.error(res.error.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <div className="w-full  lg:w-4/5 xl:w-[60%] mx-auto min-h-[75vh] bg-[#1a69e0] sm:rounded-3xl my-6 sm:shadow-lg overflow-hidden flex ">
      <div className="w-96 min-h-[75vh] p-4 flex flex-col items-center justify-around max-md:hidden">
        <h2 className="text-2xl font-bold text-center text-white">
          Signup forms are an essential way .
        </h2>
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/secure-sign-in-3d-illustration-download-png-blend-fbx-gltf-file-formats--cybersecurity-login-authentication-digital-security-online-privacy-ufo-spaceship-and-activities-pack-people-illustrations-8932963.png?f=webp"
          alt=""
          className="w-64"
        />
      </div>

      {/* Sign up posts */}

      <div className="w-full md:w-3/4  bg-white sm:rounded-3xl flex justify-center max-sm:px-4">
        <form
          action=""
          onSubmit={handleSignUp}
          className="w-full sm:w-96 py-12"
        >
          <h2 className="font-semibold text-xl my-4">Create an account</h2>

          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="outline-none border-b border-gray-300 py-2 my-2 w-full"
            />
          </div>
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
              onClick={() => setTogglePassword(!togglePassword)}
              type="button"
              className=""
            >
              <IoEyeOutline />
            </button>
          </div>

          {/* choose who are you */}
          <div className="flex items-center">
            <span>I'm</span>
            <div className="radio-input ">
              <label className="label">
                <input
                  type="radio"
                  id="value-1"
                  defaultChecked
                  name="iAm"
                  defaultValue="doctor"
                />
                <p className="text">Doctor</p>
              </label>
            </div>
            <div className="radio-input ">
              <label className="label">
                <input
                  type="radio"
                  id="value-1"
                  defaultChecked
                  name="iAm"
                  defaultValue="patient"
                />
                <p className="text">Petient</p>
              </label>
            </div>
          </div>

          <div>
            <p className="text-sm text-red-600">{passwordValidation}</p>
          </div>

          <div className="flex items-center justify-start gap-2 my-4">
            <Checkbox required={true} />{" "}
            <span>
              I agree to the{" "}
              <span className="text-blue-600">terms of services</span>
            </span>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#1a69e0] rounded-full my-4"
          >
            {isLoading ? "Signing..." : "Sign up"}
          </Button>

          <div className="flex justify-center items-center">
            <hr className=""></hr>
            <span className="block  text-gray-500">Or Sign-up with</span>
            <hr className=""></hr>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
