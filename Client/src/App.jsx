import {
  Navbar,
  Loader,
  Welcome,
  Transactions,
  Services,
  Footer,
} from "./components";
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Loader />
        <Welcome />
      </div>
      <Transactions />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
