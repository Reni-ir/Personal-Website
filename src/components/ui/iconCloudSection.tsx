import { IconCloud } from "./icon-cloud";

const slugs = [
  // Web fundamentals
  "html5",
  "css3",
  "bootstrap",
  "tailwindcss",
  "sass", // SCSS
  "javascript",
  "typescript",

  // Backend / Frameworks
  "dotnet", // ASP.NET Core
  "php",
  "nestjs",
  "nextdotjs", // Next.js

  // Database
  "mysql",
  "microsoftsqlserver", // SQL / SSMS

  // CMS & WordPress ecosystem
  "wordpress",
  "elementor", // ⚠️ ممکنه در Simple Icons نباشه

  // Analytics & Search
  "googleanalytics",
  "googlesearchconsole",

  // AI Tools
  "openai", // ChatGPT (آیکون OpenAI)
  "anthropic", // Claude ⚠️ شاید موجود نباشه
  "googlegemini", // Gemini

  // IDEs
  "visualstudiocode",
  "visualstudio",
];

export function IconCloudSection() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
