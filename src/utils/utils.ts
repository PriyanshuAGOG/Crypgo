export const getImagePrefix = (): string => {
  const isProd = process.env.NODE_ENV === "production";
  return isProd ? "/Crypgo" : "";
};