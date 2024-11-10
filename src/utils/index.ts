export function getBaseSiteURL(): string {
  return import.meta.env.PROD
    ? "https://www.chappelo.com/"
    : "http://localhost:4321/";
}
