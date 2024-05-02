import Link from "next/link";
import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { CustomMDX } from "app/components/mdx";
import { getLegoEntries } from "app/lego/utils";

export function LegoEntries() {
  let allLegoEntries = getLegoEntries();

  return (
    <div>
      {allLegoEntries
        .sort((a, b) => {
          if (Number(a.metadata.sortIndex) < Number(b.metadata.sortIndex)) {
            return -1;
          }
          return 1;
        })
        .map((entry) => (
          <div
            key={entry.slug}
            className="p-6 lg:p-10 border-b border-gray-150"
          >
            <div
              className={`grid grid-cols-1 gap-4 ${
                entry.metadata.imageSize === "Large"
                  ? "lg:grid-cols-2"
                  : "lg:grid-cols-3"
              }`}
            >
              <div className="">
                <div className="h-60 w-auto relative mx-6">
                  {entry.metadata.imageUrl && (
                    <Image
                      alt=""
                      src={entry.metadata.imageUrl}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="block dark:hidden"
                    />
                  )}
                  {entry.metadata.darkImageUrl && (
                    <Image
                      alt=""
                      src={entry.metadata.darkImageUrl}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="hidden dark:block"
                    />
                  )}
                </div>
              </div>
              <div
                className={`prose prose-neutral dark:prose-invert prose-h1:font-medium ${
                  entry.metadata.imageSize === "Large" ? "" : "lg:col-span-2"
                }`}
              >
                <h1>{entry.metadata.title}</h1>
                <div className="prose prose-neutral dark:prose-invert prose-base lg:prose-lg tracking-tight prose-h2:text-neutral-900 dark:prose-h2:text-neutral-100 prose-h2:border-none">
                  <CustomMDX source={entry.excerpt} />
                </div>
              </div>
            </div>
            {entry.metadata.linkUrl && (
              <div className="flex justify-end mt-4">
                <Link
                  key={entry.slug}
                  href={`/lego/${entry.slug}`}
                  className="px-3.5 py-2.5 text-sm font-semibold bg-transparent text-rose-500 hover:text-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 "
                >
                  <ArrowRightCircleIcon className="h-8 " />
                </Link>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
