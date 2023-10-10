import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [userState, setUserState] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("data")) {
        setUserState(JSON.parse(localStorage.getItem("data")));
      } else {
        navigate("/login");
      }
    }, 1000);
  }, []);
  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Forums",
      link: "/",
    },
    {
      name: "Friends",
      link: "/",
    },
    {
      name: "Groups",
      link: "/",
    },
  ];

  const userSettings = [
    {
      name: "Account Settings",
      link: "/",
    },
    {
      name: "Security",
      link: "/",
    },
    {
      name: "Pages Manager",
      link: "/",
    },
    {
      name: "Report a Bug",
      link: "/",
    },
  ];
  return (
    <>
      <div className="p-2">
        <div className="profile-mini-card px-4">{userState.email}</div>
      </div>
      <div className="p-2">
        <ul className="border-b border-1 border-dark/10">
          {menu.map((m, i) => (
            <li key={i} className="px-4 py-2">
              {m.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-2">
        <h1 className="text-sm font-bold">User Settings</h1>
        <ul className="border-b border-1 border-dark/10">
          {userSettings.map((m, i) => (
            <li key={i} className="px-4 py-2">
              {m.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
