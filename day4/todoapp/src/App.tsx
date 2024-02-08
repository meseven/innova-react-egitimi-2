import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Logo from "./components/logo";
import Content from "./components/content";
import Menu from "./components/menu";

const App = () => (
  <>
    <Logo />
    <section className="todoapp">
      <Header />
      <Content />
      <Menu />
    </section>
    <Footer />
  </>
);

export default App;
