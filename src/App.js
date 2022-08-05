import { useState } from 'react';
import Banner from './Components/Banner/Banner';
import Footer from './Components/footer';
import Forms from './Components/Forms';
import Team from './Components/Teams';

function App() {

  const teams = [
    {
      name: "Programmer",
      primaryColor: '#57C278',
      secundaryColor: '#D9F7E9'
    },
    {
      name: "FrontEnd",
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF'
    },
    {
      name: "Data Science",
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2'
    },
    {
      name: "Develops",
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8'
    },
    {
      name: "UX e Design",
      primaryColor: '#DB6EBF',
      secundaryColor: '#FAE9F5'
    },
    {
      name: "Mobile",
      primaryColor: '#FFBA05',
      secundaryColor: '#FFF5D9'
    },
    {
      name: "Innovation and Management",
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF'
    },
  ]

  const [contributors, setContributors] = useState([])

  const aoNewContributorAdd = (contributor) => {
    console.log(contributor)
    setContributors([...contributors, contributor])
  }

  return (
    <div className="App">
      <Banner/>
      <Forms teams={teams.map(teams => teams.name)} aoRegisteredContributor={contributor => aoNewContributorAdd(contributor)}/>
      <Footer/>

      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secundaryColor={team.secundaryColor} 
        contributors={contributors.filter(contributor => contributor.team === team.name)}
      />)}

      
    </div>
  );
}

export default App;
