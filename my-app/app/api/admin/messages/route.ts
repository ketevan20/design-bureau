import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies(); // await
    const token = cookieStore.get("admin-token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: data.message || "Something went wrong" },
        { status: res.status }
      );
    }

    return NextResponse.json({ messages: data });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}