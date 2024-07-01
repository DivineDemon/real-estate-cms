"use client";

import { Table } from "@tanstack/react-table";
import { CirclePlus, CircleX } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DataTableFilter from "./datatable-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  search: {
    name: string;
    title: string;
  }[];
  filters: {
    name: string;
    title: string;
    options: {
      value: string;
      label: string;
      icon: React.ComponentType<{ className?: string | undefined }> | undefined;
    }[];
  }[];
}

const DataTableToolbar = <TData,>({ table, search, filters }: DataTableToolbarProps<TData>) => {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex w-full items-center justify-between p-4 bg-primary-foreground">
      <div className="flex flex-1 items-center space-x-2">
        {search.map((item, idx) => (
          <Input
            key={idx}
            placeholder={`Filter by ${item.title}`}
            value={
              (table.getColumn(item.name)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(item.name)?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
        ))}
        {filters.map(
          (filter, idx) =>
            table.getColumn(filter.name) && (
              <DataTableFilter
                key={idx}
                title={filter.title}
                options={filter.options}
                column={table.getColumn(filter.name)}
              />
            )
        )}

        {isFiltered && (
          <Button
            variant="outline"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            {"Reset"}
            <CircleX className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <Button className="flex items-center justify-center space-x-3">
        <CirclePlus className="w-4 h-4" />
        <span>Add</span>
      </Button>
    </div>
  );
};

export default DataTableToolbar;
