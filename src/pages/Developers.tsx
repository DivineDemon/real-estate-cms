import { useCallback, useMemo } from "react";

import { status } from "@/lib/constants";
import Loader from "@/components/global/loader";
import { useFetchDataQuery } from "@/store/slices/api";
import { getDeveloperColumns } from "@/columnDefs/devDef";
import DataTable from "@/components/ui/shared/datatable/datatable";

const Developers = () => {
  const searchCriteria = [
    {
      name: "name",
      title: "Name",
    },
  ];
  const filterCriteria = [
    {
      name: "active",
      title: "Status",
      options: status,
    },
  ];
  const { data, isLoading } = useFetchDataQuery("developer");

  const onEdit = useCallback(
    (developer: DeveloperProps) => console.log(`Edited ${developer.name}`),
    []
  );
  const onDelete = useCallback(
    (developer: DeveloperProps) => console.log(`Deleted ${developer.name}`),
    []
  );
  const developerColumns = useMemo(
    () => getDeveloperColumns({ onEdit, onDelete }),
    []
  );

  return isLoading ? (
    <Loader />
  ) : (
    <DataTable
      search={searchCriteria}
      filters={filterCriteria}
      columns={developerColumns}
      data={data as DeveloperProps[]}
    />
  );
};

export default Developers;
