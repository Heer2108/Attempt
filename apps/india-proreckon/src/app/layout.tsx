import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/style.scss";
import { countryName, metaDescription } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `ProReckon Solutions | India`,
  description: metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>ProReckon Solutions | India</title>
        <meta
          name="description"
          content="Proreckon Solutions India specializes in professional Personal Financial Solutions, Business Financing & Growth, and Financial Advisory & Support Services. We provide accurate, reliable, and tailored solutions to help businesses manage their finances, streamline operations, and ensure compliance with industry standards."
        />

        <meta property="og:url" content="https://proreckonsolutions.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ProReckon Solutions | India" />
        <meta
          property="og:description"
          content="Proreckon Solutions India specializes in professional Personal Financial Solutions, Business Financing & Growth, and Financial Advisory & Support Services. We provide accurate, reliable, and tailored solutions to help businesses manage their finances, streamline operations, and ensure compliance with industry standards."
        />

        <meta
          property="og:image"
          content="/open-graph.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="proreckonsolutions.in" />
        <meta
          property="twitter:url"
          content="https://proreckonsolutions.in/"
        />
        <meta name="twitter:title" content="ProReckon Solutions | India" />
        <meta
          name="twitter:description"
          content="Proreckon Solutions India specializes in professional Personal Financial Solutions, Business Financing & Growth, and Financial Advisory & Support Services. We provide accurate, reliable, and tailored solutions to help businesses manage their finances, streamline operations, and ensure compliance with industry standards."
        />
        <meta
          name="twitter:image"
          content="/open-graph.jpg"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
