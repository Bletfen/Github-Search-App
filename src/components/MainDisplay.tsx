import Location from "/assets/icon-location.svg";
import WebSite from "/assets/icon-website.svg";
import Twitter from "/assets/icon-twitter.svg";
import Company from "/assets/icon-company.svg";
import type { IuserInfo } from "../types";

export default function MainDisplay({
  userInfo,
}: {
  userInfo: IuserInfo | null;
}) {
  return (
    <div
      className="bg-[#1e2a47] rounded-[1.5rem] pt-[3.3rem] pb-[4.8rem] w-full
      px-[2.4rem] mt-[1.6rem] text-[1.3rem] font-[400] text-[#fff]
      max-w-[73rem]"
    >
      <div className="flex items-center gap-[2rem] mb-[3.3rem]">
        <img
          src={userInfo?.avatar_url}
          alt=""
          className="w-[7rem] h-[7rem] rounded-[7rem]"
        />
        <div className="flex flex-col">
          {userInfo && (
            <h2 className="text-[1.6rem] font-[700]">{userInfo.name}</h2>
          )}
          <a
            href={`https://github.com/${userInfo?.login}`}
            className="text-[#0079ff]"
          >
            @{userInfo?.login}
          </a>
          {userInfo && (
            <p className="mt-[0.6rem]">
              Joined{" "}
              {new Date(userInfo.created_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          )}
        </div>
      </div>
      {userInfo && (
        <p className="leading-[2.5rem]">
          {userInfo.bio ? userInfo.bio : "No bio available"}
        </p>
      )}
      <div
        className="flex py-[1.8rem] px-[1.5rem]
      bg-[#141d2f] rounded-[1rem] text-[1.1rem] font-[400] text-center
      justify-around mt-[2.2rem]"
      >
        <div className="flex flex-col gap-[0.8rem]">
          <span>Repos</span>
          <span className="text-[1.6rem] font-[700] uppercase">
            {userInfo?.public_repos}
          </span>
        </div>
        <div className="flex flex-col gap-[0.8rem]">
          <span>Followers</span>
          <span className="text-[1.6rem] font-[700] uppercase">
            {userInfo?.followers}
          </span>
        </div>
        <div className="flex flex-col gap-[0.8rem]">
          <span>Following</span>
          <span className="text-[1.6rem] font-[700] uppercase">
            {userInfo?.following}
          </span>
        </div>
      </div>
      <div className="mt-[2.5rem] flex flex-col gap-[1.6rem]">
        <div className="flex flex-col gap-[1.6rem]">
          <div className="flex gap-[1.9rem]">
            <img src={Location} alt="icon-location" />
            <span>
              {userInfo?.location ? userInfo.location : "Not Available"}
            </span>
          </div>
          <div className="flex gap-[1.3rem]">
            <img src={WebSite} alt="icon-website" />

            {userInfo?.blog ? (
              <a
                href={userInfo.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {userInfo.blog}
              </a>
            ) : (
              <span className="text-gray-500">Not Available</span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[1.6rem]">
          <div className="flex gap-[1.3rem]">
            <img src={Twitter} alt="icon-twitter" />
            <span>
              {userInfo?.twitter_username
                ? userInfo.twitter_username
                : "Not Available"}
            </span>
          </div>
          <div className="flex gap-[1.3rem]">
            <img src={Company} alt="icon-company" />
            <span>
              {userInfo?.company ? userInfo.company : "Not Available"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
