import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./login.module.css"; // Import CSS module for styling

const LoginPage = () => {

    const { push } = useRouter();
    // useRouter digunakan untuk mengakses fungsi push untuk navigasi

    const handleLogin = () => {
        // Logika untuk menangani login
        // Misalnya, memanggil API untuk autentikasi
        push("/product"); // Redirect ke halaman product setelah login berhasil
    };

    return (
        <div className={styles.login}>
            <h1>Login Page</h1>
            <button onClick={() => handleLogin()}>LOGIN</button>
            <p>belum punya akun? register <Link href="/auth/register">register</Link></p>
        </div>

    )
}

export default LoginPage;