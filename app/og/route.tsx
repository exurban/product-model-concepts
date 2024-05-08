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

  return new ImageResponse(
    (
      <div tw="flex flex-row w-full h-full bg-white ">
        <h1 tw="h-24 text-5xl border-b-2 border-rose-500 text-center my-auto">
          product model concepts (lego dub)
        </h1>
        <div tw="flex flex-col items-start justify-center">
          <h2 tw="text-4xl font-medium">{title}</h2>
          <p tw="text-4xl font-normal text-neutral-800">{description}</p>
        </div>
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
