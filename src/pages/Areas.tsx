import { useCallback, useMemo } from "react";

import { status } from "@/lib/constants";
import Loader from "@/components/global/loader";
import { getAreaColumns } from "@/columnDefs/areaDef";
import { useFetchDataQuery } from "@/store/slices/api";
import DataTable from "@/components/ui/shared/datatable/datatable";

const Areas = () => {
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
  const { data, isLoading } = useFetchDataQuery("area");

  const onEdit = useCallback(
    (area: AreaProps) => console.log(`Edited ${area.name}`),
    []
  );
  const onDelete = useCallback(
    (area: AreaProps) => console.log(`Deleted ${area.name}`),
    []
  );
  const areaColumns = useMemo(() => getAreaColumns({ onEdit, onDelete }), []);

  return isLoading ? (
    <Loader />
  ) : (
    <DataTable
      search={searchCriteria}
      filters={filterCriteria}
      columns={areaColumns}
      data={data as AreaProps[]}
    />
  );
};

export default Areas;
