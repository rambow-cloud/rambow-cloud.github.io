export type Language = 'zh' | 'en';

// Content is curated from the public repositories, not fetched at build time.
export const organization = 'https://github.com/rambow-cloud';
export const projects = [
  {
    name: 'powertools-lambda-go',
    displayName: 'Powertools for Go Lambda',
    category: 'SERVERLESS / OBSERVABILITY',
    tags: ['Go', 'AWS Lambda', 'OpenTelemetry'],
    description: {
      zh: '面向 Go Lambda 应用的独立社区工具库。通过模块化的日志、指标与 OpenTelemetry 追踪，让可观测性更自然地融入开发。',
      en: 'An independent community toolkit for Go Lambda applications. Modular logging, metrics, and OpenTelemetry tracing bring observability into your workflow.',
    },
    note: {
      zh: '独立社区项目，非 AWS 官方发行版。',
      en: 'An independent community project, not an official AWS distribution.',
    },
    details: {
      zh: [
        {
          title: '结构化日志',
          text: '为 Go Lambda 函数提供结构化日志与调用上下文管理，让请求信息更容易检索和排查。',
        },
        {
          title: '指标与追踪',
          text: '通过模块化指标工具与 OpenTelemetry 追踪，理解函数运行时的状态和调用关系。',
        },
        {
          title: '从示例开始',
          text: '文档提供首个 Lambda 函数、部署打包及 OpenTelemetry 组合示例，可按需选择模块。',
        },
      ],
      en: [
        {
          title: 'Structured logging',
          text: 'Structured logs and invocation context for Go Lambda functions make request details easier to inspect and troubleshoot.',
        },
        {
          title: 'Metrics and traces',
          text: 'Modular metrics tools and OpenTelemetry tracing help explain runtime behavior and relationships between invocations.',
        },
        {
          title: 'Start with an example',
          text: 'The documentation covers a first Lambda function, deployment packaging, and OpenTelemetry composition. Choose the modules you need.',
        },
      ],
    },
    documentation: {
      zh: 'https://powertools-lambda-go.rambow.cloud/',
      en: 'https://powertools-lambda-go.rambow.cloud/',
    },
  },
  {
    name: 'alicloud-go-sdk-x',
    displayName: 'Alibaba Cloud SDK for Go',
    category: 'CLOUD / SDK',
    tags: ['Go', 'Alibaba Cloud'],
    description: {
      zh: '遵循 Go 惯用风格的独立阿里云 SDK，以 Issue 驱动开发，提供 Go 包文档和中英文指南。项目仍在早期开发阶段。',
      en: 'An independent, idiomatic Go SDK for Alibaba Cloud, developed through issues with Go package documentation and bilingual guides. In early development.',
    },
    note: {
      zh: '非阿里云官方 SDK。',
      en: 'Not an official Alibaba Cloud SDK.',
    },
    details: {
      zh: [
        {
          title: 'Go 风格的云端接口',
          text: '围绕 STS、ECS 与 VPC 等产品构建类型化客户端，提供 Go 包文档与离线示例。',
        },
        {
          title: '凭证与配置',
          text: '通过配置加载器、可续期 STS 凭证和凭证缓存组织云端访问，核心运行时使用 Go 标准库。',
        },
        {
          title: '明确支持边界',
          text: '生成覆盖、离线检查与真实云端验收分别记录。使用前请查看当前产品指南与支持说明。',
        },
      ],
      en: [
        {
          title: 'Idiomatic Go cloud clients',
          text: 'Typed clients for products including STS, ECS, and VPC, with Go package documentation and offline examples.',
        },
        {
          title: 'Credentials and configuration',
          text: 'Configuration loading, renewable STS credentials, and credential caching support cloud access. The core runtime uses the Go standard library.',
        },
        {
          title: 'Explicit support boundaries',
          text: 'Generated coverage, offline checks, and live acceptance are documented separately. Review the current product guides and support notes before use.',
        },
      ],
    },
    documentation: {
      zh: 'https://github.com/rambow-cloud/alicloud-go-sdk-x/blob/main/README.zh-CN.md',
      en: 'https://github.com/rambow-cloud/alicloud-go-sdk-x#readme',
    },
  },
  {
    name: 'drawio-software-icons',
    displayName: 'Software Icons for draw.io',
    category: 'DESIGN / DEVELOPER TOOLS',
    tags: ['SVG', 'draw.io', 'JavaScript'],
    description: {
      zh: '为架构表达准备的中英文软件图标集。分类 SVG、离线图标库与可搜索目录，让想法更容易被看见。',
      en: 'A bilingual software icon collection for clearer architecture diagrams. Explore categorized SVGs, offline libraries, and a searchable catalog.',
    },
    note: {
      zh: '在仓库中浏览图标与使用说明。',
      en: 'Explore icons and usage instructions in the repository.',
    },
    details: {
      zh: [
        {
          title: '软件与云服务图标',
          text: '浏览分类 SVG 图标，覆盖软件工具与阿里云等云服务，为架构图选择合适的视觉元素。',
        },
        {
          title: '在线与离线使用',
          text: '通过中英文目录搜索图标，下载图标库，并按使用指南导入 draw.io 或 diagrams.net。',
        },
        {
          title: '与 AI 绘图工具连接',
          text: '项目提供 Draw.io MCP 配置指南与图标搜索 API，帮助支持该工具的客户端查找架构图素材。',
        },
      ],
      en: [
        {
          title: 'Software and cloud icons',
          text: 'Browse categorized SVGs for software tools and cloud services, including Alibaba Cloud, to choose visual elements for architecture diagrams.',
        },
        {
          title: 'Online and offline libraries',
          text: 'Search the bilingual catalog, download icon libraries, and follow the guides to import them into draw.io or diagrams.net.',
        },
        {
          title: 'Connect AI drawing tools',
          text: 'Draw.io MCP setup guides and an icon search API help compatible clients discover artwork for architecture diagrams.',
        },
      ],
    },
    documentation: {
      zh: 'https://icons.rambow.cloud/',
      en: 'https://icons.rambow.cloud/',
    },
  },
] as const;

export type Project = (typeof projects)[number];

export const content = {
  zh: {
    htmlLang: 'zh-CN',
    title: 'Rambow Cloud（Rambow）官网 — 云原生开源与 Go 开发者工具',
    description:
      'Rambow Cloud（Rambow）开源组织官网。探索 Go Lambda Powertools、阿里云 Go SDK 与 draw.io 软件图标，了解我们在云原生、Serverless 和可观测性领域的项目。',
    skip: '跳转到主要内容',
    nav: ['开源项目', '我们的方向', '关于我们'],
    github: 'GitHub',
    language: 'English',
    languageLabel: 'Switch to English',
    headline: ['从开源出发，', '构建云端。'],
    intro:
      '我们是 Rambow Cloud。用开源工具连接想法与实践，让构建、部署和运行云原生应用更简单。',
    heroBottom: '从一行代码，到云端的更多可能。',
    projectsTitle: '探索我们的项目',
    allProjects: '全部仓库',
    source: '查看源码',
    projectOverview: '项目介绍',
    projectFeatures: '项目提供什么',
    projectDocs: '文档与使用指南',
    projectStart: '开始使用',
    projectStartText:
      '前往项目文档查看安装步骤、示例及当前支持范围；代码、问题反馈与贡献讨论都在 GitHub 仓库。',
    otherProjects: '其他开源项目',
    home: '首页',
    focusLabel: '02 / OUR FOCUS',
    focusTitle: '专注开发，少一点阻力。',
    focusIntro:
      '从运行方式，到系统洞察，再到日常工具，我们关注云端开发的每一步。',
    focus: [
      {
        title: 'Serverless',
        subtitle: '让构建更轻盈',
        description:
          '围绕函数与云原生应用开发工具，把精力留给真正需要构建的功能。',
        icon: 'bolt',
      },
      {
        title: 'Observability',
        subtitle: '让系统更透明',
        description:
          '通过日志、指标和追踪理解应用行为，让每一次运行都有迹可循。',
        icon: 'pulse',
      },
      {
        title: 'Developer tooling',
        subtitle: '让工作更顺手',
        description:
          '从 Go SDK 到软件图标，把日常开发中的重复与繁琐变成顺手的工具。',
        icon: 'code',
      },
    ],
    aboutLabel: '03 / ABOUT RAMBOW CLOUD',
    aboutTitle: ['构建工具，', '也连接可能。'],
    aboutText:
      'Rambow Cloud（简称 Rambow）是一个专注云原生解决方案的开源组织。我们希望帮助团队更轻松地构建、部署和运行可靠的应用。',
    aboutMore:
      '代码、文档与讨论都在 GitHub 公开展开。你可以从一个项目、一条 Issue，或一次文档改进开始参与。',
    principles: ['开放协作', '开发者优先', '保持简单'],
    joinLabel: 'LET’S BUILD TOGETHER',
    joinTitle: '下一个好想法，\n可以从你开始。',
    joinText:
      '发现问题、分享想法、改进文档，或贡献代码。每一种参与，都让开源向前一步。',
    joinButton: '加入开源协作',
    footer: '为开发者构建，与社区一起成长。',
    backTop: '回到顶部',
    independent: '独立开源组织。提及的产品与商标归各自所有者所有。',
  },
  en: {
    htmlLang: 'en',
    title: 'Rambow Cloud (Rambow) — Cloud-native Open Source & Go Tools',
    description:
      'Rambow Cloud (Rambow) builds cloud-native open-source tools. Explore Go Lambda Powertools, an Alibaba Cloud Go SDK, and software icons for draw.io.',
    skip: 'Skip to main content',
    nav: ['Projects', 'Our focus', 'About us'],
    github: 'GitHub',
    language: '简体中文',
    languageLabel: '切换到简体中文',
    headline: ['Open source.', 'Built for the cloud.'],
    intro:
      'We’re Rambow Cloud. We build open-source tools that make it simpler to build, deploy, and operate cloud-native applications.',
    heroBottom: 'From a line of code to new possibilities in the cloud.',
    projectsTitle: 'Explore our projects',
    allProjects: 'All repositories',
    source: 'View source',
    projectOverview: 'Project overview',
    projectFeatures: 'What the project offers',
    projectDocs: 'Docs and usage guides',
    projectStart: 'Get started',
    projectStartText:
      'Visit the project documentation for installation, examples, and current support. Code, issues, and contribution discussions live in the GitHub repository.',
    otherProjects: 'More open-source projects',
    home: 'Home',
    focusLabel: '02 / OUR FOCUS',
    focusTitle: 'More focus. Less friction.',
    focusIntro:
      'From how applications run to how we understand them, we care about every step of cloud development.',
    focus: [
      {
        title: 'Serverless',
        subtitle: 'Build with a lighter footprint',
        description:
          'Tools for functions and cloud-native applications, leaving more room to focus on the features you want to build.',
        icon: 'bolt',
      },
      {
        title: 'Observability',
        subtitle: 'Understand what’s happening',
        description:
          'Logs, metrics, and traces that make application behavior easier to understand, one invocation at a time.',
        icon: 'pulse',
      },
      {
        title: 'Developer tooling',
        subtitle: 'Make everyday work flow',
        description:
          'From Go SDKs to software icons, turn the repetitive parts of development into tools that feel natural.',
        icon: 'code',
      },
    ],
    aboutLabel: '03 / ABOUT RAMBOW CLOUD',
    aboutTitle: ['Building tools.', 'Opening possibilities.'],
    aboutText:
      'Rambow Cloud, also known as Rambow, is an open-source organization focused on cloud-native solutions. We help teams build, deploy, and operate reliable applications more easily.',
    aboutMore:
      'Our code, documentation, and conversations happen on GitHub. Start with a project, an issue, or an improvement to the docs.',
    principles: ['Open collaboration', 'Developer first', 'Keep it simple'],
    joinLabel: 'LET’S BUILD TOGETHER',
    joinTitle: 'The next good idea\ncould start with you.',
    joinText:
      'Report a bug, share an idea, improve the docs, or contribute code. Every contribution moves open source forward.',
    joinButton: 'Build with us',
    footer: 'Built for developers. Growing with the community.',
    backTop: 'Back to top',
    independent:
      'An independent open-source organization. Product names and trademarks belong to their respective owners.',
  },
} as const;
