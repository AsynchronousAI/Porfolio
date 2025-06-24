import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeImageCaptions from "@/lib/rehype/image-captions";

import config from "@/config";

const { shikiTheme } = config;

const cache = new Map<string, string>();

export default async function markdownToHtml(markdown: string) {
  if (cache.has(markdown)) {
    return cache.get(markdown)!;
  }

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrettyCode, {
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeImageCaptions)
    .use(rehypeShiki, {
      themes: {
        light: shikiTheme.light,
        dark: shikiTheme.dark,
      },
      defaultColor: shikiTheme.defaultColor,
    })
    .use(rehypeStringify)
    .process(markdown);

  const htmlContent = result.toString();

  cache.set(markdown, htmlContent);

  return htmlContent;
}
