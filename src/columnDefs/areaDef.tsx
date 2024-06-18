import { ColumnDef } from "@tanstack/react-table";

import { status } from "@/lib/constants";
import { formatNumber } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import DataTableRowActions from "@/components/ui/shared/datatable/datatable-row-actions";

export const getAreaColumns = ({
  onEdit,
  onDelete,
}: AreaColumnsProps): ColumnDef<AreaProps>[] => [
  {
    header: "S. No",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Thumbnail",
    accessorKey: "thumbnail",
    cell: ({ row }) => (
      <p className="w-[500px] text-left overflow-hidden truncate">
        {row.original.thumbnail}
      </p>
    ),
  },
  {
    header: "Starting Price",
    accessorKey: "starting_price",
    cell: ({ row }) => (
      <p className="w-full text-left">
        AED&nbsp;
        {row.original.starting_price !== ""
          ? formatNumber(parseInt(row.original.starting_price))
          : "N/A"}
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
