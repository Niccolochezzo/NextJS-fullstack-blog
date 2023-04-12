import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold  px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Weekly Blog</h1>
        <h2 className="mt-5 md:mt-0">
          The{" "}
          <span className="underline decoration-4 decoration-[#ff3333]">
            Internet
          </span>{" "}
          has no eraser
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-2-sm">
        The casual conversational tone of a blog is what makes it particularly
        dangerous
      </p>
    </div>
  );
};

export default Banner;
