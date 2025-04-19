type ConfigType = {
  appUrl: string;
  nextAuthSecret?: string;
};

export const getBaseUrl = () => {
  let baseUrl = undefined;
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    baseUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  } else if (process.env.NEXT_PUBLIC_APP_URL) {
    baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  }
  if (!baseUrl) throw new Error('No base URL found');
  return baseUrl;
};

const ENV: ConfigType = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
};

// biome-ignore lint/correctness/noUnusedVariables: no build-time required env vars, yet
function required(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Missing required environment variable ${name}`);
  }
  return value;
}

export default ENV;
