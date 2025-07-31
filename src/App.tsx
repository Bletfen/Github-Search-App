import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import MainDisplay from "./components/MainDisplay";
function App() {
  const [searchInput, setSearchInput] = useState();
  return (
    <div
      className="bg-[#141d2f] h-screen px-[2.4rem] flex
    flex-col items-center justify-center"
    >
      <Header />
      <SearchInput />
      <MainDisplay />
    </div>
  );
}

export default App;
