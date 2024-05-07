import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Product Model Concepts";

    console.log(searchParams.keys());

    return new ImageResponse(
      (
        <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
          <div tw="bg-gray-50 flex w-full">
            <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
              <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
                <span></span>
                <span tw="text-rose-600">{title}</span>
              </h2>
              <div tw="mt-8 flex md:mt-0">
                <div tw="flex rounded-md shadow">
                  <a tw="flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-5 py-3 text-base font-medium text-white">
                    Read
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  } catch (e: any) {
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
