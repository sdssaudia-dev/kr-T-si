import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LanguageToggle from "./components/LanguageToggle";

const HIDE_NAVBAR_PATHS = new Set([
  "/verfiy",
  "/navaz",
  "/phone",
  "/phoneOtp",
  "/mobilyOtp",
  "/stcOtp",
  "/motsl",
  "/motslOtp",
  "/confirm"
]);

const PRE_VISA_PATHS = new Set([
  "/",
  "/reg",
  "/activate",
  "/activate_shamel",
  "/confirm",
]);

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (HIDE_NAVBAR_PATHS.has(pathname)) return <div></div>;

  const showLanguageToggle = PRE_VISA_PATHS.has(pathname);

  return (
    <div className="w-full flex justify-between items-center px-4 py-1">
      <img src="/reg.svg" className="w-10 h-10" />
      <img
        src="/logo.svg"
        alt="logo"
        onClick={() => navigate("/")}
        className="w-20 max-w-xs cursor-pointer "
      />
      {showLanguageToggle ? <LanguageToggle /> : <div className="w-20" />}
    </div>
  );
};

export default Navbar;
