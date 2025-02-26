import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full h-16 px-16 border-b border-gray-200 sticky top-0 bg-slate-50">
      <nav className="flex items-center justify-between h-full">
        <div>
          <h2 className="text-xl font-semibold">Logo</h2>
        </div>
        {/* <div></div> */}
        <div>
          <Button
            onClick={() => navigate("/sign-up")}
            variant="outline"
            className="rounded-full px-4 text-md mx-4"
          >
            Sign up
          </Button>
          <Button
            onClick={() => navigate("/login")}
            className="rounded-full px-5 text-sm mx-1"
          >
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
