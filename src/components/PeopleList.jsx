import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function PeopleList() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios
      .get("https://dummyapi.io/data/v1/user?limit=5", config)
      .then((res) => {
        setRecords(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
    return controller.abort();
  }, []);

  console.log(records);

  const config = {
    headers: {
      "app-id": import.meta.env.VITE_DUMMY_API_APP_ID,
    },
  };
  return (
    <>
      <div className="p-2">
        <h1 className="text-xl font-bold">People you may know.</h1>
        <ul>
          {records.map((person, i) => (
            <li key={i} className="font-light flex justify-between gap-3 my-3">
              <div className="img-name flex gap-3">
                <img
                  src={person.picture}
                  alt=""
                  className="h-[30px] rounded-full"
                />
                {`${person.firstName} ${person.lastName}`}
              </div>
              <div className="chat">
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
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
