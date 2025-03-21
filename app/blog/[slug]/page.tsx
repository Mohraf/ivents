"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Head from "next/head";

interface BlogPostSection {
  id: string;
  title: string;
  image: string;
  content: string;
}

interface BlogPost {
  id: string;
  title: string;
  content: BlogPostSection[];
  image: string | null;
  status: "draft" | "published";
  createdAt: string;
  slug: string;
  author?: string;
  readTime?: number;
  tags?: string[];
}

const BlogPostPage = () => {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/blog/${params.slug}`);
        console.log(params.slug);
        console.log(typeof params.slug);

        if (!response.ok) {
          throw new Error("Failed to fetch blog post");
        }

        const data = await response.json();
        setPost(data.post);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.slug) {
      fetchPost();
    }
  }, [params.slug]);

  // const calculateReadTime = (content: string) => {
  //     const wordsPerMinute = 200;
  //     const wordCount = content.trim().split(/\s+/).length;
  //     return Math.ceil(wordCount / wordsPerMinute);
  // };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-300 p-6 flex items-center justify-center">
        <div className="max-w-4xl w-full space-y-6">
          <Skeleton className="h-96 w-full bg-slate-400 rounded-xl" />
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4 bg-slate-400" />
            <div className="flex space-x-4">
              <Skeleton className="h-8 w-1/4 bg-slate-400" />
              <Skeleton className="h-8 w-1/4 bg-slate-400" />
            </div>
            <div className="space-y-3">
              <Skeleton className="h-4 w-full bg-slate-400" />
              <Skeleton className="h-4 w-full bg-slate-400" />
              <Skeleton className="h-4 w-3/4 bg-slate-400" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 p-6 flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Oops! Post Not Found</h2>
          <p className="text-gray-400">
            {error || "The blog post you're looking for doesn't exist."}
          </p>
          <Link href="/blog">
            <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
              <ArrowUp className="mr-2" /> Return to Posts
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`${post.title}`} />
        <meta
          name="keywords"
          content="Corporate, Event, Venue, Kenya, East Africa"
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-400 text-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Back Button */}
          <Link href="/blog" className="mb-6 inline-block">
            <Button
              variant="outline"
              className="text-white bg-slate-500 border-gray-700 hover:bg-gray-800 hover:text-white"
            >
              <ArrowUp className="mr-2" /> View all Posts
            </Button>
          </Link>

          {/* Post Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author || "Anonymous"}</span>
              </div>
              <div className="h-4 w-px bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>
                  {new Date(post.createdAt).toLocaleDateString()}
                  {" • "}
                  {/* {calculateReadTime(post.content)} min read */}
                </span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-12 shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Post Content */}
          {post.content.map((section) => (
            <div key={section.id}>
              <h2 className="my-4 text-2xl font-semibold">{section.title}</h2>
              {section.image && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-12 shadow-2xl">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
              <article className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-blue-400 prose-strong:text-white whitespace-pre-wrap">
                {section.content}
              </article>
            </div>
          ))}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 border-t border-gray-800 pt-6">
              <h3 className="text-xl mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
