// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: boolean;
    statusCode: number;
    data: {
        id: number;
        name: string;
        price: string;
        size: string;  
    }[]; //jika dalam bentuk array
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) { 
    const data = [
        {
            id : 1,
            name : "baju",
            price : "200.000",
            size : "L",
        },
         {
            id : 2,
            name : "celana",
            price : "100.000",
            size : "L",
        }
    ]
  res.status(200).json({ status: true, statusCode: 200, data });
}
 // ini adalah handler untuk API route di Next.js yang mengembalikan data JSON dengan nama "John Doe" dan usia 30. Handler ini menerima permintaan (req) dan respons (res) sebagai parameter, dan mengirimkan respons dengan status 200 (OK) beserta data yang diminta. Ini adalah cara untuk membuat endpoint API sederhana dalam aplikasi Next.js.