import type { type JSX } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPostgresql,
  SiJest,
  SiSocketdotio,
  SiSupabase,
  SiExpress,
  SiKonva,
  SiTypescript,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import type { IconType } from "react-icons";

export type Skill = { name: string; icon: IconType };

export const skills = {
  frontend: [
    { name: "HTML", icon: FaHtml5 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "CSS", icon: FaCss3Alt },
    { name: "React", icon: FaReact },
    { name: "Konva", icon: SiKonva },
    { name: "TypeScript", icon: SiTypescript },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Supabase", icon: SiSupabase },
    { name: "Socket.IO", icon: SiSocketdotio },
  ],
  tooling: [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Jest", icon: SiJest },
    { name: "VS Code", icon: TbBrandVscode },
  ],
};
