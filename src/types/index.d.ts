declare type DropdownProps = {
  size: "default" | "icon" | "sm" | "lg" | null | undefined;
  button: string | React.ReactNode;
  title: string;
  options: {
    id: number;
    name: string;
    icon: React.ReactNode;
  }[];
};

declare type SidebarProps = {
  size: "default" | "icon" | "sm" | "lg" | null | undefined;
  button: string | React.ReactNode;
  options: {
    id: number;
    name: string;
    icon: React.ReactNode;
    link: string;
  }[];
};

declare type SiteProps = {
  id: string;
  type: string;
  name: string;
  domain: string;
  managed_by: string;
  languages: string;
  active: string;
};

declare type SiteColumnsProps = {
  onEdit: (site: SiteProps) => void;
  onDelete: (site: SiteProps) => void;
}

declare type ProjectProps = {
  id: string;
  launch_type: string;
  title: string;
  area: string;
  developer: string;
  starting_price: string;
  payment_plan: string;
  active: string;
  position: string;
};

declare type ProjectColumnsProps = {
  onEdit: (project: ProjectProps) => void;
  onDelete: (project: ProjectProps) => void;
};