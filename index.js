/**
 * Social Media Video URL Regex Parser & Bitrate Calculator
 * Maintained by Beast Code Studios ( file" screen, let's save the actual JS code file!
1. In the box at the top that says **`Name your file...https://saveinx.com)
 * License: MIT
 */

export const SOCIAL_URL_PATTERNS = {`**, type:
   **`index.js`**
2. In the big black box below (`Enter file contents here`),
  tiktok: /^https?:\/\/(?:www\.|vm\.|vt\.)?tiktok\.com\/(?:@[\w.-]+\/(?:video|photo)\/\d+|[\w-]+\/?)/i,
   paste this clean JavaScript code:
```javascript
/**
 * Social Media Video URL Regex Parser & Bitrate Calculatorinstagram: /^https?:\/\/(?:www\.)?instagram\.com\/(?:p|reel|reels|tv|stories)\/([\w-]+)/i,
  twitterX: /^https?:\/\/(?:www\.)?(?:twitter\.com|x\.com
 * Maintained by Beast Code Studios (https://saveinx.com/)
 */

export const SOCIAL_URL_PATTERNS = {
  tiktok: /^https?:\/\/(?:www\.|vm\.|vt\.)?tiktok\.com\/(?:@[\w)\/[\w]+\/status\/(\d+)/i,
  reddit: /^https?:\/\/(?:(?:www|old)\.reddit\.com\/r\/[\w]+\/comments\/[\w]+|v\.redd\.it\/[\w]+|redd\.it\/[\w]+)/i,
  pinterest: /^https?:\/\/(?:www.-]+\/(?:video|photo)\/\d+|[\w-]+\/?)/i,
  instagram: /^https?:\/\/(?:www\.)?instagram\.com\/(?:p|reel|reels|tv|stories)\/([\w-]+)/i,
\.|[a-z]{2}\.)?(?:pinterest\.(?:com|ca|co\.uk|fr|de|es)|pin\.it)\/([\w/-]+)/i,
  facebook: /^https?:\/\/(?:www\.|m\.|web\.)?(?:facebook\.com\/(?:watch\/?\?v=\d  twitterX: /^https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/[\w]+\/status\/(\d+)/i,
  reddit: /^https?:\/\/(?:(?:www|old)\.reddit\.com\/r\/+|[\w.]+\/videos\/\d+|reel\/\d+)|fb\.watch\/[\w-]+)/i,
  vimeo: /^https?:\/\/(?:www\.|player\.)?vimeo\.com\/(?:video\/)?(\d+)/i,
  dailymotion: /^https?:\/\/(?:www\.)?(?:dailymotion\.com\/video\/|dai\.ly\/)([\w]+)/i,
  snapchat: /^https?:\/\/(?:www\.|story\.)[\w]+\/comments\/[\w]+|v\.redd\.it\/[\w]+|redd\.it\/[\w]+)/i,
  pinterest: /^https?:\/\/(?:www\.|[a-z]{2}\.)?(?:pinterest\.(?:com|ca|co\.uk|fr|de|es)|pin\.it)\/([\w/-]+)/i,
  facebook: /^https?:\/\/(?:www\.|m\.|web\.)?(?:facebook\.com\/(?:watch\/?\?v=\d+|[\w.]+\/videos\/\d?snapchat\.com\/(?:spotlight\/[\w-]+|s\/[\w:-]+)/i
};

export+|reel\/\d+)|fb\.watch\/[\w-]+)/i,
  vimeo: /^https?:\/\/(?:www\.|player\.) function detectPlatform(url) {
  if (!url || typeof url !== 'string') return null;
  for (const?vimeo\.com\/(?:video\/)?(\d+)/i,
  dailymotion: /^https?:\/\/(?: [platform, regex] of Object.entries(SOCIAL_URL_PATTERNS)) {
    if (regex.www\.)?(?:dailymotion\.com\/video\/|dai\.ly\/)([\w]+)/i,
test(url.trim())) return platform;
  }
  return null;
}

export function calculateTargetVideoBitrateKbps(targetSizeMB, durationSeconds, audioBitrateKbps = 128) {
  if (durationSeconds <= 0 || targetSizeMB <= 0) return 0;
  return Math.max(100, Math.floor  snapchat: /^https?:\/\/(?:www\.|story\.)?snapchat\.com\/(?:spotlight\/[\w-]+|s\/[\w:-]+)/i
};

export function detectPlatform(url) {
  if (!url || typeof url !== 'string') return null;
  for (const [platform, regex] of Object((targetSizeMB * 8192) / durationSeconds - audioBitrateKbps));
}
