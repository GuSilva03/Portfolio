import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Navigation from "./components/navigation";

function App() {
  return (
    <div>
      <Sidebar>
        <Navigation/>
      </Sidebar>
    </div>
  );
}
const AppStyled = styled.div`
  background-color: blue;
`;
export default App;
