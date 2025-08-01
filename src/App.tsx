import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import MainDisplay from "./components/MainDisplay";
import type { TSearch, IuserInfo } from "./types";
function App() {
  const [searchInput, setSearchInput] = useState<TSearch>("octocat");
  const [userInfo, setUserInfo] = useState<IuserInfo | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${searchInput}`);
    const resData = await response.json();
    if (resData.message === "Not Found") {
      setNotFound(true);
      return;
    }
    setNotFound(false);
    setUserInfo(resData);
    setSearchInput("");
    console.log(resData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      className="bg-[#141d2f] h-screen px-[2.4rem] flex
    flex-col items-center justify-center"
    >
      <Header />
      <SearchInput
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        fetchData={fetchData}
        notFound={notFound}
      />
      <MainDisplay userInfo={userInfo} />
    </div>
  );
}

export default App;
