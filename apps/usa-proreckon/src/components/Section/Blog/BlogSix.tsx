import React from "react"
import Link from "next/link"
import { BlogType } from "@/type/BlogType"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

interface Props {
    data: Array<BlogType>
}

const BlogSix: React.FC<Props> = ({ data }) => {
    return (
        <section className="list-blog three-col text-white style-six lg:py-[100px] sm:py-16 py-10">
            <div className="container">
                <div className="heading flex items-center justify-between">
                    <h3 className="heading3">Latest News</h3>
                    <Link className="text-button underline hover:text-orange duration-300" href="/blog/blog-list-one">
                        View All
                    </Link>
                </div>
                <div className="list grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:mt-10 mt-6">
                    {data.slice(3, 6).map((item) => (
                        <Link
                            key={item.id}
                            className="blog-item block"
                            href={"/blog/blog-detail/[slug]"}
                            as={"/blog/blog-detail/" + item.slug}
                        >
                            <div className="w-full">
                                <div className="bg-img w-full overflow-hidden rounded-xl">
                                    <Image width={500} height={500} className="w-full h-full block" src={item.img} alt={item.title} />
                                </div>
                                <div className="heading6 mt-4">{item.title}</div>
                                <div className="date flex items-center gap-4 mt-3">
                                    <div className="author caption2 text-placehover">by <span className="text-white">{item.author} </span></div>
                                    <div className="item-date flex items-center">
                                        <Icon.CalendarBlank weight='bold' />
                                        <span className="ml-1 caption2">{item.date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default BlogSix