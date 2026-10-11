export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Squadron 42 Wiki",
  shortName: "Squadron 42",
  logoText: "SQ42",
  tagline: "Complete Guides, Ships, Missions & Systems",
  description: "Explore Squadron 42 Wiki with detailed ship guides, mission walkthroughs, weapons, characters, gameplay tips, and the latest updates for players.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://squadron42.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://squadron42.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://robertsspaceindustries.com/squadron42",
  heroVideoId: "Vjju3L3XDoQ", // Squadron 42 - Official Gameplay Reveal | CitizenCon 2954
  social: {
    discord: "https://robertsspaceindustries.com/squadron42",
    youtube: "https://www.youtube.com/@starcitizen",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
