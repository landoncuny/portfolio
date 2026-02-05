import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Landon Cuny";
  const subtitle =
    searchParams.get("subtitle") || "Marketing Student & Content Creator";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#171717",
              lineHeight: 1.1,
              marginBottom: "20px",
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#525252",
              maxWidth: "800px",
            }}
          >
            {subtitle}
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#171717",
              }}
            >
              25K+
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#737373",
              }}
            >
              Followers
            </span>
          </div>
          <div
            style={{
              width: "2px",
              height: "60px",
              backgroundColor: "#e5e5e5",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#171717",
              }}
            >
              130M+
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#737373",
              }}
            >
              Views
            </span>
          </div>
          <div
            style={{
              width: "2px",
              height: "60px",
              backgroundColor: "#e5e5e5",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#171717",
              }}
            >
              SDSU
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#737373",
              }}
            >
              Marketing
            </span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "80px",
            width: "120px",
            height: "120px",
            backgroundColor: "#f5f5f5",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#d4d4d4",
            }}
          >
            LC
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
