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
      ? searchParams.get("description")
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
            <div tw="bg-black absolute inset-x-0 inset-y-20 bg-opacity-40"></div>
            <div tw="flex flex-col items-center justify-center w-full h-full relative">
              <div tw="text-[80px] text-white font-black text-center mx-20">
                {title}
              </div>
              <div tw="text-[50px] text-white font-black text-center mx-20">
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
