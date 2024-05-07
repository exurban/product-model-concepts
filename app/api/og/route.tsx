import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Product Model Concepts";

    const hasDescription = searchParams.has("description");
    const description = hasDescription
      ? searchParams.get("description")?.replace(`"`, "").trim()
      : "Product Model Concepts";

    const image =
      searchParams.get("image") ||
      "https://res.cloudinary.com/bjg-photo/image/upload/v1713406974/Discovery_gkjgum.png";

    return new ImageResponse(
      (
        <div tw="h-full w-full flex items-start justify-start bg-white">
          <div tw="flex items-start justify-start h-full">
            <img
              style={{ objectFit: "contain" }}
              tw="absolute inset-0 w-full h-full"
              src={image}
            />
            <div tw="bg-black absolute inset-x-0 inset-y-20 bg-opacity-60"></div>
            <div tw="flex flex-col items-start justify-center w-full h-full relative">
              <div tw="text-[70px] text-rose-500 font-black mx-20">
                Product Model Concepts
              </div>
              <div tw="text-[50px] text-white font-black text-left mx-20">
                {title}
              </div>
              <div tw="text-[40px] text-white font-black text-left mb-10 mx-20">
                {description}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 627,
      }
    );
  } catch (e: any) {
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
