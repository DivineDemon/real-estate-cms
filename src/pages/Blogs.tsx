import { useCallback, useMemo } from "react";

import { status } from "@/lib/constants";
import Loader from "@/components/global/loader";
import { getBlogColumns } from "@/columnDefs/blogDef";
import { useFetchDataQuery } from "@/store/slices/api";
import DataTable from "@/components/ui/shared/datatable/datatable";

const Blogs = () => {
  const searchCriteria = [
    {
      name: "title",
      title: "Title",
    },
  ];
  const filterCriteria = [
    {
      name: "active",
      title: "Status",
      options: status,
    },
  ];
  const { data, isLoading } = useFetchDataQuery("blog");

  const onEdit = useCallback(
    (blog: BlogProps) => console.log(`Edited ${blog.title}`),
    []
  );
  const onDelete = useCallback(
    (blog: BlogProps) => console.log(`Deleted ${blog.title}`),
    []
  );
  const blogColumns = useMemo(() => getBlogColumns({ onEdit, onDelete }), []);

  return isLoading ? (
    <Loader />
  ) : (
    <DataTable
      search={searchCriteria}
      filters={filterCriteria}
      columns={blogColumns}
      data={data as BlogProps[]}
    />
  );
};

export default Blogs;
