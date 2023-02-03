import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Pages from "./pages";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
