import SearchSvg from "/assets/icon-search.svg";
import type { TSearch } from "../types";
export default function SearchInput({
  searchInput,
  setSearchInput,
}: {
  searchInput: TSearch;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div
      className="text-[#fff] w-full
      flex pt-[0.65rem] pb-[0.75rem] pl-[1.6rem] pr-[0.7rem]
      rounded-[1.5rem] bg-[#1e2a47] items-center mt-[3.5rem]
      max-w-[73rem]"
    >
      <img src={SearchSvg} alt="search-icon" className="mr-[0.8rem]" />
      <input
        type="text"
        placeholder="Search GitHub username…"
        className="mr-[0.7rem] w-full
        text-[#fff] text-[1.3rem] font-[400] leading-[2.5rem]"
      />
      <button
        className="py-[1.2rem] px-[1.6rem]
      rounded-[1rem] bg-[#0079ff] text-[1.4rem] font-[700]
      cursor-[pointer]"
      >
        Search
      </button>
    </div>
  );
}
