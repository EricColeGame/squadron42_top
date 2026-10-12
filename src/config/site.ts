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
  supportEmail: "support@squadron42.top",
  gameUrl: "https://robertsspaceindustries.com/squadron42",
  heroVideoId: "1H-0x4xk2Xk", // Squadron 42 CitizenCon 2954 Live Gameplay Reveal (official Star Citizen channel)
  social: {
    discord: "https://robertsspaceindustries.com/spectrum/community/SC",
    youtube: "https://www.youtube.com/@starcitizen",
  },
  locales: ["en", "de", "fr", "es"],
  defaultLocale: "en",
};
