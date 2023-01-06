import { Box } from "@chakra-ui/react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <Box className="App">
    <Navbar />
      <AllRoutes />
      <Footer/>
    </Box>
  );
}

export default App;
