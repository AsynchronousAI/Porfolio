import {
  BriefcaseIcon,
  GraduationCapIcon,
  AwardIcon,
  CalendarIcon,
  MapPin,
  Paperclip,
  Swords,
} from "lucide-react";

import { IoSchoolOutline } from "react-icons/io5";
import { DiRedis } from "react-icons/di";
import { FaAws, FaReact } from "react-icons/fa"

import {
  MdOutlineDevices,
  MdAttachment,
} from "react-icons/md";
import {
  LuGithub,
  LuPencil,
  LuLinkedin,
  LuRss,
  LuMail,
  LuMapPin,
  LuZap,
  LuEye,
} from "react-icons/lu";
import { PiMediumLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { GoalIcon, ArrowRightIcon } from "@primer/octicons-react";
import { AiOutlinePython } from "react-icons/ai";
import { RiJavaLine, RiJavascriptLine } from "react-icons/ri";
import { SiLatex, SiFastapi, SiKubernetes, SiPostman } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { VscTerminalLinux, VscAzure } from "react-icons/vsc";
import {
  TbBrandCpp,
  TbBrandTypescript,
  TbBrandGolang,
  TbBrandNextjs,
  TbBrandDjango,
  TbBrandDocker,
  TbBrandMysql,
  TbMarkdown,
  TbBrandAstro,
  TbBrandTerraform,
  TbPhotoSquareRounded,
} from "react-icons/tb";

import { VCardIconType } from "@/types/config";

export enum ICON_NAMES {
  ATTACHMENT = "attachment",
  DEVICES = "devices",
  SCHOOL = "school",
  BRIEFCASE = "briefcase",
  GRADUATION_CAP = "graduation-cap",
  AWARD = "award",
  CALENDAR = "calendar",
  MAP_PIN = "map-pin",
  GITHUB_LU = "github",
  LINKEDIN_LU = "linkedin",
  RSS_LU = "rss",
  MAIL_LU = "mail",
  PENCIL_LU = "pencil",
  MAP_PIN_LU = "map-pin-lu",
  MEDIUM_PI = "medium",
  TWITTER_FA = "twitter",
  ATTACHMENT_MD = "attachment-md",
  GOAL = "goal",
  PHOTO = "photo",
  REACT = "react",
  AWS = "aws",
  PYTHON = "python",
  JAVA = "java",
  JAVASCRIPT = "javascript",
  LATEX = "latex",
  FASTAPI = "fastapi",
  KUBERNETES = "kubernetes",
  POSTMAN = "postman",
  FLASK = "flask",
  TERMINAL_LINUX = "terminal-linux",
  AZURE = "azure",
  REDIS = "redis",
  CPP = "cpp",
  TYPESCRIPT = "typescript",
  GOLANG = "golang",
  NEXTJS = "nextjs",
  DJANGO = "django",
  DOCKER = "docker",
  MYSQL = "mysql",
  MARKDOWN = "markdown",
  ASTRO = "astro",
  TERRAFORM = "terraform",
  ZAP = "zap",
  EYE_LU = "eye-lu",
  ARROW_RIGHT = "arrow-right",
}

export const icons: Record<ICON_NAMES, VCardIconType> = {
  [ICON_NAMES.ATTACHMENT]: Paperclip,
  [ICON_NAMES.DEVICES]: MdOutlineDevices,
  [ICON_NAMES.SCHOOL]: IoSchoolOutline,
  [ICON_NAMES.BRIEFCASE]: BriefcaseIcon,
  [ICON_NAMES.GRADUATION_CAP]: GraduationCapIcon,
  [ICON_NAMES.AWARD]: AwardIcon,
  [ICON_NAMES.CALENDAR]: CalendarIcon,
  [ICON_NAMES.MAP_PIN]: MapPin,
  [ICON_NAMES.GITHUB_LU]: LuGithub,
  [ICON_NAMES.LINKEDIN_LU]: LuLinkedin,
  [ICON_NAMES.RSS_LU]: LuRss,
  [ICON_NAMES.MAIL_LU]: LuMail,
  [ICON_NAMES.PENCIL_LU]: LuPencil,
  [ICON_NAMES.MAP_PIN_LU]: LuMapPin,
  [ICON_NAMES.MEDIUM_PI]: PiMediumLogoBold,
  [ICON_NAMES.TWITTER_FA]: FaXTwitter,
  [ICON_NAMES.ATTACHMENT_MD]: MdAttachment,
  [ICON_NAMES.GOAL]: GoalIcon,
  [ICON_NAMES.PHOTO]: TbPhotoSquareRounded,
  [ICON_NAMES.REACT]: FaReact,
  [ICON_NAMES.AWS]: FaAws,
  [ICON_NAMES.PYTHON]: AiOutlinePython,
  [ICON_NAMES.JAVA]: RiJavaLine,
  [ICON_NAMES.JAVASCRIPT]: RiJavascriptLine,
  [ICON_NAMES.LATEX]: SiLatex,
  [ICON_NAMES.FASTAPI]: SiFastapi,
  [ICON_NAMES.KUBERNETES]: SiKubernetes,
  [ICON_NAMES.POSTMAN]: SiPostman,
  [ICON_NAMES.FLASK]: BiLogoFlask,
  [ICON_NAMES.TERMINAL_LINUX]: VscTerminalLinux,
  [ICON_NAMES.AZURE]: VscAzure,
  [ICON_NAMES.REDIS]: DiRedis,
  [ICON_NAMES.CPP]: TbBrandCpp,
  [ICON_NAMES.TYPESCRIPT]: TbBrandTypescript,
  [ICON_NAMES.GOLANG]: TbBrandGolang,
  [ICON_NAMES.NEXTJS]: TbBrandNextjs,
  [ICON_NAMES.DJANGO]: TbBrandDjango,
  [ICON_NAMES.DOCKER]: TbBrandDocker,
  [ICON_NAMES.MYSQL]: TbBrandMysql,
  [ICON_NAMES.MARKDOWN]: TbMarkdown,
  [ICON_NAMES.ASTRO]: TbBrandAstro,
  [ICON_NAMES.TERRAFORM]: TbBrandTerraform,
  [ICON_NAMES.ZAP]: LuZap,
  [ICON_NAMES.EYE_LU]: LuEye,
  [ICON_NAMES.ARROW_RIGHT]: ArrowRightIcon,
};

// Updated return type to include undefined
export function getIcon(iconName: string): VCardIconType | undefined {
  return icons[iconName as ICON_NAMES];
}

// Alternative: Provide a fallback icon
export function getIconWithFallback(
  iconName: string,
  fallback: VCardIconType = Swords,
): VCardIconType {
  return icons[iconName as ICON_NAMES] || fallback;
}
