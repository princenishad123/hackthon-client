import { Button } from "@/components/ui/button";
import { useLazyLogoutQuery } from "@/rtkQuery/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/AuthSlice";
import toast from "react-hot-toast";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

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

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/Blog",
    },
    {
      name: "Our team",
      link: "/our-team",
    },
  ];

  return (
    <header className="w-full h-16 px-4 sm:px-16 border-b border-gray-200 sticky top-0 z-50 bg-slate-50">
      <nav className="flex items-center justify-between h-full">
        <div>
          <h2 className="text-xl font-semibold">
            <svg
              width="150"
              height="124.59512195121951"
              viewBox="0 0 410 129"
              class="looka-1j8o68f"
            >
              <defs id="SvgjsDefs1182"></defs>
              <g
                id="SvgjsG1183"
                featurekey="symbolContainer"
                transform="matrix(1,0,0,1,0,0)"
                fill="#4d23b8"
              >
                <rect
                  xmlns="http://www.w3.org/2000/svg"
                  width="110"
                  height="129"
                  rx="10"
                  ry="10"
                ></rect>
              </g>
              <g
                id="SvgjsG1184"
                featurekey="uHI19F-0"
                transform="matrix(0.9942568506978406,0,0,0.9942568506978406,4.392622516292196,14.728673906631073)"
                fill="#ffffff"
              >
                <g xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.147,81.16c-1.638,1.276-1.932,3.64-0.655,5.279c0.741,0.951,1.849,1.448,2.968,1.448c0.808,0,1.623-0.259,2.311-0.795   c3.135-2.441,7.417-3.973,12.144-5.309c-1.461-2.079-2.97-4.253-4.414-6.532C24.976,76.657,20.664,78.423,17.147,81.16z"></path>
                  <path d="M54.558,7.611c-0.802-1.916-3.005-2.819-4.921-2.016c-1.916,0.801-2.818,3.004-2.017,4.921   c1.93,4.61,4.931,9.113,7.833,13.469c3.933,5.901,7.733,11.61,9.321,17.711l-20.609-7.718c2.632-1.685,5.615-2.96,8.805-4.03   l-5.1-7.304c-8.646,3.253-16.546,8.412-20.531,19.049c-5.915,15.795,2.644,27.965,10.196,38.705   c2.95,4.194,5.736,8.155,7.461,12.027c0.713,1.602,2.283,2.552,3.929,2.552c0.584,0,1.179-0.119,1.746-0.373   c2.169-0.966,3.145-3.507,2.179-5.674c-2.066-4.64-5.226-9.132-8.283-13.479c-3.951-5.617-7.775-11.06-9.542-16.834l20.441,7.655   c-2.74,1.821-5.86,3.157-9.197,4.268l4.468,6.398c8.53-3.158,16.388-8.199,20.376-18.851c5.796-15.471-2.278-27.586-9.399-38.273   C58.884,15.568,56.21,11.557,54.558,7.611z M59.288,63.114L34.07,53.669c-0.171-2.229,0.015-4.525,0.662-6.913l28.487,10.669   C62.153,59.653,60.828,61.525,59.288,63.114z M64.733,53.402L36.248,42.734c1.071-2.204,2.414-4.062,3.99-5.638l25.286,9.469   C65.623,48.771,65.39,51.041,64.733,53.402z"></path>
                  <path d="M85.009,11.782c-1.581-1.769-4.298-1.923-6.069-0.342c-3.258,2.91-8.129,4.635-13.55,6.143   c1.59,2.385,3.26,4.896,4.831,7.546c5.39-1.642,10.5-3.753,14.446-7.278C86.437,16.27,86.591,13.553,85.009,11.782z"></path>
                </g>
              </g>
              <g
                id="SvgjsG1185"
                featurekey="8FbbNb-0"
                transform="matrix(3.485188110071447,0,0,3.485188110071447,127.21184843172917,20.992281624003212)"
                fill="#000000"
              >
                <path d="M5.7 10.28 c1.4533 0 2.5834 0.45664 3.39 1.37 s1.2167 2.17 1.23 3.77 l0 0.5 l-7.6 0 c0 0.77334 0.31 1.4233 0.93 1.95 s1.3767 0.79666 2.27 0.81 c0.98666 0 1.8533 -0.47334 2.6 -1.42 l1.36 1.04 c-1.0133 1.2933 -2.4134 1.94 -4.2 1.94 c-1.4533 0 -2.6234 -0.46334 -3.51 -1.39 s-1.3433 -2.1234 -1.37 -3.59 c0 -1.4133 0.45666 -2.59 1.37 -3.53 s2.09 -1.4233 3.53 -1.45 z M8.4 14.48 c-0.02666 -0.89334 -0.28 -1.5767 -0.76 -2.05 s-1.14 -0.71 -1.98 -0.71 c-0.56 0 -1.0633 0.13666 -1.51 0.41 s-0.79666 0.62668 -1.05 1.06 s-0.38 0.86334 -0.38 1.29 l5.68 0 z M16.98 10.3 c1.5067 0 2.72 0.5 3.64 1.5 l-1.36 1.24 c-0.65334 -0.70666 -1.44 -1.06 -2.36 -1.06 c-0.88 0 -1.5933 0.31334 -2.14 0.94 s-0.82 1.4333 -0.82 2.42 c0 0.93334 0.28666 1.7 0.86 2.3 s1.3067 0.90666 2.2 0.92 c0.94666 0 1.7133 -0.35334 2.3 -1.06 l1.28 1.28 c-0.85334 0.97334 -2.0534 1.46 -3.6 1.46 c-1.4533 0 -2.6366 -0.45334 -3.55 -1.36 s-1.3833 -2.1 -1.41 -3.58 c0.01334 -1.5067 0.48334 -2.7134 1.41 -3.62 s2.11 -1.3667 3.55 -1.38 z M23.92 4.880000000000001 l0.000019531 7.1 l0.04 0 c0.25334 -0.53334 0.66334 -0.95 1.23 -1.25 s1.1967 -0.45 1.89 -0.45 c1.0533 0 1.89 0.32 2.51 0.96 s0.93 1.5 0.93 2.58 l0 6.18 l-1.8 0 l0 -5.66 c0 -0.73334 -0.19 -1.3133 -0.57 -1.74 s-0.91 -0.64 -1.59 -0.64 c-0.84 0 -1.4867 0.27334 -1.94 0.82 s-0.68668 1.3 -0.70002 2.26 l0 4.96 l-1.8 0 l0 -15.12 l1.8 0 z M37.82 10.28 c1.4 0 2.5866 0.48338 3.56 1.45 s1.4667 2.1434 1.48 3.53 c0 1.4 -0.48666 2.5734 -1.46 3.52 s-2.1666 1.4333 -3.58 1.46 c-1.3867 0 -2.5666 -0.48 -3.54 -1.44 s-1.4733 -2.14 -1.5 -3.54 c0 -1.3733 0.48334 -2.54 1.45 -3.5 s2.1634 -1.4533 3.59 -1.48 z M34.7 15.26 c0 0.97334 0.28664 1.7633 0.85998 2.37 s1.3267 0.91666 2.26 0.93 c0.94666 0 1.7 -0.30334 2.26 -0.91 s0.84666 -1.4033 0.86 -2.39 c0 -0.97334 -0.28 -1.7633 -0.84 -2.37 s-1.3267 -0.91666 -2.3 -0.93 c-0.94666 0 -1.7 0.31334 -2.26 0.94 s-0.84 1.4133 -0.84 2.36 z M49.620000000000005 10.3 c1.5067 0 2.72 0.5 3.64 1.5 l-1.36 1.24 c-0.65334 -0.70666 -1.44 -1.06 -2.36 -1.06 c-0.88 0 -1.5933 0.31334 -2.14 0.94 s-0.82 1.4333 -0.82 2.42 c0 0.93334 0.28666 1.7 0.86 2.3 s1.3067 0.90666 2.2 0.92 c0.94666 0 1.7133 -0.35334 2.3 -1.06 l1.28 1.28 c-0.85334 0.97334 -2.0534 1.46 -3.6 1.46 c-1.4533 0 -2.6366 -0.45334 -3.55 -1.36 s-1.3833 -2.1 -1.41 -3.58 c0.01334 -1.5067 0.48334 -2.7134 1.41 -3.62 s2.11 -1.3667 3.55 -1.38 z M58.56 10.28 c1.2 0 2.15 0.27328 2.85 0.81994 s1.07 1.3067 1.11 2.28 l0 5.08 c0 0.48 0.02666 0.99334 0.08 1.54 l-1.6 0 c-0.04 -0.42666 -0.06 -0.90666 -0.06 -1.44 l-0.04 0 c-0.41334 0.61334 -0.89 1.0467 -1.43 1.3 s-1.17 0.38 -1.89 0.38 c-0.97334 0 -1.7633 -0.26 -2.37 -0.78 s-0.91 -1.2067 -0.91 -2.06 c0 -1.08 0.45334 -1.8967 1.36 -2.45 s2.1866 -0.83 3.84 -0.83 l1.34 0 l0 -0.34 c0 -0.64 -0.21 -1.1433 -0.63 -1.51 s-0.97 -0.55 -1.65 -0.55 c-0.50666 0 -0.95 0.07666 -1.33 0.23 s-0.83 0.43668 -1.35 0.85002 l-1.08 -1.12 c1.0267 -0.90666 2.28 -1.3733 3.76 -1.4 z M56.10000000000001 17.259999999999998 c0 1.0267 0.68002 1.54 2.04 1.54 c0.81334 0 1.4633 -0.24334 1.95 -0.73 s0.73666 -1.19 0.75 -2.11 l0 -0.52 l-1.02 0 c-1.1733 0 -2.0866 0.15 -2.74 0.45 s-0.98 0.75666 -0.98 1.37 z M69.82000000000001 10.28 c0.33334 0 0.6 0.04 0.8 0.12 l-0.08 1.94 c-0.34666 -0.09334 -0.64666 -0.14 -0.9 -0.14 c-1.7733 0 -2.6734 0.98666 -2.7 2.96 l0 4.84 l-1.8 0 l0 -9.48 l1.8 0 l0 1.46 l0.04 0 c0.24 -0.50666 0.62666 -0.91666 1.16 -1.23 s1.0933 -0.47 1.68 -0.47 z M76.52000000000001 10.28 c1.4533 0 2.5834 0.45664 3.39 1.37 s1.2167 2.17 1.23 3.77 l0 0.5 l-7.6 0 c0 0.77334 0.31 1.4233 0.93 1.95 s1.3767 0.79666 2.27 0.81 c0.98666 0 1.8533 -0.47334 2.6 -1.42 l1.36 1.04 c-1.0133 1.2933 -2.4134 1.94 -4.2 1.94 c-1.4533 0 -2.6234 -0.46334 -3.51 -1.39 s-1.3433 -2.1234 -1.37 -3.59 c0 -1.4133 0.45666 -2.59 1.37 -3.53 s2.09 -1.4233 3.53 -1.45 z M79.22000000000001 14.48 c-0.02666 -0.89334 -0.28 -1.5767 -0.76 -2.05 s-1.14 -0.71 -1.98 -0.71 c-0.56 0 -1.0633 0.13666 -1.51 0.41 s-0.79666 0.62668 -1.05 1.06 s-0.38 0.86334 -0.38 1.29 l5.68 0 z"></path>
              </g>
            </svg>
          </h2>
        </div>
        <div>
          <ul>
            {links.map((e, idx) => (
              <NavLink key={idx} to={e.link}>
                <li className="inline-block mx-4 text-gray-700 font-semibold">
                  {e.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>

        {isLoggedIn ? (
          // <Button
          //   onClick={handleLogout}
          //   className="rounded-full px-5 text-sm mx-1"
          // >
          //   Logout
          // </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={5}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>

              <DropdownMenuSeparator />
              <NavLink to="/account">
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </NavLink>
              {user?.iAm === "doctor" && (
                <NavLink to="/dashboard">
                  <DropdownMenuItem>dashboard</DropdownMenuItem>
                </NavLink>
              )}

              <NavLink to={"my-appointments"}>
                <DropdownMenuItem>My appointment</DropdownMenuItem>
              </NavLink>
              <DropdownMenuItem
                className={"font-semibold"}
                onClick={handleLogout}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
