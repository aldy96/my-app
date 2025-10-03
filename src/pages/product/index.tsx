/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */ //untuk menonaktifkan peringatan dari eslint pada penggunaan useEffect


import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";

type productType = 
{ 
        id: number;
        name: string;
        price: string;
        size: string;  
};

const ProductPage = () => {

    const [IsLogin, setIsLogin] = useState(true); // State untuk mengecek apakah user sudah login
    const { push } = useRouter(); // useRouter digunakan untuk mengakses fungsi push untuk navigasi

    const [products, setProducts] = useState([]); // State untuk menyimpan data produk

    useEffect(() => {
        if (!IsLogin) {
            push("/auth/login"); // Redirect ke halaman login jika user belum login
        }
    }, [])

    useEffect(() => {
        fetch("/api/product")
        .then(res => res.json())
        .then(response => setProducts(response.data))
    }, []) // Fetch data dari API ketika komponen dimount


    return (
        <div>
            Produk Page
            <ul>
                {products.map((product: productType) => (
                    <li key={product.id}>
                        name : {product.name} <br />
                        price : {product.price} <br />
                        size : {product.size}<br />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductPage;
// This is a simple Next.js page component for the product page.