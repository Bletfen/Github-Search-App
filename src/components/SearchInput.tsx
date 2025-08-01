import SearchSvg from "/assets/icon-search.svg";
import type { TSearch } from "../types";

export default function SearchInput({
  searchInput,
  setSearchInput,
  fetchData,
  notFound,
}: {
  searchInput: TSearch;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  fetchData: () => Promise<void>;
  notFound: boolean;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const clickHandle = () => {
    fetchData();
    setSearchInput("");
  };

  return (
    <div
      className="text-[#fff] w-full
      flex pt-[0.65rem] pb-[0.75rem] pl-[1.6rem] pr-[0.7rem]
      rounded-[1.5rem] bg-[#1e2a47] items-center mt-[3.5rem]
      max-w-[73rem] xl:py-[0.95rem] xl:pr-[1rem] xl:pl-[3.2rem]"
    >
      <img src={SearchSvg} alt="search-icon" className="mr-[0.8rem]" />
      <input
        type="text"
        placeholder="Search GitHub username…"
        className="ml-[0.7rem] w-full
        text-[#fff] text-[1.3rem] font-[400] leading-[2.5rem]
        xl:text-[1.8rem] xl:ml-[2.4rem]"
        value={searchInput === "octocat" ? "" : searchInput}
        onChange={(e) => handleChange(e)}
      />
      <div className="flex items-center">
        {notFound ? (
          <span
            className="text-[1.3rem] xl:text-[1.5rem] font-bold
        text-[#f74646] w-[9.2rem]"
          >
            No result
          </span>
        ) : null}
        <button
          className="py-[1.2rem] px-[1.6rem]
      rounded-[1rem] bg-[#0079ff] text-[1.4rem] font-[700]
      cursor-[pointer] xl:text-[1.6rem] xl:px-[2.4rem]"
          onClick={clickHandle}
        >
          Search
        </button>
      </div>
    </div>
  );
}
