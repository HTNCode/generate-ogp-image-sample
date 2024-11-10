import { getUrl } from "@/app/utils/getUrl";

export async function generateOgpImage(data: {
  title: string;
  description: string;
}): Promise<string | null> {
  try {
    const baseUrl = getUrl();
    const res = await fetch(`${baseUrl}/api/og`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("OGP画像の生成に失敗しました。");
    }

    const blob = await res.blob();
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  } catch (error) {
    console.log(error);
    return null;
  }
}
