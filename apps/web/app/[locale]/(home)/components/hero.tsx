import { env } from '@/env';
import { blog } from '@repo/cms';
import { Feed } from '@repo/cms/components/feed';
import { Button } from '@repo/design-system/components/ui/button';
import type { Dictionary } from '@repo/internationalization';
import { MoveRight, PhoneCall } from 'lucide-react';
import Link from 'next/link';

type HeroProps = {
  dictionary: Dictionary;
};

type BlogQueryResult = {
  blog?: {
    posts?: {
      item?: {
        _slug?: string;
      };
    };
  };
};

const BlogAnnouncement = ({
  dictionary,
  data,
}: { dictionary: Dictionary; data: BlogQueryResult | null }) => {
  if (
    !data ||
    !data.blog ||
    !data.blog.posts ||
    !data.blog.posts.item ||
    !data.blog.posts.item._slug
  ) {
    return null;
  }

  return (
    <Button variant="secondary" size="sm" className="gap-4" asChild>
      <Link href={`/blog/${data.blog.posts.item._slug}`}>
        {dictionary.web.home.hero.announcement}{' '}
        <MoveRight className="h-4 w-4" />
      </Link>
    </Button>
  );
};

export const Hero = async ({ dictionary }: HeroProps) => {
  // Fetch latest blog post data with error handling
  let blogData: BlogQueryResult | null = null;
  try {
    const latestPost = await blog.getLatestPost();
    if (latestPost) {
      blogData = { blog: { posts: { item: latestPost } } };
    }
  } catch (_error) {
    // Silent fail - we'll render without the blog announcement
    // This is acceptable for a non-critical UI element
  }

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <div>
            <Feed data={{ blog: blogData }}>
              {(data: Record<string, unknown>) => {
                const blogResult = data.blog as BlogQueryResult | null;
                return (
                  <BlogAnnouncement dictionary={dictionary} data={blogResult} />
                );
              }}
            </Feed>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="max-w-2xl text-center font-regular text-5xl tracking-tighter md:text-7xl">
              {dictionary.web.home.meta.title}
            </h1>
            <p className="max-w-2xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
              {dictionary.web.home.meta.description}
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <Link href="/contact">
                Get in touch <PhoneCall className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" className="gap-4" asChild>
              <Link href={env.NEXT_PUBLIC_APP_URL}>
                Sign up <MoveRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
