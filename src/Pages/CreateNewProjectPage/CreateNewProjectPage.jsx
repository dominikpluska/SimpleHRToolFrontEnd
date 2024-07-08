import BoxContainer from "../../GlobalComponents/BoxContainer/BoxContainer";
import UpperHeader from "../../GlobalComponents/UpperHeader";
import FormLabel from "../../GlobalComponents/Forms/FormLabel";
import MainButton from "../../GlobalComponents/MainButton";
import BackButton from "../../GlobalComponents/BackButton";
import Loader from "../../GlobalComponents/Loader";
import { useHRDepartment } from "../../QueryCalls/EmployeesTable/useEmployees";
import { useState } from "react";
import ProjectForm from "../../GlobalComponents/Forms/ProjectForm";

const defaultState = {
  projectType: "",
  startDate: new Date(),
  endDate: new Date(),
  projectManager: "",
  comment: "",
};

export default function CreateNewProjectPage() {
  const [newProject, setNewProject] = useState(defaultState);
  //const { HR, isLoading } = useHRDepartment();

  function onChage(e) {
    setNewEmployee((x) => {
      return { ...newProject, [e.target.name]: e.target.value };
    });
  }

  //if (isLoading) return <Loader />;

  return (
    <BoxContainer>
      <BackButton />
      <UpperHeader>
        <FormLabel text="Open a new Project" />
      </UpperHeader>
      <ProjectForm
        onChage={(e) => onChage(e)}
        newEmployee={newProject}
      />
      <MainButton labelText="Send" className="w-1/5 mt-12 mx-auto" />
    </BoxContainer>
  );
}
