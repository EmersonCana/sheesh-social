import React from "react";
import Navbar from "../components/Navbar";
import CreatePost from "../components/CreatePost";
import Feed from "../components/Feed";
import People from "./People";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex flex-row ">
        <div className="hidden md:block basis-2/6 border-e border-1 border-dark/20 h-screen box-border text-black">
          <Sidebar />
        </div>
        <div className="sm:basis-full w-full shadow  bg-dark/10 overflow-y-scroll">
          <div className="sm:basis-full w-full p-5 bg-white">
            <CreatePost />
          </div>

          <div className="sm:basis-full w-full mt-5 p-5 flex flex-col gap-5 h-screen">
            <Feed />
          </div>
        </div>
        <div className="hidden md:block basis-2/6 text-black">
          <People />
        </div>
      </div>
      <div className="flex flex-row"></div>
    </>
  );
}
