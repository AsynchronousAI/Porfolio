import dynamic from "next/dynamic";

import ArticleTitle from "@/components/article-title";
import { LatestArticles } from "@/components/about/latest-articles";

import markdownToHtml from "@/lib/markdownToHtml";
import { getBlogPosts } from "@/lib/api/blog";

import config from "@/config";

import { cn } from "@1chooo/ui/lib/utils";

import "@/styles/markdown-styles.css";

const AboutSection = dynamic(() => import("@/components/section/about"));
const TalkToHugo = dynamic(() => import("@/components/about/talk-to-hugo"));
const AnimatedSection = dynamic(() => import("@/components/animated-section"));
const CodingStats = dynamic(() => import("@/components/about/coding-stats"));

const { about, web3formsAccessKey } = config;
const {
  firstName,
  lastName,
  preferredName,
  introduction,
  techStacks,
  githubUsername,
} = about;

async function About() {
  const allPosts = getBlogPosts();

  let title = preferredName
    ? `About ${preferredName} 👨🏻‍💻`
    : `About ${firstName} ${lastName} 👨🏻‍💻`;

  const processedIntroduction = introduction
    ? await markdownToHtml(introduction)
    : null;

  return (
    <article>
      <AnimatedSection id="about">
        <ArticleTitle title={title} />
      </AnimatedSection>
      <AnimatedSection>
        {processedIntroduction && (
          <div
            className={cn("markdown")}
            dangerouslySetInnerHTML={{ __html: processedIntroduction }}
          />
        )}
      </AnimatedSection>

      {allPosts.length > 0 && <AboutSection id="latest-articles" title="Latest Articles"><LatestArticles posts={allPosts} /></AboutSection>}
      <AboutSection id="coding-stats" title="Coding Stats">
        <CodingStats techStacks={techStacks} githubUsername={githubUsername} />
      </AboutSection>
      <AboutSection id="talk-to-hugo" title="Talk To Hugo">
        <TalkToHugo web3formsAccessKey={web3formsAccessKey} />
      </AboutSection>
    </article>
  );
}

export default About;
