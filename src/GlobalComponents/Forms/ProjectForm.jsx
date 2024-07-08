import Input from "../Input";
import SelectBox from "../SelectBox";
import TextBox from "../TextBox";

export default function ProjectForm({onChage, project, projectManagers})
{
    return (
    <form className="grid grid-cols-3 gap-4">      
        <Input
            label="Project Type"
            value={project.projectType}
            name="projectType"
            onChange={(e) => onChage(e)}
        />
        {/* Install Date Picker from  https://www.npmjs.com/package/react-datepicker*/}
        {/* StartDate */}
        {/* EndDate */}
        <SelectBox
            label="Project Manager"
            data={projectManagers}
            value={project.projectManager}
            name="projectManager"
            onChange={(e) => onChage(e)}
        />
        {/* Comment */}
        <TextBox label="comment" value={project.comment} name="comment" placeholderText="comment (optional)" onChange={(e) => onChage(e)}/>

    </form>)
}