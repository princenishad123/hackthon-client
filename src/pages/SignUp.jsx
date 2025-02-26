import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useSignUpMutation } from "../rtkQuery/auth";
import { toast } from "react-hot-toast";
const SignUp = () => {
  const [signUp, { isLoading, isError }] = useSignUpMutation();
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const values = Object.fromEntries(formData.entries());

      const res = await signUp(values);

      if (res.data) {
        toast.success(res.data.message);
      }

      if (isError) toast.error(res.error.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full  lg:w-4/5 xl:w-[60%] mx-auto min-h-[75vh] bg-[#949fff] sm:rounded-3xl my-6 sm:shadow-lg overflow-hidden flex ">
      <div className="w-96 min-h-[75vh] p-4 flex flex-col items-center justify-around max-md:hidden">
        <h2 className="text-2xl font-bold text-center text-white">
          Learn from world's Best Intructor arount the world
        </h2>
        <img
          src="https://iluzialabs.com/wp-content/uploads/2023/03/3D-modeling-animation.png"
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
              type="password"
              name="password"
              placeholder="Password"
              className="outline-none  border-gray-300 py-2 w-full"
            />

            <button type="button" className="">
              <IoEyeOutline />
            </button>
          </div>

          <div className="flex items-center justify-start gap-2 my-4">
            <Checkbox required={true} />{" "}
            <span>
              I agree to the{" "}
              <span className="text-blue-600">terms of services</span>
            </span>
          </div>

          <Button type="submit" className="w-full rounded-full my-4">
            {isLoading ? "Signing..." : "Sign up"}
          </Button>

          <div className="flex justify-center items-center">
            <hr className=""></hr>
            <span className="block text-gray-500">Or Sign-up with</span>
            <hr className=""></hr>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
