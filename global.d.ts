// Fix Next 15 type inference bug (params as Promise)
declare module "next" {
  interface PageProps {
    params?: Record<string, string | string[]>;
    searchParams?: Record<string, string | string[]>;
  }
}
