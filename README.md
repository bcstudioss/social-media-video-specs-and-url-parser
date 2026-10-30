# Social Media Video Specifications & URL Regex Parser (2026)

Maintained by **[Beast Code Studios](https://saveinx.com/about)** — creators of the **[Saveinx Media Toolkit](https://saveinx.com/)** and the **[Saveinx Android Video Compressor](https://saveinx.com/video-compressor-app)**.

This repository provides open-source reference resources for developers, video editors, and content creators:
1. **JavaScript/TypeScript URL Regex Patterns** for validating public media links from major social platforms.
2. **2026 Video Encoding & Bitrate Reference Sheet** for optimizing MP4 files across messaging platforms (WhatsApp 16MB limit, Discord 25MB limit).

---

## 1. Platform URL Validation Regex Patterns (JS / TS)

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

---

## 2. Target File Size & Bitrate Reference (WhatsApp & Discord)

| Target Platform | Max Free Upload Size | Recommended Video Codec | Recommended Audio Codec | Max Resolution |
| :--- | :--- | :--- | :--- | :--- |
| **WhatsApp Media** | 16 MB | H.264 (AVC) | AAC-LC (128 kbps) | 720p / 1080p @ 30fps |
| **Discord (Free Tier)** | 25 MB | H.264 / HEVC (H.265) | AAC-LC (128 kbps) | 720p / 1080p @ 30/60fps |
| **Standard Email** | 20 MB – 25 MB | H.264 (MP4) | AAC-LC (128 kbps) | 720p @ 30fps |

---

## 3. Official Live Tools & Web Utilities

* 🌐 **[Saveinx All-in-One Video Downloader](https://saveinx.com/)**
* 📌 **[Pinterest Bulk Board Downloader](https://saveinx.com/pinterest-board-downloader)** & **[Pinterest Video Downloader](https://saveinx.com/pinterest-video-downloader)**
* 📸 **[Anonymous Instagram Story Viewer](https://saveinx.com/ig-story-viewer)** & **[Instagram Reels Downloader](https://saveinx.com/instagram-video-downloader)**
* 🎵 **[TikTok Video Downloader (No Watermark)](https://saveinx.com/tiktok-video-downloader)**
* 🔊 **[Reddit Video Downloader with Audio (`v.redd.it`)](https://saveinx.com/reddit-video-downloader)**
* 🐦 **[Twitter (X) Video & GIF Downloader](https://saveinx.com/twitter-video-downloader)**
* 📱 **[Saveinx Video Compressor App (Android)](https://saveinx.com/video-compressor-app)**

---

## License
MIT License — Copyright (c) 2026 Beast Code Studios (`support.bcstudios@gmail.com`).
