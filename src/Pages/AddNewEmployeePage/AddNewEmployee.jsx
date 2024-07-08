import BoxContainer from "../../GlobalComponents/BoxContainer/BoxContainer";
import AddNewEmployeeForm from "../../GlobalComponents/Forms/AddNewEmployeeForm";
import UpperHeader from "../../GlobalComponents/UpperHeader";
import FormLabel from "../../GlobalComponents/Forms/FormLabel";
import MainButton from "../../GlobalComponents/MainButton";
import BackButton from "../../GlobalComponents/BackButton";
import Loader from "../../GlobalComponents/Loader";
import { useHRDepartment } from "../../QueryCalls/EmployeesTable/useEmployees";
import { useState } from "react";

const defaultState = {
  firstName: "",
  lastName: "",
  subdivision: "",
  position: "",
  peoplePartner: "",
  photo: undefined,
};

export default function AddNewEmployeePage() {
  const [newEmployee, setNewEmployee] = useState(defaultState);
  const { HR, isLoading } = useHRDepartment();

  function onChage(e) {
    setNewEmployee((x) => {
      return { ...newEmployee, [e.target.name]: e.target.value };
    });
  }

  if (isLoading) return <Loader />;

  return (
    <BoxContainer>
      <BackButton />
      <UpperHeader>
        <FormLabel text="Add New Employee" />
      </UpperHeader>
      <AddNewEmployeeForm
        onChage={(e) => onChage(e)}
        newEmployee={newEmployee}
        HR={HR}
      />
      <MainButton labelText="Send" className="w-1/5 mt-12 mx-auto" />
    </BoxContainer>
  );
}
