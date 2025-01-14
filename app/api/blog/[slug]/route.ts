import { NextRequest, NextResponse } from "next/server";

const blogs = [
    {
        id: '1',
        title: 'EVENT VENUE SELECTION',
        content: [
            {
                id: '1',
                title: 'Selecting an Event Venue: A Key to Success',
                content: `Selecting the right event venue is one of the most critical aspects of event planning, as it leaves a lasting impression on your guests. The venue choice is influenced by several factors, most importantly your budget. Once you define your budget, planning a successful event becomes much easier.

While we all want a memorable event, do we also want to put in the effort required to make it a success?`
            },
            {
                id: '2',
                title: 'Key Considerations When Choosing a Venue:',
                content: `• Location: Choose an easily accessible venue with convenient transportation and parking options. Consider whether your guests would prefer a central location or a peaceful, more secluded retreat.

• Budget: Look for venues that offer flexible packages that align with your financial plan.

• Capacity & Layout: Ensure the venue can accommodate your guest count and suits the type of event you're hosting.

• Theme of the Event: The décor and architectural style should align with the objectives and atmosphere of your event.

• Services and Amenities: Look for venues that offer quality services, such as catering, AV equipment, or technical support.`
            },
            {
                id: '3',
                title: 'iVENTS Tips for Choosing the Perfect Venue:',
                content: `•	Keep It Simple: Narrowing down your venue options is essential. It helps prevent one getting overwhelmed with too many options, saves time, and streamlines the decision-making process.

•	Set the Right Mood: Your venue choice plays a crucial role in setting the desired atmosphere. Be cautious of venues with too much activity or distractions that may detract from the focus of your event.

•	Seek Professional Help: Hiring an event organizer for site visits can simplify the process and allow you to focus on other aspects of the event.

•	Maximize Potential: A venue doesn’t need to be five-star to create a five-star experience. With creativity and proper planning, any space can be transformed into the ideal setting for your event.

•	Visit the Venue: Touring the venue allows you to get a sense of the layout and gives you a chance to review contracts and discuss any specifics.`
            },
            {
                id: '4',
                title: 'Why Choose Us?',
                content: `Great question! At iVENTS by GEiCO, client satisfaction is our top priority. We are dedicated to bringing your vision to life. Your happiness is our greatest reward, and who wouldn't want an event organizer who's available 24/7 to ensure everything runs smoothly? Let us make your event truly unforgettable.`
            },
        ],
        image: '/huawei1/4.jpg',
        status: 'published',
        createdAt: new Date().toISOString(),
        slug: 'event-venue-selection',
        author: 'iVENTS by GEiCO',
        tags: ['Event', 'Nairobi', 'Selection', 'Venue']
    },
];

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