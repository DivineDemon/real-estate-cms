import { ColumnDef } from "@tanstack/react-table";

import { formatNumber } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { status, launchTypes } from "@/lib/constants";
import DataTableRowActions from "@/components/ui/shared/datatable/datatable-row-actions";

export const getProjectColumns = ({
  onEdit,
  onDelete,
}: ProjectColumnsProps): ColumnDef<ProjectProps>[] => [
  {
    header: "S. No",
    accessorKey: "id",
  },
  {
    accessorKey: "launch_type",
    header: "Launch Type",
    cell: ({ row }) => {
      const type = launchTypes.find(
        (t) => t.value === row.getValue("launch_type")
      );

      if (!type) {
        return null;
      }

      return <span>{type.label}</span>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Area",
    accessorKey: "area",
  },
  {
    header: "Developer",
    accessorKey: "developer",
  },
  {
    header: "Starting Price",
    accessorKey: "starting_price",
    cell: ({ row }) => (
      <p className="w-full text-left">
        {formatNumber(parseInt(row.original.starting_price))}
      </p>
    ),
  },
  {
    header: "Payment Plan",
    accessorKey: "payment_plan",
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
