import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getLegoEntries } from "app/lego/utils";
import { baseUrl } from "app/sitemap";
import remarkGfm from "remark-gfm";
import TableOfContents from "app/components/table-of-contents";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

export async function generateStaticParams() {
  let entries = getLegoEntries();

  return entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export function generateMetadata({ params }) {
  let entry = getLegoEntries().find((entry) => entry.slug === params.slug);
  if (!entry) {
    return;
  }

  let {
    title,
    publishedAt,
    lastModified,
    summary: description,
    imageUrl: image,
  } = entry.metadata;
  let publishedTime = lastModified ? lastModified : publishedAt;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  const ogUrl = new URL(`${baseUrl}/api/og`);
  ogUrl.searchParams.set("title", title);
  ogUrl.searchParams.set("type", "article");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/lego/${entry.slug}`,
      images: [
        {
          url: ogUrl.toString(),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Lego({ params }) {
  let entry = getLegoEntries().find((entry) => entry.slug === params.slug);

  if (!entry) {
    notFound();
  }

  let lastModified = entry.metadata.lastModified
    ? entry.metadata.lastModified
    : entry.metadata.publishedAt;

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: entry.metadata.title,
            datePublished: entry.metadata.publishedAt,
            dateModified: lastModified,
            description: entry.metadata.summary,
            image: entry.metadata.imageUrl
              ? `${baseUrl}${entry.metadata.imageUrl}`
              : `/og?title=${encodeURIComponent(entry.metadata.title)}`,
            url: `${baseUrl}/lego/${entry.slug}`,
            author: {
              "@type": "Person",
              name: "Brad Gibbs",
            },
          }),
        }}
      />
      <div className="max-w-7xl lg:mx-auto">
        <h1 className="font-semibold text-4xl mb-8 ml-8 tracking-tighter">
          Product Model Concepts (LEGO dub)
        </h1>
        <div className="mx-auto lg:flex lg:flex-row lg:space-x-4 max-w-5xl lg:mx-auto">
          <nav className="order-last hidden lg:block shrink-0 lg:w-64 ml-6">
            <div className="sticky lg:ml-6 top-[180px] h-[calc(100vh-180px)]">
              <TableOfContents />
              <hr className="my-4 border-neutral-200 dark:border-neutral-700" />
              {entry.metadata.linkUrl && (
                <div className="text-neutral-400 text-sm">
                  <a
                    href={entry.metadata.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Comment on this page in Notion
                    <ArrowUpRightIcon className="h-4 w-4 mr-1" />
                  </a>
                </div>
              )}
            </div>
          </nav>
          <div className="mx-auto mb-20 max-w-2xl">
            <h1 className="text-4xl text-neutral-900 dark:text-neutral-200">
              {entry.metadata.title}
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-12">
              last modified: {formatDate(lastModified)}
            </p>

            <div className="prose prose-neutral dark:prose-invert prose-base lg:prose-lg">
              <div className="rounded-xl bg-sky-100 dark:bg-sky-900 py-5 px-8">
                <CustomMDX source={entry.excerpt} />
              </div>

              <article className="">
                <CustomMDX
                  source={entry.content}
                  options={{ remarkPlugins: [remarkGfm], rehypePlugins: [] }}
                />
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
