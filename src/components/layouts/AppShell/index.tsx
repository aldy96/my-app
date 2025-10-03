// menjadi cangkang utama aplikasi yang berisi Navbar dan children

import { useRouter } from "next/router";
import Navbar from "../Navbar/Navbar"

type AppShellProps = {
    children: React.ReactNode; 
} // Mendefinisikan tipe props yang akan diterima oleh AppShell

const disableNavbar = ["/auth/login", "/auth/register"]

const AppShell = (props: AppShellProps) => {
    
    const { children } = props // Mengambil children dari props
    const { pathname } = useRouter() // Menggunakan useRouter untuk mendapatkan pathname saat ini
    // useRouter digunakan untuk mengakses informasi tentang rute saat ini
    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    )
}

export default AppShell;