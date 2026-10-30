# Social Media Video Specifications & URL Regex Parser (2026)

Maintained by **[Beast Code Studios](https://saveinx.com/about)** — creators of the **[Saveinx Media Toolkit](https://saveinx.com/)** and the **[Saveinx Android Video Compressor](https://saveinx.com/video-compressor-app)**.

This repository provides two open-source resources for developers, video editors, and content creators:
1. **Zero-Dependency JavaScript/TypeScript URL Regex Patterns** for validating and extracting media IDs from major social platforms (TikTok, Instagram, X/Twitter, Reddit, Pinterest, Facebook, Vimeo, Dailymotion, Snapchat).
2. **2026 Video Encoding & Bitrate Reference Sheet** for optimizing MP4 files across messaging and social platforms (WhatsApp 16MB limit, Discord 25MB limit, HLS/DASH streaming).

---

## 1. Platform URL Validation Regex Patterns (JS / TS)

Use these lightweight regular expressions to detect and normalize public social media video URLs in client-side web applications:

```javascript
export const SOCIAL_URL_PATTERNS = {
  tiktok: /^https?:\/\/(?:www\.|vm\.|vt\.)?tiktok\.com\/(?:@[\w.-]+\/(?:video|photo)\/\d+|[\w-]+\/?)/i,
  instagram: /^https?:\/\/(?:www\.)?instagram\.com\/(?:p|reel|reels|tv|stories)\/([\w-]+)/i,
  twitterX: /^https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/[\w]+\/status\/(\d+)/i,
  reddit: /^https?:\/\/(?:(?:www|old)\.reddit\.com\/r\/[\w]+\/comments\/[\w]+|v\.redd\.it\/[\w]+|redd\.it\/[\w]+)/i,
  pinterest: /^https?:\/\/(?:www\.|[a-z]{2}\.)?(?:pinterest\.(?:com|ca|co\.uk|fr|de|es)|pin\.it)\/([\w/-]+)/i,
  facebook: /^https?:\/\/(?:www\.|m\.|web\.)?(?:facebook\.com\/(?:watch\/?\?v=\d+|[\w.]+\/videos\/\d+|reel\/\d+)|fb\.watch\/[\w-]+)/i,
  vimeo: /^https?:\/\/(?:www\.|player\.)?vimeo\.com\/(?:video\/)?(\d+)/i,
  dailymotion: /^https?:\/\/(?:www\.)?(?:dailymotion\.com\/video\/|dai\.ly\/)([\w]+)/i,
  snapchat: /^https?:\/\/(?:www\.|story\.)?snapchat\.com\/(?:spotlight\/[\w-]+|s\/[\w:-]+)/i
};

export function detectPlatform(url) {
  for (const [platform, regex] of Object.entries(SOCIAL_URL_PATTERNS)) {
    if (regex.test(url.trim())) return platform;
  }
  return null;
}
