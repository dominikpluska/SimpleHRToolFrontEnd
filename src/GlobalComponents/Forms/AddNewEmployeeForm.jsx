import FileUploadButton from "../FileUploadButton";
import Input from "../Input";
import SelectBox from "../SelectBox";

export default function AddNewEmployeeForm({ onChage, newEmployee, HR }) {
  return (
    <form className="grid grid-cols-3 gap-4">
      <Input
        label="First Name"
        value={newEmployee.firstName}
        name="firstName"
        onChange={(e) => onChage(e)}
      />
      <Input
        label="Last Name"
        value={newEmployee.lastName}
        name="lastName"
        onChange={(e) => onChage(e)}
      />
      <Input
        label="Subdivision"
        value={newEmployee.subdivision}
        name="lastName"
        onChange={(e) => onChage(e)}
      />
      <Input
        label="Position"
        value={newEmployee.position}
        name="position"
        onChange={(e) => onChage(e)}
      />
      <SelectBox
        label="People Partner"
        data={HR}
        value={newEmployee.peoplePartner}
        name="peoplePartner"
        onChange={(e) => onChage(e)}
      />
      <FileUploadButton
        label="Add a photo"
        file={newEmployee.photo}
        name="photo"
        onChange={(e) => onChage(e)}
      />
    </form>
  );
}
