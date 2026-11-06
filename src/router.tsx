import {BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from "./layouts/AppLayout.tsx";
import DashboardView from "./views/DashboardView.tsx";
import CreateProjectView from "@/views/CreateProjectView.tsx";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashboardView />} index />
                    <Route path="/projects/create" element={<CreateProjectView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}