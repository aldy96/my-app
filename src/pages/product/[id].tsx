//ini adalah file untuk halaman produk dengan id dinamis

import { useRouter } from 'next/router'; // Mengimpor useRouter dari Next.js untuk mengakses parameter query dari URL

const DetailProduk = () => {
    const { query } = useRouter();

    return (
        <div>
            <h1>Detail Produk</h1>
            <p>Id Produk: {query.id}</p>
        </div>
    );

};

export default DetailProduk;
// Ini adalah komponen DetailProduk yang menggunakan useRouter dari Next.js untuk mendapatkan parameter query dari URL. Komponen ini menampilkan judul "Detail Produk" dan id produk yang diambil dari query.
//[id].tsx adalah file yang menangani rute dinamis untuk produk berdasarkan id-nya. Ketika pengguna mengakses URL seperti /product/123, komponen ini akan dirender dengan id 123. (SLUG)
