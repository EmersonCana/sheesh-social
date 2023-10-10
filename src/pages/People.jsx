import React from "react";
import useFetch from "../hooks/useFetch";
import Navbar from "../components/Navbar";
import PeopleList from "../components/PeopleList";

export default function People() {
  const { data, loading } = useFetch({
    url: "https://dummyapi.io/data/v1/user?limit=10",
  });
  return (
    <>
      <PeopleList />
    </>
  );
}
