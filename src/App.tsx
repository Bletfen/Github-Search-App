import "./App.css";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import MainDisplay from "./components/MainDisplay";
function App() {
  return (
    <div className="bg-[#141d2f] h-screen px-[2.4rem]">
      <Header />
      <SearchInput />
      <MainDisplay />
    </div>
  );
}

export default App;
