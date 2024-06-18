import dayjs from "dayjs";
import { Switch } from "@radix-ui/react-switch";
import { ColumnDef } from "@tanstack/react-table";
import { CircleCheck, CircleX } from "lucide-react";

import { status } from "@/lib/constants";
import DataTableRowActions from "@/components/ui/shared/datatable/datatable-row-actions";

export const getBlogColumns = ({
  onEdit,
  onDelete,
}: BlogColumnsProps): ColumnDef<BlogProps>[] => [
  {
    header: "S. No",
    accessorKey: "id",
  },
  {
    header: "Title",
    accessorKey: "title",
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
    header: "Video Link",
    accessorKey: "video_link",
    cell: ({ row }) => (
      <div className="w-full flex items-center justify-center">
        {row.original.video_link !== "" ? (
          <CircleCheck className="w-5 h-5 text-green-500" />
        ) : (
          <CircleX className="w-5 h-5 text-red-500" />
        )}
      </div>
    ),
  },
  {
    header: "Created",
    accessorKey: "created_at",
    cell: ({ row }) => (
      <p className="w-full text-left">
        {dayjs(row.original.created_at).format("DD-MM-YYYY | HH:mm")}
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
