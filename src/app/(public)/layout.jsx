import MainNavbar from "@/app/components/public/global/mainNavbar"
import Footer from "@/app/components/public/global/footer"

export default function PulicLayout({ children }) {
    return (
        <div>
            <MainNavbar />
            <main className="mt-[65px]">
                {children}
            </main>
            <Footer />
        </div>
    )
}