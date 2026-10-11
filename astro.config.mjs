import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://rambow-cloud.github.io';
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');
const home = new URL(`${base}/`, site).href;
const languageLinks = [
  { lang: 'zh-CN', url: new URL(`${base}/zh/`, site).href },
  { lang: 'en', url: new URL(`${base}/en/`, site).href },
  { lang: 'x-default', url: home },
];
const homepages = new Set(languageLinks.map(({ url }) => url));
const rootPath = new URL(home).pathname;
const projectPath = (url) =>
  new URL(url).pathname
    .slice(rootPath.length)
    .match(/^(?:zh|en)\/projects\/([^/]+)\/$/);

export default defineConfig({
  site,
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (url) => homepages.has(url) || Boolean(projectPath(url)),
      serialize: (item) => {
        const project = projectPath(item.url)?.[1];
        if (!project) return { ...item, links: languageLinks };
        const en = new URL(`${base}/en/projects/${project}/`, site).href;
        return {
          ...item,
          links: [
            {
              lang: 'zh-CN',
              url: new URL(`${base}/zh/projects/${project}/`, site).href,
            },
            { lang: 'en', url: en },
            { lang: 'x-default', url: en },
          ],
        };
      },
    }),
  ],
});
