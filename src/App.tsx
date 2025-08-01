import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import MainDisplay from "./components/MainDisplay";
import type { TSearch, IuserInfo } from "./types";
function App() {
  const [searchInput, setSearchInput] = useState<TSearch>("octocat");
  const [userInfo, setUserInfo] = useState<IuserInfo | null>(null);
  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${searchInput}`);
    const resData = await response.json();
    setUserInfo(resData);
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
      />
      <MainDisplay userInfo={userInfo} />
    </div>
  );
}

export default App;
