//ini adalah file untuk halaman produk dengan id dinamis

import { useRouter } from 'next/router'; // Mengimpor useRouter dari Next.js untuk mengakses parameter query dari URL

// [[...slug]] agar bisa diakses default

const ShopPage = () => {
    const { query } = useRouter();

    return (
        <div>
            <h1>Detail Produk</h1>
           id produk : {query.slug ? query.slug[0] : ""} - {query.slug ? query.slug[1] : ""}
           {/* ini adalah halaman produk dengan id dinamis dan slug harus menggunakan terniary*/}
        </div>
    );

};

export default ShopPage;
