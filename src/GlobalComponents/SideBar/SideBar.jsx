import { FaUserCheck, FaCalendarAlt } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { LuPenTool } from "react-icons/lu";
import { Link } from "react-router-dom";
import SideBarButton from "./SideBarButton";

const SomeArray = [
  {
    id: 1,
    buttonText: <Link to="/">Main Page</Link>,
    icon: <MdOutlineContactPage className="mt-1 mr-2" />,
  },
  {
    id: 2,
    buttonText: <Link to="/EmployeeList">Employee List</Link>,
    icon: <FaUserCheck className="mt-1 mr-2" />,
  },
  {
    id: 3,
    buttonText: <Link to="/LeaveRequests">Leave Requests</Link>,
    icon: <FaCalendarAlt className="mt-1 mr-2" />,
  },
  {
    id: 4,
    buttonText: <Link to="/ApprovalRequests">Approval Requests</Link>,
    icon: <IoCheckmark className="mt-1" />,
  },

  {
    id: 5,
    buttonText: <Link to="/ProjectsPage">Project List</Link>,
    icon: <VscGithubProject className="mt-1 mr-2" />,
  },
];

export default function SideBar({ children }) {
  return (
    <nav className="w-[200px] h-screen bg-cyan-500 text-white absolute">
      <div className="flex flex-col justify-center items-center pt-2 text-xl mb-2">
        <div className="flex justify-center">
          <LuPenTool className="mr-1 mt-1" />
          Simple HR Tool
        </div>
      </div>
      <hr className="h-1 bg-white" />
      <ul className=" text-md mt-4 flex flex-col justify-center items-center">
        {SomeArray.map((x) => {
          return (
            <SideBarButton key={x.id}>
              <div className="flex justify-center">
                {x.icon}
                {x.buttonText}
              </div>
            </SideBarButton>
          );
        })}
      </ul>
      {children}
    </nav>
  );
}
