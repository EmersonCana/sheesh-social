import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      "app-id": import.meta.env.VITE_DUMMY_API_APP_ID,
    },
  };

  useEffect(() => {
    const controller = new AbortController();
    try {
      axios
        .get(url, config)
        .then((res) => setRecords(res))
        .catch((err) => console.error(err));
    } catch (err) {
      console.log(err);
    }

    return controller?.abort();
  }, [url]);
  return {
    records,
    loading,
  };
}
