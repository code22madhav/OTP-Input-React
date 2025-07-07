import { Container, Content } from "./App.style";
import InputBoxContainer from "./components/OTP-Input-field/otp.input.component";
function App() {
  return (
    <Container>
      <Content>
      <h1>OTP Input</h1>
      <InputBoxContainer/>
      </Content>
    </Container>
  );
}

export default App;
