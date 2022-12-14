import React from "react";

const Spinner = () => {
  return (
    <>
      <div class="flex justify-center items-center h-full">
        <div
          class="spinner-border animate-spin inline-block w-18 h-18 border-4 rounded-full"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
