"use client";

import Link from "next/link";

export const GetQuoteBtn = () => {
  function onLinkClick() {
    document
      .getElementById("interest-form")
      ?.scrollIntoView({ behavior: "smooth" });
    // will scroll to 4th h3 element
  }
  return (
    <Link href="/contact">
    <button
      className="button-main text-white bg-blue hover-button-black text-button w-full"
    >
      Get Consultation
    </button>
    </Link>
  );
};
