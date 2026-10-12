interface NavigationItem {
  /** i18n 翻译键（en.json 的 nav 命名空间） */
  key: string;
  /** URL slug */
  path: `/${string}`;
  /** 是否为内容分类（决定是否有列表页与 overview 文案） */
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "lore", path: "/lore", isContentType: true },
  { key: "ships", path: "/ships", isContentType: true },
  { key: "info", path: "/info", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
