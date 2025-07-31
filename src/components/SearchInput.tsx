import SearchSvg from "/assets/icon-search.svg";
export default function SearchInput() {
  return (
    <div
      className="px-[2.4rem] text-[#fff] w-full
      flex py-[2rem] pl-[1.6rem] pr-[0.7rem]
      rounded-[1.5rem] bg-[#1e2a47] items-center"
    >
      <img src={SearchSvg} alt="search-icon" className="mr-[0.8rem]" />
      <input
        type="text"
        placeholder="Search GitHub username…"
        className="mr-[0.7rem] w-full
        text-[#fff] text-[1.3rem] font-[400] leading-[2.5rem]"
      />
      <button>Search</button>
    </div>
  );
}
