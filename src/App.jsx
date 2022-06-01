import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CharCard from "./components/Characters/CharCard/CharCard";
import Characters from "./components/Characters/Characters";
import Episodes from "./components/Episodes/Episodes";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

const App = () => {
  const [data, setData] = useState("");
  const [episode, setEpisode] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/episodes`);
      setEpisode(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters char={data} />} />
          <Route path="/characters/:id" element={<CharCard char={data} />} />
          <Route path="/episodes" element={<Episodes episode={episode} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
