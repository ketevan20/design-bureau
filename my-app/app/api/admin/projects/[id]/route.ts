import { NextResponse } from "next/server";
import { cookies } from "next/headers";

interface Params {
    params: Promise<{ id: string }>;
}

export async function PATCH(req: Request, { params }: Params) {
    const { id } = await params;

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("admin-token")?.value;
        if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const formData = await req.formData();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        const data = res.status !== 204 ? await res.json().catch(() => ({})) : {};
        if (!res.ok) return NextResponse.json({ message: data.message }, { status: res.status });

        return NextResponse.json({ success: true, project: data });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: Params) {
    const { id: projectId } = await params;

    if (!projectId) {
        return NextResponse.json({ message: "Invalid project ID" }, { status: 400 });
    }

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("admin-token")?.value;

        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${projectId}`, {
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