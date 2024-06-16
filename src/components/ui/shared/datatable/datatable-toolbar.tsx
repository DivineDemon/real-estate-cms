"use client";

import { Table } from "@tanstack/react-table";
import { CircleX, PlusCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { status, types } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import DataTableFilter from "./datatable-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

const DataTableToolbar = <TData,>({ table }: DataTableToolbarProps<TData>) => {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex w-full items-center justify-between p-4 bg-primary-foreground">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={"Filter by Name"}
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        <Input
          placeholder={"Filter by Domain"}
          value={(table.getColumn("domain")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("domain")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {table.getColumn("active") && (
          <DataTableFilter
            title={"Status"}
            options={status}
            column={table.getColumn("active")}
          />
        )}

        {table.getColumn("type") && (
          <DataTableFilter
            title={"Type"}
            options={types}
            column={table.getColumn("type")}
          />
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
      <Button
        variant="default"
        size="default"
        className="flex items-center justify-center space-x-3 place-self-end"
      >
        <PlusCircle className="w-4 h-4" />
        <span>Add</span>
      </Button>
    </div>
  );
};

export default DataTableToolbar;
