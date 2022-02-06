import "@material-tailwind/react/tailwind.css";
import Header from "./components/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Router from "./util/Router/Router";


function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
