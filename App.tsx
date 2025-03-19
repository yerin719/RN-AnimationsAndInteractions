import styled from 'styled-components/native';
import {Text} from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Text>Hello World</Text>
    </Container>
  );
}

export default App;
