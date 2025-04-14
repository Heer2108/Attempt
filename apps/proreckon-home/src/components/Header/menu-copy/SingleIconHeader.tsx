"use client";

import React from "react";
import Image from "next/image";

const SingleIconHeader = ({url}: {url: string}) => {
  return (
    <div className="header-menu style-one bg-white">
      <div className="container flex items-center justify-center h-20">
        <a href={url}>
          <Image
            src={"/images/Logo.png"}
            width={2000}
            height={1000}
            alt="logo"
            priority={true}
            className="w-[240px] max-sm:w-[162px]"
          />
        </a>
      </div>
    </div>
  );
};

export default SingleIconHeader;
