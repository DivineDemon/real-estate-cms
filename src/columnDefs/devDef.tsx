import { Switch } from "@radix-ui/react-switch";
import { ColumnDef } from "@tanstack/react-table";

import { status } from "@/lib/constants";
import DataTableRowActions from "@/components/ui/shared/datatable/datatable-row-actions";

export const getDeveloperColumns = ({
  onEdit,
  onDelete,
}: DeveloperColumnsProps): ColumnDef<DeveloperProps>[] => [
  {
    header: "S. No",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Logo",
    accessorKey: "logo",
    cell: ({ row }) => (
      <p className="w-[500px] text-left overflow-hidden truncate">
        {row.original.logo}
      </p>
    ),
  },
  {
    accessorKey: "active",
    header: "Status",
    cell: ({ row }) => {
      const active = status.find((s) => s.value === row.getValue("active"));

      if (!active) {
        return null;
      }

      return <Switch checked={active?.value === "1" ? true : false} />;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="w-full flex items-center justify-between">
        <DataTableRowActions row={row} onEdit={onEdit} onDelete={onDelete} />
      </div>
    ),
  },
];
