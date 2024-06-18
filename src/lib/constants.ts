import { CheckCircle2, CircleX, Earth, Filter, Flame, Handshake, Rocket, Sparkles } from "lucide-react";

export const status = [
  {
    value: "1",
    label: "Active",
    icon: CheckCircle2,
  },
  {
    value: "0",
    label: "Inactive",
    icon: CircleX,
  },
];

export const types = [
  {
    value: "Website",
    label: "Website",
    icon: Earth,
  },
  {
    value: "Landing Page",
    label: "Landing Page",
    icon: Filter,
  },
];

export const launchTypes = [
  {
    value: "Launch Soon",
    label: "Launch Soon",
    icon: Rocket,
  },
  {
    value: "New Launch",
    label: "New Launch",
    icon: Sparkles,
  },
  {
    value: "Hot Projects",
    label: "Hot Projects",
    icon: Flame,
  },
  {
    value: "Sold Out",
    label: "Sold Out",
    icon: Handshake,
  },
];
