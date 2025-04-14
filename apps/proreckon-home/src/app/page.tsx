import Link from "next/link";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className="h-screen">
      <section className="case-study-block style-one h-full">
        <div className="list-case-study h-full">
          <div className="list grid lg:grid-cols-4 sm:grid-cols-1 h-full">
            {[
              { src: "/images/landing-page/INDIA.jpg", alt: "INDIA", href: "https://proreckonsolutions.in" },
              { src: "/images/landing-page/USA.jpg", alt: "USA", href: "https://us.proreckonsolutions.com" },
              { src: "/images/landing-page/CANADA.jpg", alt: "CANADA", href: "https://ca.proreckonsolutions.com" },
              { src: "/images/landing-page/AUSTRALIA.jpg", alt: "AUSTRALIA", href: "https://au.proreckonsolutions.com" }
            ].map(({ src, alt, href }, index) => (
              <div key={index} className="w-full h-full">
                <div className="case-study-item h-full">
                  <div className="bg-img h-full">
                    <Image
                      src={src}
                      alt={alt}
                      width={800} // Adjusted to more reasonable dimensions for faster loading
                      height={600}
                      quality={40}
                      className="w-full h-full object-cover"
                      priority={index === 0} // Load the first image eagerly if needed
                    />
                  </div>
                  <div className="text text-left flex flex-col items-center justify-between gap-3">
                    <div className="heading3 text-center">
                      <Link className="text-white" href={href}>{`PRORECKON ${alt.toUpperCase()}`}</Link>
                    </div>
                    <div className="heading3 text-center">
                      <Link className="text-white" href={href}>
                        <Icon.ArrowCircleRight weight="bold" className="shadow-2xl" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

