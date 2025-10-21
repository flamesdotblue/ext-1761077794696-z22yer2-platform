import Header from "./components/Header";
import Intro from "./components/Intro";
import VariationsGallery from "./components/VariationsGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Intro />
        <VariationsGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
