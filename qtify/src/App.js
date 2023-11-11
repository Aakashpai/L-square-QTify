import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

const Wrapper = styled.div`
  .nav-wrapper{
    background-color: #34c94b ;
  }
  nav{
    background-color: #34c94b !important;
    justify-content: space-between;
    width: 95%;
    margin: auto;
  }
  .feedback-btn{
    background-color: #121212 !important;
    color: #34c94b;
  }
  .form-control{
    width: 25rem;
    flex: none;
    border-radius: 7px !important;
  }
  .input-group{
    width: auto;
  }
  .input-group-append {
    position: relative;
    right: 42px;
    top: 7px;
    width: 42px;
  }
`

function App() {
  return (
    <Wrapper>
      <div className="App">
        <Header />
      </div>
    </Wrapper>
  );
}

export default App;
