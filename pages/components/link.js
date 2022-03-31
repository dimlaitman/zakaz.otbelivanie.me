import React from "react";

const Link = ({ params, icon, text, url }) => {
  return (
    <a href={url} target="_top">
      <div className={params}>
        <div className="flex-none">
          <svg
            className="w-10 h-10 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d={icon}></path>
          </svg>
        </div>
        <div className="grow text-base">
          <p>{text}</p>
        </div>
      </div>
    </a>
  );
};
export default Link;
