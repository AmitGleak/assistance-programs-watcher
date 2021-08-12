import './App.css';
import DataTable from './DataTable.js';
import Button from '@material-ui/core/Button';

const App = () => {
  const programs = {
    "programs": [
      {
        "name": "A",
        "treatmentsCovered": ['fasdfd', 'fdasf', 'dafd', 'dafdas', 'afdafdas', 'fdafd', 'fdasf', 'fdafdsafd', 'fdas', 'vkalfd', 'qruafipodaf'],
        "status": "Open",
        "maxAwardLevel": "$60,000"
      },
      {
        "name": "B",
        "treatmentsCovered": ['dfas', 'gfg', 'gtrt', 'yrudnff'],
        "status": "Closed",
        "maxAwardLevel": "$30,000"
      },
      {
        "name": "C",
        "treatmentsCovered": ['jfdkslaurew', 'dsafd', 'ads', 'amit', 'something', 'in'],
        "status": "Open",
        "maxAwardLevel": "$160,000"
      },
      {
        "name": "D",
        "treatmentsCovered": ['dsfd', 'gre', 'amitdf', 'adam', 'smartut', 'achla', 'haim'],
        "status": "Closed",
        "maxAwardLevel": "$24,000"
      },
    ]
  }

  const updatePrograms = () => {

  }

  return (
    <div>
      <DataTable programs={programs.programs} />
      <Button variant="contained" onClick={updatePrograms} color="primary">
        Refresh Data
      </Button>
    </div>
  );
}

export default App;