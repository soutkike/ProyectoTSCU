import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Component = () => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/getEntries")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setInitialState(jsonResponse.data));
  }, []);

  return (
    <div>
      {initialState.length > 0 &&
        initialState.map((e, i) => <li key={i}>{e}</li>)}
    </div>
  );
};

export default Component;
