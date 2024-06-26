import { useCallback, useMemo } from "react";
import { status, types } from "@/lib/constants";
import Loader from "@/components/global/loader";
import { getSiteColumns } from "@/columnDefs/siteDef";
import { useFetchDataQuery } from "@/store/slices/api";
import DataTable from "@/components/ui/shared/datatable/datatable";

const Sites = () => {
  const searchCriteria = [
    {
      name: "name",
      title: "Name",
    },
    {
      name: "domain",
      title: "domain",
    },
  ];
  const filterCriteria = [
    {
      name: "active",
      title: "Status",
      options: status,
    },
    {
      name: "type",
      title: "Type",
      options: types,
    },
  ];
  const { data, isLoading } = useFetchDataQuery("site");

  const onEdit = useCallback(
    (site: SiteProps) => console.log(`Edited ${site.name}`),
    []
  );
  const onDelete = useCallback(
    (site: SiteProps) => console.log(`Deleted ${site.name}`),
    []
  );
  const siteColumns = useMemo(() => getSiteColumns({ onEdit, onDelete }), []);

  return isLoading ? (
    <Loader />
  ) : (
    <DataTable
      search={searchCriteria}
      filters={filterCriteria}
      columns={siteColumns}
      data={data as SiteProps[]}
    />
  );
};

export default Sites;
