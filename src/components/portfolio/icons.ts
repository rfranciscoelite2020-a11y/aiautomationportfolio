import {
  LayoutDashboard,
  Globe,
  Search,
  Workflow,
  Send,
  Zap,
  Bot,
  PhoneCall,
  Code2,
  Sparkles,
  Cable,
  type LucideIcon,
} from "lucide-react";

export const ICONS = {
  LayoutDashboard,
  Globe,
  Search,
  Workflow,
  Send,
  Zap,
  Bot,
  PhoneCall,
  Code2,
  Sparkles,
  Cable,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

/** Resolve a stored icon key to a renderable Lucide component, with a safe fallback. */
export function getIcon(name: string): LucideIcon {
  return (ICONS as Record<string, LucideIcon>)[name] ?? ICONS.Zap;
}
