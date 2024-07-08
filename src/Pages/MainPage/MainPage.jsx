import BoxContainer from "../../GlobalComponents/BoxContainer/BoxContainer";
import MainButton from "../../GlobalComponents/MainButton";

export default function MainPage()
{
    return (
        <BoxContainer>
            <div className="grid grid-cols-2 gap-4">
                <p>Logged User : </p>
                <p>Out Of Office Balance : </p>
                <p>Role : </p>
                <MainButton labelText="Open new Leave Request"/>
            </div>
        </BoxContainer>

    )
}