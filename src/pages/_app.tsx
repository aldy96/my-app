import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <AppShell>
    <Component {...pageProps} />
  </AppShell>
  )
} // Ini adalah file _app.tsx yang digunakan untuk mengatur komponen utama aplikasi Next.js. File ini mengimpor AppShell sebagai layout utama yang berisi Navbar dan children. Kemudian, komponen App menerima props Component dan pageProps, yang digunakan untuk merender halaman yang sesuai
