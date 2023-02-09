import React from "react";
import "./var.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Var = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="card">
      <button onClick={() => navigate("/")}>Nav</button>
      <input onChange={(event) => setInput(event.target.value)} />
      <div className="and">
        {data.map((e) => e.title.includes(input) && <h1>{e.title}</h1>)}
      </div>
    </div>
  );
};
export default Var;
