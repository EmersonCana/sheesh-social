import React from "react";

export default function CreatePost() {
  return (
    <>
      <div className="form-group flex">
        <input
          type="text"
          name="post"
          id="post"
          className="border-b grow border-dark/30 text-2xl py-1"
          placeholder="Say something. . ."
        />
        <button className="bg-dark text-white px-4 py-2">Say it!</button>
      </div>
    </>
  );
}
