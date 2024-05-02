import { LegoEntries } from "app/components/lego-entries";

export const metadata = {
  title: "LEGO dub",
  description:
    "How the components of the Product Model fit together to make impactful products.",
  images: [
    {
      url: "https://res.cloudinary.com/bjg-photo/image/upload/v1712864044/3-initial-pmf_gbnsfi.png",
    },
  ],
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl text-rose-500 mb-8 tracking-tighter">
        Product Model Concepts (LEGO dub)
      </h1>
      <div className="m-4 lg:m-10 bg-white dark:bg-neutral-800 border border-gray-150">
        <LegoEntries />
      </div>
    </section>
  );
}
