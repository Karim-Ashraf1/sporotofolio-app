import { useState } from "react";
import axios from "axios";
import "./AISearch.css";
import Navbar from "../Navbar";
import LeftMenu from "../LeftMenu";

function AISearch() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "AIzaSyDyRcqI4HHXA-7u4dXMpkfjXfKBMF5TYRo";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await axios.post(API_URL, {
        contents: [{ parts: [{ text: query }] }],
      });

      const aiResponse =
        response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
      setResult(aiResponse);
    } catch (err) {
      setError("Failed to fetch results. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <LeftMenu />
      <div className="search-container">
        <p className="search-title">Welcome to sportofolio AI..</p>
        <p className="search-intro-text">Your personal sports companion revolutionizing the way you train and excel! Sportofolio AI offers tailored diet plans, instant answers to your sports-related queries, and expert insights—all powered by advanced technology. This intelligent assistant bridges the gap between sports and innovation, providing personalized, data-driven solutions to enhance your performance and streamline your journey. Whether you're a player, coach, or enthusiast, Sportofolio AI transforms how you approach fitness, nutrition, and training in the ever-evolving sports industry.</p>
        <form onSubmit={handleSearch} className="ai-search-form">
          <input
            type="text"
            className="ai-search-input"
            placeholder="Ask Sportofolio here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className={`search-button ${loading ? "disabled" : ""}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {result && (
          <div className="search-result">
            <h2>Sportofolio AI</h2>
            <p>{result}</p>
          </div>
        )}
      </div>  
    </div>
  );
}

export default AISearch;
