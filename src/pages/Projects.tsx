import { useCallback, useMemo } from "react";
import Loader from "@/components/global/loader";
import { status, launchTypes } from "@/lib/constants";
import { useFetchDataQuery } from "@/store/slices/api";
import { getProjectColumns } from "@/columnDefs/projectDef";
import DataTable from "@/components/ui/shared/datatable/datatable";

const Projects = () => {
  const searchCriteria = [
    {
      name: "title",
      title: "Title",
    },
    {
      name: "area",
      title: "Area",
    },
    {
      name: "developer",
      title: "Developer",
    },
  ];
  const filterCriteria = [
    {
      name: "active",
      title: "Status",
      options: status,
    },
    {
      name: "launch_type",
      title: "Launch Type",
      options: launchTypes,
    },
  ];
  const { data, isLoading } = useFetchDataQuery("project");

  const onEdit = useCallback(
    (project: ProjectProps) => console.log(`Edited ${project.title}`),
    []
  );
  const onDelete = useCallback(
    (project: ProjectProps) => console.log(`Deleted ${project.title}`),
    []
  );
  const projectColumns = useMemo(
    () => getProjectColumns({ onEdit, onDelete }),
    []
  );

  return isLoading ? (
    <Loader />
  ) : (
    <DataTable
      search={searchCriteria}
      filters={filterCriteria}
      columns={projectColumns}
      data={data as ProjectProps[]}
    />
  );
};

export default Projects;
