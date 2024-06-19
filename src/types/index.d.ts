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
};

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

declare type AreaProps = {
  id: string;
  name: string;
  display_name: string;
  thumbnail: string;
  starting_price: string;
  active: string;
};

declare type AreaColumnsProps = {
  onEdit: (area: AreaProps) => void;
  onDelete: (area: AreaProps) => void;
};

declare type DeveloperProps = {
  id: string;
  logo: string;
  name: string;
  active: string;
};

declare type DeveloperColumnsProps = {
  onEdit: (developer: DeveloperProps) => void;
  onDelete: (developer: DeveloperProps) => void;
};

declare type BlogProps = {
  id: string;
  site_id: string;
  lang_id: string;
  thumbnail: string;
  thumbnail_alt: string;
  title: string;
  description: string;
  video_link: string;
  position: string;
  active: string;
  user_id: string;
  created_at: string;
  updated_at: string;
};

declare type BlogColumnsProps = {
  onEdit: (blog: BlogProps) => void;
  onDelete: (blog: BlogProps) => void;
};

declare type GlobalStateProps = {
  areas: AreaProps[];
  blogs: BlogProps[];
  sites: SiteProps[];
  projects: ProjectProps[];
  developers: DeveloperProps[];
};
