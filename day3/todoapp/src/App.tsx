import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Logo from "./components/logo";
import { TodoContextProvider } from "./context/TodoContext";
import Content from "./components/content";
import Menu from "./components/menu";

const App = () => (
  <TodoContextProvider>
    <>
      <Logo />
      <section className="todoapp">
        <Header />
        <Content />
        <Menu />
      </section>
      <Footer />
    </>
  </TodoContextProvider>
);

export default App;
