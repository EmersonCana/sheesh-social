import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import HeartIcon from "../components/icons/HeartIcon.svg";

export default function Feed() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios
      .get("https://dummyapi.io/data/v1/post?limit=10", config)
      .then((res) => {
        setRecords(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
    return controller.abort();
  }, []);

  const config = {
    headers: {
      "app-id": import.meta.env.VITE_DUMMY_API_APP_ID,
    },
  };

  return (
    <>
      {loading
        ? "Loading..."
        : records.map((post, i) => (
            <div key={i} className="card shadow-md w-100 px-5 py-5 bg-white">
              <div className="owner-details flex gap-2">
                <img
                  src={post.owner.picture}
                  alt={`${post.owner.firstName} ${post.owner.lastName}`}
                  className="h-[25px] rounded-full"
                />
                <h1 className="text-lg">{`${post.owner.firstName} ${post.owner.lastName}`}</h1>
              </div>
              <div className="data-tags">
                <span className="text-sm italic">
                  {dayjs(post.publishDate).format("MMM DD, YYYY hh:mmA")}
                </span>
              </div>
              <div className="post-body">
                <img src={post.image} alt="" />
              </div>
              <div className="tag-pills flex gap-2">
                {post.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="tag-pill bg-dark/30 text-sm py-1 px-2 rounded-full my-2"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="caption text-lg border-b border-dark/10">
                {post.text}
              </div>
              <div className="reactions my-2 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                {post.likes}
              </div>
            </div>
          ))}
    </>
  );
}
