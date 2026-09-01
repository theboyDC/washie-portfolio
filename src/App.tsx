import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Stack />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
