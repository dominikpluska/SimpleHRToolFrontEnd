import { useState } from "react";
import BackButton from "../../GlobalComponents/BackButton";
import BoxContainer from "../../GlobalComponents/BoxContainer/BoxContainer";
import FormLabel from "../../GlobalComponents/Forms/FormLabel";
import LeaveRequestForm from "../../GlobalComponents/Forms/LeaveRequestForm";
import UpperHeader from "../../GlobalComponents/UpperHeader";

const defaultState = {
    absenceReason: "",
    startDate: new Date(),
    endDate: new Date(),
    comment: "",
  };

export default function AddNewLeaveRequestPage() {
    const [leaveRequest, setLeaveRequest] = useState(defaultState);
    return (
        <BoxContainer>
            <BackButton/>
            <UpperHeader>
                <FormLabel text="Open New Leave Request" />
            </UpperHeader>
            <LeaveRequestForm leaveRequest={leaveRequest}/>
        </BoxContainer>
    );
}