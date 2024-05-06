import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { getLegoEntries } from "app/lego/utils";
import H2TableOfContents from "app/components/h2-table-of-contents";

const LegoEntries = () => {
  let allLegoEntries = getLegoEntries();

  return (
    <div className="flex flex-row space-x-4">
      <div className="order-last hidden lg:block shrink-0 lg:min-w-64 ml-6">
        <div className="sticky lg:ml-6 top-[180px] h-[calc(100vh-150px)]">
          <div>
            <H2TableOfContents />
          </div>
        </div>
      </div>
      <div className=" bg-white dark:bg-neutral-800 border border-gray-150 ">
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
              id={entry.slug}
              className="p-6 lg:p-10 border-b border-gray-150 scroll-mt-16"
            >
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
    </div>
  );
};

export default LegoEntries;
