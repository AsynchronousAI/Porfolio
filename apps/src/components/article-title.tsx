import React from "react";

import { cn } from "@1chooo/ui/lib/utils";

interface ArticleTitleProps {
  className?: string;
  title: string;
}

function ArticleTitle({ className, title }: ArticleTitleProps) {
  return <h2 className={cn("h2 article-title", className)}>{title}</h2>;
}

export default ArticleTitle;
