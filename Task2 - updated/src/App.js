// import logo from './logo.svg';
import './App.css';
import Header from'./header';
function App() {
  return (
    <div className="App">
      <Header />

      <div >
         <img src={require('./images/atlassian-1.jpg')} alt="logo" width='100%' className='imagetext'></img>
         <h1 className='texton'>Move Work <br />Forward</h1>
         <h2 className='texton2'>Atlassian helps team work smarter and faster,<br></br> together.</h2>
         <button className='button'>Learn more</button>
      </div>
    </div>
  );
}

export default App;
