import { useRouter } from "next/router";



const RegisterPage = () => {


    const {push} = useRouter();

    const handleToLogin = () => {

    // Logika untuk menangani navigasi ke halaman login
    // Misalnya, bisa menggunakan router.push("/auth/login") jika perlu
        push("/auth/login"); // Redirect ke halaman login
    };
    


    return (
        <div>
            <h1>Register Page</h1>
            <p>Sudah punya akun?<p onClick={handleToLogin}>Login here</p> </p>
        </div>
    )
}

export default RegisterPage;