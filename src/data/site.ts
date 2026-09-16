import avatarImage from "../../Resource/Profile/June_profile.JPG?url";
import manifestImage from "../../Resource/Work/Manifest/Manifest_thumbnail_image.jpg?url";
import ghostImage from "../../Resource/Work/GhostAI/GhostAI_thumbnail_image.png?url";
import ghostVideo from "../../Resource/Work/GhostAI/GhostAI_thumbnail_video.mp4?url";
import onectImage from "../../Resource/Work/Onect/Onect_thumbnail_image.jpg?url";
import onectVideo from "../../Resource/Work/Onect/Onect_thumbnail_video.mp4?url";
import gemiImage from "../../Resource/Work/GEMI/GEMI_thumbnail_image.png?url";
import gemiVideo from "../../Resource/Work/GEMI/GEMI_thumbnail_video.mp4?url";
import birdingVideo from "../../Resource/Work/Birding/Birding_thumbnail_video.mp4?url";
import horrorgameVideo from "../../Resource/Work/Horrorgame/Horrorgame_thumbnail_image.mp4?url";
import xomoxImage from "../../Resource/Work/XOMOX/XOMOX_thumbnail_image.jpeg?url";
import minigolfVideo from "../../Resource/Work/Minigolf/Minigolf_thumbnail_video.mp4?url";

export const site = {
  name: "June Cho",
  fullName: "June Seoyun Cho",
  bio: "June is a product designer with 3+ years of experience who loves making complex things feel understandable and human.",
  avatar: avatarImage,
  contact: {
    email: "yunchobusiness@gmail.com",
    resume: "/June_Cho_Resume.pdf",
    linkedin: "https://www.linkedin.com/in/junecho02/",
    medium: "https://junecho02.medium.com/",
  },
};

export type WorkStatus = "shipped" | "coming-soon" | "stub";
export type WorkGroup = "main" | "fun";

export interface WorkItem {
  slug: string;
  title: string;
  year: string;
  role: string;
  status: WorkStatus;
  group?: WorkGroup;
  summary: string;
  image?: string;
  video?: string;
}

export const work: WorkItem[] = [
  {
    slug: "manifest-os",
    title: "Manifest OS: Legal AI Tech",
    year: "Current",
    role: "Product Designer",
    status: "shipped",
    summary:
      "Rebuilding the case workflow for attorneys and paralegals — a design-system audit and a shipped AI assistant.",
    image: manifestImage,
  },
  {
    slug: "ghost-ai",
    title: "Ghost AI",
    year: "2026",
    role: "Product Engineer",
    status: "coming-soon",
    summary: "Master's capstone with Amazon and the MHCID program. Still in progress.",
    image: ghostImage,
    video: ghostVideo,
  },
  {
    slug: "onect-ai",
    title: "Onect: Legal Tech",
    year: "2025",
    role: "UX Design Awards Nominated",
    status: "shipped",
    summary:
      "An AI-native platform for the U.S. O-1 visa process, serving applicants and attorneys on one shared system. UX Design Awards 2026 nominee.",
    image: onectImage,
    video: onectVideo,
  },
  {
    slug: "gemi",
    title: "GEMI: Every Small Win Is a Gem",
    year: "2024",
    role: "UG Thesis",
    status: "shipped",
    summary:
      "A mobile app for adults with ADHD that replaces shame-driven to-do lists with a visual, gamified record of earned progress.",
    image: gemiImage,
    video: gemiVideo,
  },
  {
    slug: "xomox",
    title: "XOMOX: BAIE New York",
    year: "2025",
    role: "Visual Designer",
    status: "stub",
    summary: "Launched e-commerce work for BAIE New York.",
    image: xomoxImage,
  },
  {
    slug: "birding-by-ears",
    title: "Birding by Ears",
    year: "Archive",
    role: "Side Project",
    status: "stub",
    group: "fun",
    summary: "Archived exploration project from ycho.me.",
    video: birdingVideo,
  },
  {
    slug: "horrorgame",
    title: "Horrorgame",
    year: "Archive",
    role: "Experimental",
    status: "stub",
    group: "fun",
    summary: "Archived exploration project from ycho.me.",
    video: horrorgameVideo,
  },
  {
    slug: "minigolf",
    title: "Minigolf",
    year: "Fun",
    role: "Mini Project",
    status: "stub",
    group: "fun",
    summary: "Fun project from ycho.me.",
    video: minigolfVideo,
  },
  {
    slug: "tamagotchi",
    title: "Tamagotchi",
    year: "Fun",
    role: "Mini Project",
    status: "stub",
    group: "fun",
    summary: "Fun project from ycho.me.",
  },
];
