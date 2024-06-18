import { useCallback, useMemo } from "react";
import { status, types } from "@/lib/constants";
import { getSiteColumns } from "@/columnDefs/siteDef";
import DataTable from "@/components/ui/shared/datatable/datatable";

const Sites = () => {
  const sites = [
    {
      id: "1",
      type: "Website",
      name: "F&C Main Website",
      domain: "fandcproperties.ae",
      managed_by: "Syed Tanveer",
      languages: "English,Russian,Arabic",
      active: "1",
    },
    {
      id: "2",
      type: "Website",
      name: "F&C Russian Website",
      domain: "fandcrealestate.com",
      managed_by: "Syed Tanveer",
      languages: "English,Russian",
      active: "1",
    },
    {
      id: "3",
      type: "Website",
      name: "Dubai Off Plan Website",
      domain: "jkdubai.ru",
      managed_by: "Syed Tanveer",
      languages: "English,Russian",
      active: "1",
    },
    {
      id: "4",
      type: "Landing Page",
      name: "Damac Casa",
      domain: "damac-casa",
      managed_by: "Syed Tanveer",
      languages: "English,Russian",
      active: "0",
    },
    {
      id: "5",
      type: "Website",
      name: "Real Estate Hub",
      domain: "realestatehub.ae",
      managed_by: "Ahmed Khan",
      languages: "English,Arabic",
      active: "1",
    },
    {
      id: "6",
      type: "Landing Page",
      name: "Luxury Villas",
      domain: "luxuryvillas.com",
      managed_by: "Maria Gomez",
      languages: "English,Spanish",
      active: "1",
    },
    {
      id: "7",
      type: "Website",
      name: "Property Finder",
      domain: "propertyfinder.ae",
      managed_by: "Syed Tanveer",
      languages: "English",
      active: "1",
    },
    {
      id: "8",
      type: "Landing Page",
      name: "Beachfront Apartments",
      domain: "beachfront-apartments.ae",
      managed_by: "Syed Tanveer",
      languages: "English,Russian",
      active: "0",
    },
    {
      id: "9",
      type: "Website",
      name: "Luxury Estates",
      domain: "luxuryestates.com",
      managed_by: "Ahmed Khan",
      languages: "English,French",
      active: "1",
    },
    {
      id: "10",
      type: "Landing Page",
      name: "City Apartments",
      domain: "cityapartments.ae",
      managed_by: "Maria Gomez",
      languages: "English",
      active: "0",
    },
    {
      id: "11",
      type: "Website",
      name: "Desert Villas",
      domain: "desertvillas.ae",
      managed_by: "Syed Tanveer",
      languages: "English,Arabic",
      active: "1",
    },
    {
      id: "12",
      type: "Website",
      name: "Urban Properties",
      domain: "urbanproperties.com",
      managed_by: "Maria Gomez",
      languages: "English,Spanish",
      active: "1",
    },
    {
      id: "13",
      type: "Landing Page",
      name: "Eco-Friendly Homes",
      domain: "ecofriendlyhomes.ae",
      managed_by: "Ahmed Khan",
      languages: "English,Arabic",
      active: "0",
    },
    {
      id: "14",
      type: "Website",
      name: "Modern Apartments",
      domain: "modernapartments.com",
      managed_by: "Syed Tanveer",
      languages: "English",
      active: "1",
    },
    {
      id: "15",
      type: "Landing Page",
      name: "Luxury Condos",
      domain: "luxurycondos.ae",
      managed_by: "Maria Gomez",
      languages: "English,French",
      active: "0",
    },
    {
      id: "16",
      type: "Website",
      name: "Downtown Living",
      domain: "downtownliving.com",
      managed_by: "Ahmed Khan",
      languages: "English,Spanish",
      active: "1",
    },
    {
      id: "17",
      type: "Landing Page",
      name: "Seaside Villas",
      domain: "seasidevillas.ae",
      managed_by: "Syed Tanveer",
      languages: "English,Arabic",
      active: "0",
    },
    {
      id: "18",
      type: "Website",
      name: "Urban Loft",
      domain: "urbanloft.com",
      managed_by: "Maria Gomez",
      languages: "English,Spanish,French",
      active: "1",
    },
    {
      id: "19",
      type: "Landing Page",
      name: "Beachfront Estates",
      domain: "beachfrontestates.ae",
      managed_by: "Ahmed Khan",
      languages: "English,Russian",
      active: "0",
    },
    {
      id: "20",
      type: "Website",
      name: "Riverside Homes",
      domain: "riversidehomes.com",
      managed_by: "Syed Tanveer",
      languages: "English,French",
      active: "1",
    },
  ];
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

  const onEdit = useCallback(
    (site: SiteProps) => console.log(`Edited ${site.name}`),
    []
  );
  const onDelete = useCallback(
    (site: SiteProps) => console.log(`Deleted ${site.name}`),
    []
  );
  const siteColumns = useMemo(() => getSiteColumns({ onEdit, onDelete }), []);

  return (
    <DataTable
      search={searchCriteria}
      filters={filterCriteria}
      columns={siteColumns}
      data={sites}
    />
  );
};

export default Sites;
