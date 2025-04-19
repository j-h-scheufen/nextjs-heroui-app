import ENV from './environment';

export const siteConfig = {
  name: 'My App',
  description: 'This is my awesome community app.',
  url: ENV.appUrl,
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/j-h-scheufen/nextjs-heroui-app',
  },
};
