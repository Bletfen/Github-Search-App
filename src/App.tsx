import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import MainDisplay from "./components/MainDisplay";
import type { TSearch } from "./types";
function App() {
  const [searchInput, setSearchInput] = useState<TSearch>("");
  return (
    <div
      className="bg-[#141d2f] h-screen px-[2.4rem] flex
    flex-col items-center justify-center"
    >
      <Header />
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <MainDisplay searchInput={searchInput} />
    </div>
  );
}

export default App;
