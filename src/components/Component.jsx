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
      <h1>XD</h1>
      <ul>
        {initialState.map((e, i) => (
          <li key={i}>{e.time}</li>
        ))}
      </ul>
    </div>
  );
};

export default Component;
