const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function imgSrc(path: string): string {
  return `${basePath}${path}`;
}
