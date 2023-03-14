import './App.css';
import { StyledButton, StyledButtonWithHover } from './component/styled/Button';

function App() {
  return (
    <div className="App">
     <div className='button_box'>
      <StyledButton>Live</StyledButton>
      <StyledButton variant='primary'>Github</StyledButton>
     
     </div>
     <div >
     <StyledButtonWithHover>Hover Me</StyledButtonWithHover>
     </div>
    </div>
  );
}

export default App;
