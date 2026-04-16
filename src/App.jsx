import { Navbar } from "./components";
import Footer from "./components/Footer";
import { Home } from "./pages";

function App() {
  return (
    <>
      <div className="bg-[#F9FAFB]">
        
          <Navbar />
          <Home />
          <Footer/>
        </div>
      
    </>
  );
}

export default App;
