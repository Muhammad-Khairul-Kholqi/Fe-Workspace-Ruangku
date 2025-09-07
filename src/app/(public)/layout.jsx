import MainNavbar from "@/app/components/public/global/mainNavbar"

export default function PulicLayout({ children }) {
    return (
        <div>
            <MainNavbar />
            <main className="mt-[65px]">
                {children}
            </main>
        </div>
    )
}