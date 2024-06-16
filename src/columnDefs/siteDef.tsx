import { ColumnDef } from "@tanstack/react-table";

import { status, types } from "@/lib/constants";
import { Switch } from "@/components/ui/switch";
import DataTableRowActions from "@/components/ui/shared/datatable/datatable-row-actions";

export const getSiteColumns = ({
  onEdit,
  onDelete,
}: SiteColumnsProps): ColumnDef<SiteProps>[] => [
  {
    header: "S. No",
    accessorKey: "id",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = types.find((t) => t.value === row.getValue("type"));

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
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Domain",
    accessorKey: "domain",
  },
  {
    header: "Managed By",
    accessorKey: "managed_by",
  },
  {
    header: "Languages",
    accessorKey: "languages",
    cell: ({ row }) => (
      <p className="w-full text-left">
        {row.original.languages.split(",").join(", ")}
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
