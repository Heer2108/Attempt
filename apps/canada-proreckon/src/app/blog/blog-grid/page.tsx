import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import LayoutGrid from "@/components/Blog/LayoutGrid"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import { Suspense } from "react"

export default function BlogListStyleTwo() {
    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <TopNavOne />
                    <MenuOne />
                </header>
                <main className="content">
                    <BreadcrumbItem link="Blog" img="/images/banner/about3.jpg" title="Blog" desc="Explore comprehensive financial services including accounting, tax filings, and VAT returns with ProReckon Solutions – your trusted partner for precise and efficient business management. " />
                    <Suspense>
                        <LayoutGrid />
                    </Suspense>
                    <CtaOne cta={'Consult Us Today'} />
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}
