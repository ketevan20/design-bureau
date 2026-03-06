import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("admin-token")?.value;
        if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const formdata = await req.formData();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/team-members`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formdata
        })

        const data = res.status !== 204 ? await res.json().catch(() => ({})) : {};

        if (!res.ok) {
            return NextResponse.json(
                { message: data.message || "Something went wrong" },
                { status: res.status }
            );
        }

        return NextResponse.json({ success: true, project: data });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}