import LegoEntries from "app/components/lego-entries";

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
    <section className="max-w-7xl lg:mx-auto">
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
        Product Model Concepts (LEGO dub)
      </h1>
      <LegoEntries />
    </section>
  );
}
