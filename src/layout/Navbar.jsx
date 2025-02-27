import { Button } from "@/components/ui/button";
import { useLazyLogoutQuery } from "@/rtkQuery/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/AuthSlice";
import toast from "react-hot-toast";
const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [logout, { data, isLoading, isError }] = useLazyLogoutQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const res = await logout();

    if (res.data) {
      dispatch(logoutUser());
      toast.success(res.data.message);
      navigate("/login");
    }
  };

  return (
    <header className="w-full h-16 px-4 sm:px-16 border-b border-gray-200 sticky top-0 bg-slate-50">
      <nav className="flex items-center justify-between h-full">
        <div>
          <h2 className="text-xl font-semibold">Logo</h2>
        </div>
        {/* <div></div> */}

        {isLoggedIn ? (
          <Button
            onClick={handleLogout}
            className="rounded-full px-5 text-sm mx-1"
          >
            Logout
          </Button>
        ) : (
          <div>
            <button
              onClick={() => navigate("/sign-up")}
              className="rounded-full bg-transparent px-4 text-md mx-1 sm:mx-4"
            >
              Sign up
            </button>
            <Button
              onClick={() => navigate("/login")}
              className="rounded-full px-5 text-sm mx-1"
            >
              Login
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
