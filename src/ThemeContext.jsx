import { createContext, useReducer, useContext, useState } from "react";
const ThemeContexttt = createContext();

const baseUrl = "https://google-search74.p.rapidapi.com";
const initialData = {
  theme:
    localStorage.getItem("mtTheme") === null
      ? "Light"
      : localStorage.getItem("mtTheme") === "Light"
      ? "Light"
      : "Dark",
};

const reducer = (firstState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...firstState, theme: action.newValue };
    default:
      return firstState;
  }
};

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const [result, setResult] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResult = async (query) => {
    setIsloading(true);

    try {
      // Construct the query string directly without additional encoding
      const url = `https://google-search74.p.rapidapi.com/?query=${encodeURIComponent(
        query
      )}&limit=10&related_keywords=true`;

      console.log("Fetching data from URL:", url); // Log the URL to debug

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "fff6f99c25mshd463fdb32b96caap130229jsn9cb9ad366213",
          "x-rapidapi-host": "google-search74.p.rapidapi.com",
        },
      });

      if (response.status === 403) {
        alert(
          "Forbidden: Your API key may be invalid or you may have exceeded your quota."
        );
        setIsloading(false);
        return;
      }

      if (response.status === 429) {
        const retryAfter = response.headers.get("Retry-After");
        alert(
          `Too many requests. Please try again after ${
            retryAfter || "some time"
          }`
        );
        setIsloading(false);
        return;
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data. Please try again.");
    } finally {
      setIsloading(false);
    }
  };

  const toggleTheme = (newName) => {
    localStorage.setItem("mtTheme", newName);
    dispatch({ type: "CHANGE_THEME", newValue: newName });
  };

  return (
    <ThemeContexttt.Provider
      value={{
        ...firstState,
        toggleTheme,
        getResult,
        result,
        searchTerm,
        setSearchTerm,
        isLoading,
      }}
    >
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
