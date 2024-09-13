import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import Loading from "./Loading"; // Corrected import
import { debounce } from "lodash";

const Search = () => {
  const { result, isLoading, getResult } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    const debouncedGetResult = debounce(() => {
      getResult("/?query=Nike&limit=10&related_keywords=true"); // تأكد من صحة الرابط هنا
    }, []); // 1-second delay between API calls

    debouncedGetResult();

    return () => {
      debouncedGetResult.cancel(); // Clean up the debounced function
    };
  }, []);

  if (isLoading) return <Loading />; // Use Loading here
  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {result?.map(({ link, title }) => (
            <div key={link}>
              <h3>{title}</h3>
              <a href={link}>{link}</a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return "SEARCH";
    case "/news":
      return "SEARCH";
    case "/videos":
      return "SEARCH";
    default:
      return "ERROR!";
  }
};

export default Search;
