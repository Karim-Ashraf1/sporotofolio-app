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
        <h1 className="search-title">Welcome to sportofolio AI..</h1>
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
