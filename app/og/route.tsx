import { ImageResponse } from "next/og";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Product Model Concepts";
  let description =
    url.searchParams.get("description") ||
    "How Product Model concepts fit and work together to build impactful products.";
  let image =
    url.searchParams.get("image") ||
    "https://res.cloudinary.com/bjg-photo/image/upload/v1712864044/3-initial-pmf_gbnsfi.png";

  let imageSize = url.searchParams.get("size") || "MD";

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full bg-white">
        <h1 tw="flex flex-row h-20 text-4xl font-normal border-b-2 border-rose-500 tracking-tight items-center justify-center">
          product model concepts (lego dub)
        </h1>
        {imageSize === "MD" ? (
          <div tw="flex flex-row h-3/4">
            <div tw="flex flex-col justify-center h-full w-2/3 justify-end">
              <h2 tw="text-5xl font-medium mx-4">{title}</h2>
              <p tw="text-5xl font-normal text-neutral-800 text-pretty mx-4">
                {description}
              </p>
            </div>
            <img
              style={{ objectFit: "contain" }}
              tw="absolute right-0 w-1/3 h-full"
              src={image}
            />
          </div>
        ) : (
          <div tw="flex flex-col h-3/4 justify-end">
            <img
              style={{ objectFit: "contain" }}
              tw="absolute top-10 w-full h-1/3"
              src="https://res.cloudinary.com/bjg-photo/image/upload/v1712864043/strategy_fnyiwc.png"
            />
            <div tw="flex flex-col justify-end h-2/3 w-full">
              <h2 tw="text-5xl font-medium mx-4">Product-Market Fit</h2>
              <p tw="text-4xl font-normal text-neutral-800 text-pretty mx-4">
                The alignment between a product's value proposition and the
                opportunities of its target market.
              </p>
            </div>
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
//   return new ImageResponse(
//     (
//       <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
//         <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
//           <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
//             {title}
//           </h2>
//         </div>
//       </div>
//     ),
//     {
//       width: 1200,
//       height: 630,
//     }
//   )
// }
