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
          <>
            <div tw="flex flex-row w-full h-2/3 items-center justify-between bg-yellow-100">
              <div tw="flex flex-col w-1/2 h-full items-left justify-center text-pretty mx-6 bg-green-500">
                <h3 tw="text-5xl font-bold">{title}</h3>
                <p tw="text-4xl font-normal">{description}</p>
              </div>
              <div tw="flex w-1/3 h-full items-center mx-6 bg-yellow-500">
                <img
                  style={{ objectFit: "contain" }}
                  tw="absolute right-0"
                  src={image}
                />
              </div>
            </div>
            <div tw="flex rounded-md shadow justify-end pr-6 pb-6 bg-blue-500">
              <a tw="flex items-center justify-center rounded-md border border-transparent bg-rose-500 px-5 py-3 text-base font-medium text-white">
                Read
              </a>
            </div>
          </>
        ) : (
          <>
            <div tw="flex flex-col items-center h-1/4">
              <img
                style={{ objectFit: "contain" }}
                tw="absolute w-4/5 py-2"
                src={image}
              />
            </div>
            <div tw="flex flex-col w-full px-10">
              <h2 tw="text-5xl font-bold">{title}</h2>
              <p tw="text-4xl font-normal text-neutral-800 text-pretty">
                {description}
              </p>
            </div>
            <div tw="flex rounded-md shadow self-end p-10">
              <a tw="flex items-center justify-center rounded-md border border-transparent bg-rose-500 px-5 py-3 text-base font-medium text-white">
                Read
              </a>
            </div>
          </>
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
