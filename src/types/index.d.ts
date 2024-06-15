declare type DropdownProps = {
  button: string | React.ReactNode;
  title: string;
  options: {
    id: number;
    name: string;
    icon: React.ReactNode;
  }[];
};
