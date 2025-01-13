import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl py-5 px-4 mx-auto flex flex-wrap items-center justify-between border-b-[1px] border-zinc-600">
      <div className="nleft flex items-center gap-10">
        <img
          className="h-7 w-auto filter brightness-0 invert"
          src="https://cdn.brandfetch.io/idZgdi6uSQ/theme/dark/logo.svg?c=1bfwsmEH20zzEfSNTed"
          alt="Brand Logo"
        />
        <div className="links hidden md:flex gap-14">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-1 h-7 bg-zinc-600"></span>
            ) : (
              <a
                key={index}
                className="text-sm flex items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
