import { cookies } from "next/headers";
import { NextResponse } from "next/server";

interface Params {
    params: Promise<{ id: string }>
}

export async function PATCH(req: Request, { params }: Params) {
    const { id: teamMemberId } = await params;

    if (!teamMemberId) {
        return NextResponse.json({ message: 'invalid team member id' }, { status: 400 });
    }

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('admin-token')?.value;

        if (!token) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const formData = await req.formData();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/team-members/${teamMemberId}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${token}`,
            },
            body: formData
        });

        const data = res.status !== 204 ? await res.json().catch(() => ({})) : {};

        if (!res.ok) {
            return NextResponse.json({ message: data.message || 'Unauthorized' }, { status: res.status });
        }

        return NextResponse.json({ success: true, project: data });

    } catch (err) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}


export async function DELETE(req: Request, { params }: Params) {
    const { id: teamMemberId } = await params;

    if (!teamMemberId) {
        return NextResponse.json({ message: 'invalid team member id' }, { status: 400 });
    }

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('admin-token')?.value;

        if (!token) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/team-members/${teamMemberId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
            }
        });

        const data = res.status !== 204 ? await res.json().catch(() => ({})) : {};

        if (!res.ok) {
            return NextResponse.json({ message: data.message || 'Unauthorized' }, { status: res.status });
        }

        return NextResponse.json({ success: true });

    } catch (err) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}