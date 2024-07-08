import BoxContainer from "../../GlobalComponents/BoxContainer/BoxContainer";
import {
  useActiveProjects,
  useAllProjects,
  useInactiveProjects,
  useSearchedProject,
} from "../../QueryCalls/useProjects";
import Loader from "../../GlobalComponents/Loader";
import UpperHeader from "../../GlobalComponents/UpperHeader";
import SearchBar from "../../GlobalComponents/SearchBar";
import FilterButton from "../../GlobalComponents/FilterButton";
import MainTableBody from "../../GlobalComponents/Table/MainTableBody";
import TableHeader from "../../GlobalComponents/Table/TableHeader";
import TableRow from "../../GlobalComponents/Table/TableRow";
import { useEffect, useState } from "react";

const PageHeaders = [
  "ID",
  "Project Type",
  "StartDate",
  "EndDate",
  "Project Manager",
  "Status",
];

const filterList = [
  {
    id: 1,
    buttonName: "AllProjects",
    buttonText: "All Projects",
  },
  {
    id: 2,
    buttonName: "ActiveProjects",
    buttonText: "Active Projects",
    filterValue: "Active",
  },
  {
    id: 3,
    buttonName: "InactiveProjects",
    buttonText: "Inactive Projects",
    filterValue: "Inactive",
  },
];

const defaultFilter = {};

export default function ProjectsPage() {
  //MainFilter
  const [filterType, setFilterType] = useState("AllProjects");

  //MainData displayed on the screen
  const [data, setData] = useState(null);

  //State for the Searchbar
  const [searchbarState, setSearchbarState] = useState("");

  //useQuery calls
  const { projects, isLoadingProjects } = useAllProjects(filterType);
  const { activeProjects } = useActiveProjects(filterType);
  const { inactiveProjects } = useInactiveProjects(filterType);
  const { searchedProject } = useSearchedProject(filterType, searchbarState);

  //useEffect which updates the data value
  useEffect(() => {
    if (filterType === "AllProjects") {
      setData(projects);
    }
    if (filterType === "InactiveProjects") {
      setData(inactiveProjects);
    }

    if (filterType === "ActiveProjects") {
      setData(activeProjects);
    }

    if (filterType === "SearchedProject") {
      setData(searchedProject);
    }
  }, [projects, activeProjects, inactiveProjects, searchedProject, filterType]);

  //Main Component
  return (
    <>
      {isLoadingProjects ? (
        <Loader loadingText="Loading Data" />
      ) : (
        <BoxContainer>
          <UpperHeader>
            <SearchBar
              searchbarState={searchbarState}
              setSearchbarState={setSearchbarState}
              setFilterType={() => setFilterType("SearchedProject")}
              setFilteredTypeCancelSearch={() => setFilterType("AllProjects")}
            />
            <FilterButton
              SetFilterType={setFilterType}
              filterType={filterType}
              filterList={filterList}
            />
          </UpperHeader>
          <MainTableBody
            tableHead={<TableHeader tableHeadNames={PageHeaders} />}
            tableRows={<TableRow tableRowContent={data ? data : projects} />}
          ></MainTableBody>
        </BoxContainer>
      )}
    </>
  );
}
