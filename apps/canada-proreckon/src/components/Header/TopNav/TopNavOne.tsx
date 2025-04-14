import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import dynamic from 'next/dynamic';

const CountrySelection = dynamic(()=> import('./CountrySelection'), {
    ssr:true,
})

const TopNavOne = () => {
  return (
    <>
      <div className="top-nav style-one bg-dark">
        <div className="container flex items-center justify-between h-[44px]">
          <div className="left-block flex items-center">
            <div className="flex items-center">
              <Icon.Phone className="text-white text-xl" />
              <Link href="tel:+18787898449">
                <span className="ml-2 caption1 text-white max-lg:hidden">
                  +1 878 789 8449
                </span>
              </Link>
              <Link href="tel:+18787898449">
                <span className="pr-2 ml-2 caption1 text-white md:hidden">
                  Call Us
                </span>
              </Link>
            </div>
            <div className="mail lg:ml-7 flex items-center max-lg:hidden">
              <Icon.Envelope className="text-white text-xl" />
              <span className="ml-2 caption1 text-white">
                Mon-Sat: 10 AM - 7PM IST
              </span>
            </div>
          </div>
          <div className="right-block flex items-center md:gap-5">
            <div>
              <CountrySelection />
            </div>
            <div className="select-block relative"></div>
            <div className="line h-6 w-px bg-grey max-sm:hidden"> </div>
            <div className="list-social flex items-center gap-2.5 style-one max-sm:hidden">
              <Link
                className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61565876035377"
                target="_blank"
              >
                <i className="icon-facebook text-sm"></i>
              </Link>
              <Link
                className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                href="https://www.linkedin.com/company/proreckon-solutions/"
                target="_blank"
              >
                <i className="icon-in text-xs"></i>
              </Link>
              <Link
                className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                href="https://x.com/proreckon"
                target="_blank"
              >
                <i className="icon-twitter text-[10px]"></i>
              </Link>
              <Link
                className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                href="https://www.instagram.com/proreckon"
                target="_blank"
              >
                <i className="icon-insta text-[10px]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavOne;
