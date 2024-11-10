"use client";
import Image from "next/image";
import { useState } from "react";
import { generateOgpImage } from "./actions";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isPending, setIspendig] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIspendig(true);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const data = {
      title,
      description,
    };
    const imageUrl = await generateOgpImage(data);
    if (imageUrl) {
      setImageUrl(imageUrl);
    }
    setIspendig(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        動的なOGP画像の生成
      </h1>
      <section className="bg-gray-100 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          任意のOGP画像を生成します
        </h2>
        <article>
          <form action={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="タイトル"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="description"
              placeholder="説明文"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
              disabled={isPending}
            >
              {isPending ? "生成中・・・" : "生成"}
            </button>
          </form>
          {imageUrl && (
            <>
              <div className="mt-4 w-full">
                <Image
                  src={imageUrl}
                  alt="OGP画像"
                  width={1200}
                  height={630}
                  layout="responsive"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <p>画像URL: {imageUrl}</p>
              </div>
            </>
          )}
        </article>
      </section>
    </div>
  );
}
