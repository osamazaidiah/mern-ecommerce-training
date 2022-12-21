import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Column } from "./components/Column";
import { Main } from "./pages/Main";
import { SiteHeader } from "./components/SiteHeader";
import { CheckOut } from "./pages/CheckOut";
import { ViewOrders } from "./pages/ViewOrders";

function App() {
  return (
    <Column>
      <Router>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/check-out" element={<CheckOut />} />
          <Route path="/orders" element={<ViewOrders />} />
        </Routes>
      </Router>
    </Column>
  );
}

export default App;
