import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import MainDisplay from "./components/MainDisplay";
import type { IuserInfo } from "./types";
function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [userInfo, setUserInfo] = useState<IuserInfo | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (!saved) return false;
      return JSON.parse(saved);
    } catch (error) {
      console.error("Error parsing theme from localStorage:", error);
      localStorage.removeItem("theme");
      return false;
    }
  });

  const fetchData = async (queryArg?: string) => {
    const query = (queryArg ?? inputRef.current?.value ?? "").trim();
    if (!query) return;
    const response = await fetch(`https://api.github.com/users/${query}`);
    const resData = await response.json();
    if (resData.message === "Not Found") {
      setNotFound(true);
      return;
    }
    localStorage.setItem("user", query);
    setNotFound(false);
    setUserInfo(resData);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  useEffect(() => {
    try {
      localStorage.setItem("theme", JSON.stringify(isDark));
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (error) {
      console.error("Error saving theme to localStorage:", error);
    }
  }, [isDark]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const savedUserInfo = localStorage.getItem("user");
    if (savedUserInfo) {
      fetchData(savedUserInfo);
    } else {
      fetchData("octocat");
    }
  }, []);

  return (
    <div
      className="bg-[#f6f8ff] h-screen px-[2.4rem] flex
    flex-col items-center justify-center dark:bg-[#141d2f] transition duration-500"
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
      <SearchInput
        inputRef={inputRef}
        fetchData={fetchData}
        notFound={notFound}
      />
      <MainDisplay userInfo={userInfo} />
    </div>
  );
}

export default App;
