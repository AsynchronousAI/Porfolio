import OGImageGenerator from "./og-image-generator";
import ArticleTitle from "@/components/article-title";

export const metadata = {
  title: "Chun-Ho (Hugo) Lin",
  description:
    "I'm Chun-Ho (Hugo) Lin, an incoming student at University of Southern California (USC) 🎓. Previously, I obtained my Bachelor's degree from National Central University (NCU) 🎓.".slice(
      0,
      100,
    ) + "...",
  openGraph: {
    title: "Chun-Ho (Hugo) Lin",
    description:
      "I'm Chun-Ho (Hugo) Lin, an incoming student at University of Southern California (USC) 🎓. Previously, I obtained my Bachelor's degree from National Central University (NCU) 🎓.".slice(
        0,
        100,
      ) + "...",
    url: "https://1chooo.com",
    siteName: "1chooo.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Chun-Ho (Hugo) Lin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <article>
      <ArticleTitle title={"OG Image Generator"} />
      <OGImageGenerator />
    </article>
  );
}
