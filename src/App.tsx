import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import MainDisplay from "./components/MainDisplay";
import type { TSearch } from "./types";
function App() {
  const [searchInput, setSearchInput] = useState<TSearch>("");
  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${searchInput}`);
    const resData = await response.json();
    console.log(resData);
  };
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
      <MainDisplay searchInput={searchInput} fetchData={fetchData} />
    </div>
  );
}

export default App;
