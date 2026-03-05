import { NextResponse } from "next/server";
import { cookies } from "next/headers";

interface Params {
    params: Promise<{ id: string; imageId: string }>;
}

export async function DELETE(req: Request, { params }: Params) {
    const { id: projectId, imageId } = await params;

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("admin-token")?.value;

        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${projectId}/images/${imageId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = res.status !== 204 ? await res.json().catch(() => ({})) : {};

        if (!res.ok) {
            return NextResponse.json({ message: data.message || "Failed to delete image" }, { status: res.status });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
