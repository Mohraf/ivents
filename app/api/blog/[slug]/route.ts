import { NextRequest, NextResponse } from "next/server";
import { blogs } from "@/lib/data/blogs"



export async function GET(
    request: NextRequest,
    params: { params: Promise<{ slug: string }> }
) {
    try {
        const slug = (await params.params).slug;
        const post = blogs.find(p => p.slug === slug);

        if (!post) {
            return NextResponse.json(
                { message: "Blog post not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ post }, { status: 200 });
    } catch (error) {
        console.error('Error fetching post:', error);
        return NextResponse.json(
            { message: "Failed to fetch blog post" },
            { status: 500 }
        );
    }
}