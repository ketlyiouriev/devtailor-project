import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// PAGES
import { SearchPage, DashboardsPage, StatisticsPage } from "src/pages";

// PAGE COMPONENTS
import { Navbar } from "src/page-components";

function App() {
  return (
    <BrowserRouter basename="/">
      <header className="border-b">
        <Navbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/statistics" replace />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/dashboards" element={<DashboardsPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
