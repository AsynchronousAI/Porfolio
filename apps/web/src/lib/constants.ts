import type { Breakpoint } from "@/hooks/use-responsive-image-size";
import { format } from "date-fns";

export const POSTS_PER_PAGE = 8;
export const BUILD_TIME = format(Date.now(), "LLLL dd, yyyy");

export const breakpoints: Breakpoint[] = [
  { maxWidth: 250, size: { width: 80, height: 80 } },
  { maxWidth: 375, size: { width: 80, height: 80 } },
  { maxWidth: 580, size: { width: 80, height: 80 } },
  { maxWidth: 1250, size: { width: 120, height: 120 } },
  { maxWidth: Infinity, size: { width: 150, height: 150 } },
];

export const EXAMPLE_PATH = "blog-starter";
export const CMS_NAME = "Markdown";
