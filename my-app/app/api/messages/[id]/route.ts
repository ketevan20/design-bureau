import { NextResponse } from "next/server";
import { cookies } from "next/headers";

interface Params {
    params: Promise<{ id: string }>;
}

export async function DELETE(req: Request, { params }: Params) {
    const { id: messageId } = await params;

    if (!messageId) {
        return NextResponse.json({ message: "Invalid message ID" }, { status: 400 });
    }

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("admin-token")?.value;

        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages/${messageId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = res.status !== 204 ? await res.json().catch(() => ({})) : {};

        if (!res.ok) {
            return NextResponse.json({ message: data.message || "Failed to delete" }, { status: res.status });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
