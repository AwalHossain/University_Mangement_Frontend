import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body, 'checking');
    return NextResponse.json({ name: "File uploaded" });
}