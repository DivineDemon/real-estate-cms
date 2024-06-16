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