
import './App.css';
import Country from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Country></Country>
      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}
// 'https://restcountries.com/v2/all'
// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect( () => {
//     fetch('https://restcountries.com/v2/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   },[]);

//   return (
//     <div>
//       <h1>visiting every country</h1>
//       <h3>{countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>population: {props.population}</h4>
//     </div>
//   )
// }

export default App;
