import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../../dropdown-menu";
import { Button } from "../../button";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit: (value: TData) => void;
  onDelete: (value: TData) => void;
}

const DataTableRowActions = <TData,>({
  row,
  onEdit,
  onDelete,
}: DataTableRowActionsProps<TData>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => onEdit(row.original)}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onDelete(row.original)}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableRowActions;
