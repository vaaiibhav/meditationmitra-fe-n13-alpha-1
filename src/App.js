import Box from "./components/Box";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Box>
      <Router>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
