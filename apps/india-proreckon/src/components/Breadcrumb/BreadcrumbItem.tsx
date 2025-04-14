import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    link: string;
    img: string;
    title: string;
    desc: string;
    subLink?: string;
}

const BreadcrumbItem: React.FC<Props> = ({ link, img, title, desc, subLink }) => {
    return (
      <div className="breadcrumb-block relative w-full h-[320px] overflow-hidden">
        {/* Background image */}
        <div className="bg-img w-full h-full absolute top-0 left-0">
          <Image
            src={img}
            width={1000}
            height={750}
            alt="banner"
            quality={65}
            className="object-cover w-full h-full"
            priority // Ensures the image is loaded quickly
          />
        </div>
        {/* Content */}
        <div className="container relative flex items-center h-full">
          <div className="heading-nav flex items-center gap-1 absolute top-4 left-4 py-1.5 px-4 rounded-full bg-line">
            <Link className="caption1 text-white" href="/">
              Home
            </Link>
            <Icon.CaretDoubleRight className="text-white" />
            <div className="caption1 text-white">{link}</div>
            {subLink ? (
              <>
                <Icon.CaretDoubleRight className="text-white" />
                <div className="caption1 text-white">{subLink}</div>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="text-nav xl:w-1/2 md:w-3/5 mt-4">
            <div className="heading3 text-white">{title}</div>
            <div className="sub-heading text-white font-normal mt-2">
              {desc}
            </div>
          </div>
        </div>
      </div>
    );
};

export default BreadcrumbItem;


