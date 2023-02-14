import './App.css';
// Import PersonCard component
import PersonCard from './components/PersonCard'; 

function App() {
  return (
    <div className="App">
      {/* INSTANCES OF PersonCard */}
      
      {/* person 1 */}
      <PersonCard
      firstName = {"Oscar"}
      lastName = {"Garcia"}
      age = {24}
      hairColor = {"Brown"} />

      {/* person 2 */}
      <PersonCard
      firstName = {"Joe"}
      lastName = {"Doe"}
      age = {34}
      hairColor = {"Black"} />

      {/* person 3 */}
      <PersonCard
      firstName = {"Peter"}
      lastName = {"Parker"}
      age = {20}
      hairColor = {"Brown"} />

      {/* person 4 */}
      <PersonCard
      firstName = {"Jimi"}
      lastName = {"Hendrix"}
      age = {24}
      hairColor = {"Brown"} />
    </div>
  );
}

export default App;
