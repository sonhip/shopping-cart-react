import React from "react";

function Header() {
  return (
    <div className="flex justify-around items-center h-16 bg-main bg-opacity-50 z-10">
      <div className="flex item-center">
        <a href="/admin" className="block font-medium text-2xl">
          FOOD & DRINK
        </a>
      </div>
      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full overflow-hidden">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="name"
          />
        </div>
        <div>
          <h2 className="text-white ml-2">Hi, Sonhip</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
