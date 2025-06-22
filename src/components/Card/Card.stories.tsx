import { Avatar, AvatarFallback, AvatarImage } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './Card';
import { type Meta, type StoryObj } from '@storybook/react';
import {
    Bell,
    Bookmark,
    Calendar,
    ChevronRight,
    Globe,
    Heart,
    Mail,
    MapPin,
    MessageCircle,
    MoreHorizontal,
    Settings,
    Share2,
} from 'lucide-react';

const meta = {
    component: Card,
    title: 'Components/Card',
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle>Project Update</CardTitle>
                    <CardDescription>Latest changes and improvements</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        This is the main content of the card. It can contain any type of content
                        including text, images, or other components.
                    </p>
                </CardContent>
            </>
        ),
    },
};

export const WithFooter: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle>Newsletter</CardTitle>
                    <CardDescription>Stay updated with our latest news</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        Subscribe to our newsletter to receive weekly updates and exclusive content.
                    </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                    <div className="flex items-center gap-4">
                        <Button>Subscribe</Button>
                        <Button variant="outline">Learn More</Button>
                    </div>
                </CardFooter>
            </>
        ),
    },
};

export const WithAction: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>Manage your account preferences</CardDescription>
                    <CardAction>
                        <Button size="icon" variant="ghost">
                            <Settings />
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p>Configure your account settings and preferences here.</p>
                </CardContent>
            </>
        ),
    },
};

export const BlogPost: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle>Getting Started with React</CardTitle>
                    <CardDescription>A comprehensive guide for beginners</CardDescription>
                    <CardAction>
                        <Button size="icon" variant="ghost">
                            <Bookmark />
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p>
                        Learn the fundamentals of React development with this step-by-step tutorial.
                        We'll cover components, state management, and best practices.
                    </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                    <Button size="sm" variant="ghost">
                        <Heart />
                        24
                    </Button>
                    <Button size="sm" variant="ghost">
                        <MessageCircle />8
                    </Button>
                    <Button size="sm" variant="ghost">
                        <Share2 />
                        Share
                    </Button>
                </CardFooter>
            </>
        ),
    },
};

export const UserProfile: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/beuluis.png" />
                            <AvatarFallback>BL</AvatarFallback>
                        </Avatar>
                        Luis Beu
                    </CardTitle>
                    <CardDescription>Senior Full Stack Engineer</CardDescription>
                    <CardAction>
                        <Button size="icon" variant="ghost">
                            <MoreHorizontal />
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="size-4" />
                            Munich, Germany
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="size-4" />
                            me@luisbeu.de
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Globe className="size-4" />
                            luisbeu.de
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                    <Button>Connect</Button>
                    <Button variant="outline">Message</Button>
                </CardFooter>
            </>
        ),
    },
};

export const Event: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle>React Conference 2024</CardTitle>
                    <CardDescription>
                        Join us for the biggest React event of the year
                    </CardDescription>
                    <CardAction>
                        <Button size="icon" variant="ghost">
                            <Bell />
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                            <Calendar className="size-4" />
                            March 15-17, 2024
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <MapPin className="size-4" />
                            San Francisco Convention Center
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Three days of talks, workshops, and networking with the React community.
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                    <Button>Register Now</Button>
                    <Button variant="outline">
                        Learn More
                        <ChevronRight />
                    </Button>
                </CardFooter>
            </>
        ),
    },
};

export const Notification: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Bell className="size-5" />
                        New Message
                    </CardTitle>
                    <CardDescription>2 minutes ago</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        You have received a new message from Sarah Johnson regarding the project
                        proposal.
                    </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                    <Button size="sm">Reply</Button>
                    <Button size="sm" variant="ghost">
                        Mark as Read
                    </Button>
                </CardFooter>
            </>
        ),
    },
};
