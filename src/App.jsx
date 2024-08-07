import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import EmployeeListPage from "./Pages/EmployeeListPage/EmployeeListPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainRoute from "./MainRoute";
import LeaveRequestPage from "./Pages/LeaveRequestPage/LeaveRequestPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import ApprovalRequestsPage from "./Pages/ApprovalRequestPage/ApprovalRequestPage";
import { AuhtorizationProvider } from "./AuthorizationProvider";
import AddNewEmployeePage from "./Pages/AddNewEmployeePage/AddNewEmployee";
import MainPage from "./Pages/MainPage/MainPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuhtorizationProvider>
                <MainRoute />
              </AuhtorizationProvider>
            }
          >
            <Route index element={<MainPage />} />
            <Route path="/EmployeeList" element={<EmployeeListPage />} />
            <Route
              path="/EmployeeList/AddNewEmployee"
              element={<AddNewEmployeePage />}
            />

            <Route path="/LeaveRequests" element={<LeaveRequestPage />} />
            <Route
              path="/ApprovalRequests"
              element={<ApprovalRequestsPage />}
            />
            <Route path="/ProjectsPage" element={<ProjectsPage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
