
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ProfileDashboard from "./pages/ProfileDashboard";
import FigmaDashboard from "./pages/FigmaDashboard";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Navbar />

          <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route
                path="/profile-dashboard"
                element={<ProfileDashboard />}
              />

              <Route
                path="/figma-dashboard"
                element={<FigmaDashboard />}
              />

              <Route
                path="/analytics-dashboard"
                element={<AnalyticsDashboard />}
              />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
