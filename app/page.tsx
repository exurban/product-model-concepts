import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Product Model Concepts
      </h1>
      <div className="m-4 lg:m-10 bg-white dark:bg-neutral-800 rounded-xl border border-gray-150">
        <div className="text-4xl text-center font-bold my-4">
          <h2>Value Exchange</h2>
        </div>
        <div className="h-80 w-auto relative m-6 ">
          <Image
            alt=""
            src="https://res.cloudinary.com/bjg-photo/image/upload/v1712947361/value-exch-wide_kyhhmd.png"
            fill
            style={{ objectFit: "contain" }}
            className="block dark:hidden"
            priority={true}
          />
          <Image
            alt=""
            src="https://res.cloudinary.com/bjg-photo/image/upload/v1713553271/Value_Exchange_Dark_cjokh6.png"
            fill
            style={{ objectFit: "contain" }}
            className="hidden dark:block"
            priority={true}
          />
        </div>
        <div className="m-6 lg:m-10 ">
          <div className="text-neutral-900 dark:text-neutral-100 font-bold text-3xl">
            Value exchange is the foundation of the product model.
          </div>
          <div className="p-4 lg:p-6 my-4 lg:my-6 bg-orange-400 rounded-xl pointer-events-none">
            <div className="text-2xl font-bold">Customer Value</div>
            <div className="mt-3">
              Customers have needs, pain points, and desires (together,
              &ldquo;opportunities&rdquo;). They are willing to pay for access
              to products that alleviate their pain points or satisfy their
              needs and desires; opportunity solutions that make their lives or
              work easier, more efficient, or more pleasurable.
            </div>
          </div>
          <div className="p-4 lg:p-6 my-4 lg:my-6 bg-cyan-300/80 rounded-xl">
            <div className="text-2xl font-bold">Business Value</div>
            <div className="mt-3">
              For-profit businesses exist to sustain themselves and grow. To do
              so, they produce products that solve customer opportunities and
              offer access to the benefits of these opportunity solutions in
              exchange for value.
            </div>
            <div className="mt-5">
              The company uses the value captured from customers to sustain
              itself.
            </div>
            <div className="mt-5">
              To grow, the company must develop its products to efficiently
              provide more value for customers. This is done in some combination
              of the following ways:
              <ol className="list-inside list-decimal ml-12 -indent-6">
                <li>
                  By increasing value offered to existing customers by (a)
                  solving more of their opportunities or (b) improving existing
                  opportunity solutions (&ldquo;Deepening PMF&rdquo;).
                </li>
                <li>
                  By expanding the surface area of the value proposition by
                  solving opportunities for customers with related problems in
                  adjacent markets (&ldquo;Broadening PMF&rdquo;).
                </li>
              </ol>
            </div>
            <div className="mt-3">
              Ideally, each version of the product released to customers Deepens
              and/or Broadens PMF.
            </div>
          </div>
          <div className="p-4 lg:p-6 my-4 lg:my-6 bg-emerald-400/75 rounded-xl">
            <div className="text-2xl font-bold">The Product Model</div>
            <div className="mt-5">
              The product team&apos;s role is to develop their product to
              maximize the value the business can capture while minimizing the
              costs required to deliver the product.
            </div>
            <div className="mt-5">
              To consistently and efficiently deliver value to customers,
              product teams must work to understand their customers&apos;
              opportunities and then build and deliver products to solve those
              opportunities in ways that are valuable to customers and
              profitable to the business. The product model is a framework of
              concepts that has been proven to reliably produce value
              propositions with high product-market fit.
            </div>
            <div className="mt-5">
              Below is an overview of the product model concepts and how they
              fit together to build impactful products.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
