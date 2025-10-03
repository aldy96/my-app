import { Html, Head, Main, NextScript } from "next/document"; // Importing necessary components from Next.js

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} // ini adalah file _document.tsx yang digunakan untuk mengatur struktur HTML dasar dari aplikasi Next.js. Ini termasuk elemen <Html>, <Head>, <Main>, dan <NextScript>. Elemen <Html> menentukan bahasa dokumen, <Head> digunakan untuk menambahkan metadata, <Main> adalah tempat di mana konten utama aplikasi akan dirender, dan <NextScript> menyisipkan skrip yang diperlukan oleh Next.js. Ini adalah bagian penting dari arsitektur Next.js untuk memastikan bahwa aplikasi berfungsi dengan baik dan memiliki struktur yang benar.
