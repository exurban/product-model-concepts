import Link from "next/link";
import Image from "next/image";
import { CustomMDX, slugify } from "app/components/mdx";

const SummaryImageExtraLarge = ({ entry }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="relative h-60">
        {entry.metadata.imageUrl && (
          <Image
            alt=""
            src={entry.metadata.imageUrl}
            style={{ objectFit: "contain" }}
            fill
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="block dark:hidden z-10"
          />
        )}
        {entry.metadata.darkImageUrl && (
          <Image
            alt=""
            src={entry.metadata.darkImageUrl}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="hidden dark:block z-10"
          />
        )}
      </div>
      <div className="prose prose-neutral dark:prose-invert prose-h1:font-medium max-w-none">
        <h2 id={`${slugify(entry.metadata.title)}`}>
          <Link href={`#${entry.slug}`} className="no-underline">
            {entry.metadata.title}
          </Link>
        </h2>
        <div className="prose prose-neutral dark:prose-invert prose-base lg:prose-lg tracking-tight prose-h3:text-neutral-900 dark:prose-h3:text-neutral-100 prose-h3:border-none max-w-none">
          <CustomMDX source={entry.excerpt} />
        </div>
      </div>
    </div>
  );
};

export default SummaryImageExtraLarge;
