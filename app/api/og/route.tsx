import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const { title, description } = await request.json();

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff5d6",
            fontFamily: "sans-serif",
            border: "32px #f3971a solid",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#4b5563",
              textAlign: "center",
              maxWidth: "80%",
            }}
          >
            {description}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response(`動的なOGP画像の生成ができませんでした: ${error}`, {
      status: 500,
    });
  }
}
