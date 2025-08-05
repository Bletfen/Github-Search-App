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
  const [dark, setDark] = useState<boolean>(false);
  const fetchData = async (queryArg?: string) => {
    const query = (queryArg ?? inputRef.current?.value ?? "").trim();
    if (!query) return;
    const response = await fetch(`https://api.github.com/users/${query}`);
    const resData = await response.json();
    if (resData.message === "Not Found") {
      setNotFound(true);
      return;
    }

    setNotFound(false);
    setUserInfo(resData);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  useEffect(() => {
    fetchData("octocat");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div
      className="bg-[#f6f8ff] h-screen px-[2.4rem] flex
    flex-col items-center justify-center dark:bg-[#141d2f] transition duration-500"
    >
      <Header dark={dark} setDark={setDark} />
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
