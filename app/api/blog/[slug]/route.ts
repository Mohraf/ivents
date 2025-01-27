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
        createdAt: '1/14/2025',
        slug: 'event-venue-selection',
        author: 'iVENTS by GEiCO',
        tags: ['Event', 'Nairobi', 'Selection', 'Venue']
    },
    {
        id: '2',
        title: 'EVENT BUDGET PLANNING',
        content: [
            {
                id: '1',
                title: 'Introduction',
                content: `What's the purpose of a budget? Is it to create discipline, or is it to limiit spending?

Whether you're organizing a corporate conference, an exhibition or a trade show, one thing remains constant: the importance of a solid budget plan.

Proper budget planning can make the difference between a smooth event and a financial disaster.`
            },
            {
                id: '2',
                title: 'Why Set a Budget?',
                content: `A well-structured budget not only promotes discipline but also helps manage and prioritize spending effectively.

At iVENTS by GEiCO, we understand that every event, regardless of budget, deserves to be exceptional. That's why we specialize in bringing any vision to life, ensuring that even with varying budget constraints, our clients experience a memorable and impactful event. We've perfected the art of making every event shine, no matter the financial scope.`
            },
            {
                id: '3',
                title: 'Key Elements of Budget Planning',
                content: `How to effectively manage and plan your event budgets to ensure success without breaking the bank.

•	Set a Realistic Budget: Outline your total budget and prioritize key elements. Seek guidance from proffesionals if 
    needed.

•	Focus on Priorities: Allocate more resources to essentials like the venue, audio visual, and decor.

•	Leverage Vendor Networks: Use event professionals to handle venue sourcing and negotiatiobns for better deals.

•	Ensure Event Flow: Engage professionals to manage the event day and avoid unexpected costs or disruptions.`
            },
            {
                id: '4',
                title: 'THANK YOU',
                content: `When it comes to budget planning, iVENTS by GEiCO ensures that every aspect of your event is managed with passion and expertise. We make sure your event
stays on track and within budget. 
                
Let us handle the details, so you can focus on making memories. With iVENTS by GEiCO, you are not just planning an event, you are creating an experience that's both unforgettable and cost-effective.`
            },
        ],
        image: '/bfsi/5.webp',
        status: 'published',
        createdAt: '1/27/2025',
        slug: 'event-budget-planning',
        author: 'iVENTS by GEiCO',
        tags: ['Event', 'Nairobi', 'Planning', 'Budget']
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