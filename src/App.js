import Footer from './Components/Footer';
import Header from './Components/Header';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow p-3" style={{ marginBottom: '4rem' }}>
      <Outlet />
    </div>
    <Footer />
  </div>
  );
}

export default App;
