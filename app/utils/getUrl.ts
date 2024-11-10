// デフォルトのurlを判定する関数（参考：https://supabase.com/docs/guides/auth/redirect-urls#vercel-preview-urls）
export const getUrl = () => {
  let url =
    process?.env?.NEXT_PUBLIC_BASE_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ??
    "http://localhost:3000";
  url = url.startsWith("http") ? url : `https://${url}`;
  url = url.endsWith("/") ? url : `${url}`;
  return url;
};
