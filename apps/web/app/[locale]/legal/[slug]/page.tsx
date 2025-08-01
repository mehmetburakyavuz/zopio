import { Sidebar } from '@/components/sidebar';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { legal } from '@repo/cms';
import type { LegalPost } from '@repo/cms';
import { Body } from '@repo/cms/components/body';
import { Feed } from '@repo/cms/components/feed';
import { TableOfContents } from '@repo/cms/components/toc';
import { createMetadata } from '@repo/seo/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

type LegalPageProperties = {
  readonly params: Promise<{
    slug: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: LegalPageProperties): Promise<Metadata> => {
  const { slug } = await params;
  const post = await legal.getPost(slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post._title,
    description: post.description,
  });
};

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const posts = await legal.getPosts();

  return posts
    .filter(
      (post): post is typeof post & { _slug: string } =>
        typeof post._slug === 'string' && post._slug !== ''
    )
    .map(({ _slug }) => ({ slug: _slug }));
};

const LegalPage = async ({ params }: LegalPageProperties) => {
  const { slug } = await params;

  // Query the legal post data
  const data = await legal.getPost(slug);

  if (!data) {
    notFound();
  }

  // Type assertion to ensure TypeScript knows the structure
  const legalPost = data as LegalPost;

  return (
    <Feed data={{ page: legalPost }}>
      {(feedData) => {
        const page = feedData.page as LegalPost;

        if (!page) {
          return null;
        }

        return (
          <div className="container max-w-5xl py-16">
            <Link
              className="mb-4 inline-flex items-center gap-1 text-muted-foreground text-sm focus:underline focus:outline-none"
              href="/"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="scroll-m-20 font-extrabold text-4xl tracking-tight lg:text-5xl">
              <Balancer>{page._title}</Balancer>
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              <Balancer>{page.description}</Balancer>
            </p>
            <div className="mt-16 flex flex-col items-start gap-8 sm:flex-row">
              <div className="sm:flex-1">
                <div className="prose prose-neutral dark:prose-invert">
                  {page.body?.json?.content &&
                  Array.isArray(page.body.json.content) ? (
                    <Body content={page.body.json.content} />
                  ) : null}
                </div>
              </div>
              <div className="sticky top-24 hidden shrink-0 md:block">
                <Sidebar
                  toc={
                    page.body?.json?.toc ? (
                      <TableOfContents data={page.body.json.toc} />
                    ) : null
                  }
                  readingTime={
                    page.body?.readingTime
                      ? `${page.body.readingTime} min read`
                      : ''
                  }
                  date={new Date()}
                />
              </div>
            </div>
          </div>
        );
      }}
    </Feed>
  );
};

export default LegalPage;
