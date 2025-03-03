import {
    NextRequest,
    NextResponse
} from 'next/server';
import { z } from 'zod';

const BlogSectionSchema = z.object({
    id: z.string(),
    title: z.string().min(1, { message: "Title is required"}).max(255),
    content: z.string().min(1, { message: "Content is required"})
})

const BlogPostSchema = z.object({
    title: z.string().min(1, { message: "Title is required"}).max(255),
    content: z.array(BlogSectionSchema).min(1, { message: "Content sections are required"}),
    image: z.string().url().nullable().optional(),
    status: z.enum(["draft", "published"]).default("draft")
});


export async function POST(request: NextRequest) {
    try {
        // Parse the incoming JSON body
        const body = await request.json();

        // Validate the request body against the schema
        const validatedData = BlogPostSchema.parse(body);

        // TODO: Replace with your actual database insertion logic
        // This is a placeholder for your database interaction
        const newPost = {
            ...validatedData,
            createdAt: new Date(),
            updatedAt: new Date(),
            slug: validatedData.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
        };

        // TODO: Actually save to database
        // For example, if using Prisma:
        // const savedPost = await prisma.post.create({ data: newPost });

        return NextResponse.json(
            {
                message: `Blog post ${validatedData.status === 'published' ? 'published' : 'saved as draft'} successfully`,
                post: newPost
            },
            { status: 201 }
        );
    } catch (error) {
        // Handle validation errors
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    message: "Validation Error",
                    errors: error.errors
                },
                { status: 400 }
            );
        }

        // Handle other unexpected errors
        console.error('Blog post creation error:', error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}


const mockPosts = [
    {
        id: '1',
        title: 'EVENT VENUE SELECTION',
        content: 'Selecting an Event Venue: A Key to Success...',
        image: '/huawei1/4.jpg',
        status: 'published',
        createdAt: '1/14/2025',
        slug: 'event-venue-selection'
    },
    {
        id: '2',
        title: 'EVENT BUDGET PLANNING',
        content: 'At iVENTS by GEiCO, we turn any vision into a memorable experience, regardless of budget.',
        image: '/bfsi/5.webp',
        status: 'published',
        createdAt: '1/27/2025',
        slug: 'event-budget-planning'
    },
    {
        id: '3',
        title: 'MASTERING EVENT SETUP AND TEARDOWN',
        content: 'How to effectively manage event setup and teardown for a seamless experience',
        image: '/huawei-it/cover.jpg',
        status: 'published',
        createdAt: '1/27/2025',
        slug: 'event-setup-and-teardown'
    },
    // Add more mock posts as needed
];

export async function GET() {
    try {
        const publishedPosts = mockPosts.filter(post => post.status === 'published');

        return NextResponse.json(
            {
                posts: publishedPosts,
                total: publishedPosts.length
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json(
            { message: "Failed to fetch blog posts" },
            { status: 500 }
        );
    }
}