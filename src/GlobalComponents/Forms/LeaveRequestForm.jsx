import Input from "../Input";
import TextBox from "../TextBox";

export default function LeaveRequestForm({leaveRequest, onChage})
{
    return (
        <form className="grid grid-cols-3 gap-4">      
            <Input
                label="Absence Reason"
                value={leaveRequest.absenceReason}
                name="absenceReason"
                onChange={(e) => onChage(e)}
            />
            {/* Implement date Picker! */}
            {/* Start Date */}
            {/* End Date */}
            <TextBox 
                label="Comment" 
                value={leaveRequest.comment}                 
                name="comment"
                onChange={(e) => onChage(e)}
    
            />
        </form>
    );
}