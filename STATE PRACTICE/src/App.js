import logo from './logo.svg';
import CurrentStory from './My-Components/My-Current-Story';
import UserInfo from './My-Components/My-User-Info';
import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     <CurrentStory 
    
//     />
    
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      
      <UserInfo UserName="SALMAN" Organization="DHORAJI" Designation="TRAINER"/>

      <UserInfo UserName="ZIYAD" Institute="FUUAST" Course="BSCS"/>

    
    </div>
  );
}

export default App;
