# Rambow Cloud

Rambow Cloud 组织官网，使用 **Astro 7**、TypeScript 和原生 CSS 构建。静态输出，支持 GitHub Pages，无需后端或 GitHub API Token。

官网主域名：[rambow.cloud](https://rambow.cloud/)；GitHub Pages 入口：[rambow-cloud.github.io](https://rambow-cloud.github.io/)。源代码仓库：[rambow-cloud/rambow-cloud.github.io](https://github.com/rambow-cloud/rambow-cloud.github.io)。

官网内容依据 [组织介绍](https://github.com/rambow-cloud)及以下公开项目整理：

- [powertools-lambda-go](https://github.com/rambow-cloud/powertools-lambda-go)
- [alicloud-go-sdk-x](https://github.com/rambow-cloud/alicloud-go-sdk-x)
- [drawio-software-icons](https://github.com/rambow-cloud/drawio-software-icons)

## 本地开发

需要 Node.js **22.12+**（Actions 使用 Node.js 24）及 npm。

```sh
npm ci
npm run dev
```

浏览器打开终端显示的地址（默认 `http://localhost:4321/`）。

| 命令                   | 用途                            |
| ---------------------- | ------------------------------- |
| `npm run dev`          | 启动开发服务器                  |
| `npm run check`        | Astro 模板及 TypeScript 检查    |
| `npm run build`        | 生成 `dist/` 静态网站及 sitemap |
| `npm run preview`      | 预览已构建的网站                |
| `npm run format`       | 使用 Prettier 格式化文件        |
| `npm run format:check` | 检查格式，供 CI 使用            |

## 中英文与浏览器语言

- `/` 自动选择语言，优先使用已保存的手动选择，否则按 `navigator.languages` 顺序选择首个中文或英文；其他语言回退英文。
- `zh-CN`、`zh-TW`、`zh-HK` 等中文偏好统一显示简体中文，英文地区变体统一进入英文页面。
- `/zh/` 与 `/en/` 是固定语言页面，直接访问不会被浏览器语言改写。
- 导航栏及页脚的语言链接会保存选择到 `localStorage`。浏览器禁用存储时，切换链接仍然可用。
- 禁用 JavaScript 时，根路径显示中文，仍可通过链接访问两种语言。

在 `src/data/site.ts` 维护对应文案与项目介绍；布局和组件共用，避免两种语言出现结构差异。

博客独立位于 `https://blog.rambow.cloud/`，通过首页桌面及移动导航的「博客 / Blog」入口访问。博客使用独立私有仓库与 Cloudflare 静态托管，在博客根入口选择语言；本仓库不保存文章或草稿。

## 项目结构

```text
src/
  components/     页面区块、品牌与图标
  data/site.ts    中英文内容与项目资料
  layouts/       HTML 文档、SEO 与入口语言匹配
  pages/         首页、zh/、en/ 与 robots.txt
  styles/        响应式全局样式
public/          原样输出的静态资源
.github/         CI、Pages 部署、Dependabot 与 PR 模板
```

页面字体通过 Google Fonts 加载，无法连接时使用系统字体。项目介绍来自本地数据，构建不依赖 GitHub API。

## 品牌素材与配色

品牌图使用提供的 `D:/Downloads/aws-lambda-go-powertools/branding/rambow-cloud-avatar.png`，原样复制到 `public/branding/`。页头、页脚、Apple touch icon 与分享元数据共用这张图片。浏览器图标使用由原图转换的 `public/favicon.ico`，包含 16、32、48、256 像素尺寸，保留原始比例、配色及透明背景；所有页面均引用 `/favicon.ico`（部署到仓库路径时自动加前缀）。

项目卡片展示分类、名称、简介与代码预览，不展示 Logo。此前收集的项目图标素材保存在 `public/projects/`，来源与署名见该目录的 `README.md`。

页面参考 [Astro 官网](https://astro.build/)的渐变光晕与空间层次，使用品牌深蓝、青蓝和冷白色。首屏采用更明亮的蓝色天空与浅色半透明项目卡片，直接展示三个开源项目；背景以 CSS 星点、行星光环、透视网格和缓慢流动的光晕区分远近。栏目采用紧凑间距，悬停卡片显示光效。系统开启减少动态效果时停用动画与卡片倾斜。配色变量位于 `src/styles/global.css`。

## GitHub Actions 与部署

将仓库推送到 GitHub 后，在 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**，然后推送 `main` 或在 Actions 页面手动运行 **Website CI and Pages**。

PR 执行格式检查、Astro 检查与构建；`main` 执行相同检查，成功后上传并部署 GitHub Pages。PR 不发布网站。部署任务通过 GitHub OIDC 授权，无需添加部署密钥。

工作流使用创建时核实的稳定版本：`checkout@v7.0.1`、`setup-node@v7.1.0`、`configure-pages@v6.0.0`、`upload-pages-artifact@v5.0.0`、`deploy-pages@v5.0.1`。Dependabot 每周检查 npm 与 Actions 更新。

Actions 优先读取仓库变量 `SITE_URL` 与 `BASE_PATH`，未设置时从 Pages 配置读取域名与仓库路径，自动适配组织首页仓库、普通项目仓库及已配置的自定义域名。其他静态平台可通过同名构建环境变量指定实际地址，参考 `.env.example`；未设置时本地使用主域名 `https://rambow.cloud` 与根路径 `/` 生成 SEO 地址。

### 生产域名配置

组织首页仓库为 `rambow-cloud/rambow-cloud.github.io`，Pages 使用 Actions 发布，自定义域名为 `rambow.cloud`。生产构建变量为 `SITE_URL=https://rambow.cloud`、`BASE_PATH=/`。`public/CNAME` 记录域名意图；Actions 发布仍以 Pages 设置中的自定义域名为准。

Cloudflare 托管 `rambow.cloud` 的 DNS。根域名的四条 A 记录指向 `185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`；四条 AAAA 记录指向 `2606:50c0:8000::153` 至 `2606:50c0:8003::153`。记录使用 DNS only，由 GitHub Pages 提供 HTTPS。保留现有子项目记录和站点验证 TXT。IP 地址依据 [GitHub Pages 域名文档](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)，后续变更前应核对该文档。

GitHub Pages 默认入口和自定义域名共用这次部署。访问默认入口时，Pages 可能跳转到配置的自定义域名；SEO 地址始终使用 `rambow.cloud`。域名与证书状态在 Pages 设置及 GitHub API 查看，不以本地 DNS 查询作为验收。

## SEO 与双域名

标题、描述及可见的组织介绍使用 `Rambow Cloud` 与简称 `Rambow`，保持品牌名称一致。HTML 静态输出完整内容，不依赖客户端加载项目资料。每页包含 canonical、中英文互相对应的 `hreflang`、社交分享元数据，以及 `Organization`、`WebSite`、`WebPage` JSON-LD；结构化数据关联官方 GitHub 组织。根入口是 `x-default`，保留浏览器语言选择；固定语言页面始终可直接抓取。

`sitemap-index.xml` 引用 `sitemap-0.xml`，后者只把两种语言首页及六个项目介绍页列为 `<loc>` 收录目标，并包含语言对应关系。根入口 `/` 用于自动选择语言，不作为独立收录目标提交，仍保留在首页语言组的 `x-default` 链接中。`robots.txt` 允许抓取并引用同一主域名的 sitemap。canonical、sitemap、结构化数据与分享地址全部由 `SITE_URL` 和 `BASE_PATH` 一起生成，不随访问者使用的域名改变。品牌别名参考 [Google 网站名称指南](https://developers.google.com/search/docs/appearance/site-names)，双域名统一地址参考 [Google canonical 指南](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)。

### Search Console 收录提示

按受影响的具体 URL 判断，不以“所有排除项归零”为目标：

- **Page with redirect（网页会自动重定向）**：根入口 `/` 会通过 JavaScript 进入固定语言页；HTTP、备用域名或无尾斜杠地址也可能在托管层重定向。这些入口被排除可以符合预期，应检查最终的主域名正文 URL 是否收录。代码只在根入口自动选择语言，`/zh/`、`/en/` 与项目介绍页不应触发该跳转。
- **Alternate page with proper canonical tag（备用网页，有适当的规范标记）**：备用域名或带查询参数的重复地址指向主域名对应正文页时，被排除可以符合预期。该状态不等于 `hreflang` 的语言对应关系；中文与英文正文页分别使用自己的 canonical，不应通过 canonical 合并为同一个语言版本。
- 如果受影响的是 `https://rambow.cloud/zh/`、`https://rambow.cloud/en/` 或主域名项目介绍页，在 URL 检查中对照“用户声明的规范网址”“Google 选择的规范网址”和上次抓取时间。正文页的 canonical 应是相同语言、相同项目、带尾斜杠的主域名地址；如指向 GitHub 域名，检查构建变量 `SITE_URL` 并重新部署。

部署后，在浏览器打开 `https://rambow.cloud/sitemap-0.xml`，确认只有八个正文 `<loc>`，根入口只出现在 `x-default` 链接中；查看 `/zh/`、`/en/` 的页面源代码，确认 canonical 分别指向自身。然后在主域名 Search Console 属性中提交 `https://rambow.cloud/sitemap-index.xml`，对需要收录的正文页执行实时测试并请求编入索引。预期的跳转或重复 URL 无需申请消除排除状态；报告更新需要 Google 重新抓取，也不保证请求后立即收录。状态含义见 [Google 网页索引报告说明](https://support.google.com/webmasters/answer/7440203?hl=zh-Hans)。

### 子项目介绍与 sitelinks

首页项目名称与「文档与使用指南」直接打开项目站点：首页中英文版本均将 Powertools 指向 `https://powertools-lambda-go.rambow.cloud/`，图标集指向 `https://icons.rambow.cloud/`；阿里云 Go SDK 暂无独立站点，使用 GitHub 中英文文档。源码链接指向 GitHub。站内 `/zh/projects/<项目名>/` 与 `/en/projects/<项目名>/` 介绍页继续用于项目介绍与搜索收录，相关项目链接同样直接打开项目站点。项目介绍与文档地址统一维护在 `src/data/site.ts`。

这些独立页面、简洁标题及内部链接为项目 sitelinks 提供候选入口。搜索结果中的 sitelinks 由 Google 自动生成，无法通过标签或结构化数据强制指定；实现参考 [Google sitelinks 指南](https://developers.google.com/search/docs/appearance/sitelinks)。上线后也可通过 Search Console 请求索引这些页面。

| 阶段             | 主站地址                          | 配置                                                                            |
| ---------------- | --------------------------------- | ------------------------------------------------------------------------------- |
| 自定义域名上线前 | `https://rambow-cloud.github.io/` | 使用组织首页仓库 `rambow-cloud.github.io`，让 Actions 从 Pages 读取地址         |
| 自定义域名上线后 | `https://rambow.cloud/`           | Pages 配置自定义域名；仓库变量设 `SITE_URL=https://rambow.cloud`、`BASE_PATH=/` |

当前本地目录名不决定线上地址。普通项目仓库会得到 `https://rambow-cloud.github.io/<仓库名>/`，不能通过设置 `BASE_PATH=/` 把它变成组织首页。

两个域名展示相同网站时，以 `rambow.cloud` 为唯一主站；备用域名最好在托管层使用保留路径的永久重定向。如果两个域名都独立提供页面，应部署使用相同主域名配置生成的产物，让 GitHub 域名的 canonical 指向 `rambow.cloud` 的对应语言页面。不要在主域名尚未上线时提前切换 canonical，也不要禁止搜索引擎抓取备用域名，否则它无法读取 canonical。GitHub Pages 自定义域名的配置方式见 [官方文档](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)。

上线后执行以下步骤：

1. 在 [Google Search Console](https://search.google.com/search-console) 添加两个站点属性。GitHub 域名可用 URL 前缀属性和 HTML 标签验证；将标签的 `content` 值保存到仓库变量 `GOOGLE_SITE_VERIFICATION` 后重新部署。需要 Bing 时同样设置 `BING_SITE_VERIFICATION`（只填验证值，不填整个标签）。
2. 在主站属性提交 `https://<主域名>/sitemap-index.xml`，使用 URL 检查工具请求索引 `/zh/`、`/en/` 及项目介绍页。普通项目站点需加上仓库路径。切换域名后更新提交地址。
3. 在 GitHub 组织简介及项目 README 中将官网链接指向主域名，帮助搜索引擎发现网站并关联品牌。

这些配置帮助搜索引擎理解与发现网站；是否收录及 `rambow cloud`、`rambow` 的具体排名由搜索引擎决定，不能保证即时搜索可见。

## 浏览器验收

启动 `npm run dev`，打开 `http://localhost:4321/`：

1. 清除站点存储中的 `rambow-language`，将浏览器首选语言设为中文或英文，确认首页分别进入 `/zh/` 或 `/en/`。
2. 手动切换语言，再访问 `/`，确认使用保存的选择。
3. 直接访问 `/zh/` 与 `/en/`，确认语言保持固定；在约 375px 与 1440px 宽度检查布局、栏目链接及 GitHub 链接。
4. 部署后打开 Actions 的 `github-pages` 环境给出的实际 URL，确认两种语言与静态资源均能访问。
5. 在浏览器查看 `/`、`/zh/`、`/en/` 的页面源代码，确认 canonical 与 `application/ld+json` 使用当前主域名；打开 `/robots.txt` 与 `/sitemap-index.xml` 检查主域名与部署路径。自定义域名上线后，检查两个域名的入口与语言链接。
6. 点击首页三个项目名称或「项目介绍」，确认打开对应介绍页；切换语言应保留项目，文档、源码、相关项目及首页链接应跳转到对应位置。首页项目标题旁不再显示数量。

本地构建检查不等于浏览器验收或远端 Actions 已通过。贡献约定见 [AGENTS.md](AGENTS.md)。
