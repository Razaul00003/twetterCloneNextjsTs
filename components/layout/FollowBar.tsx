import React from "react";

const FollowBar = () => {
  return (
    <div className="px-6 py-4 hidden lg:block ">
      <div className="bg-neutral-300 roundec-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4 ">{/* to od user list */}</div>
      </div>
    </div>
  );
};

export default FollowBar;
