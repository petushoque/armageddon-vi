import { today, tomorrowDate } from '../utils/date';
import * as api from '../utils/api';
import './App.css';

function App() {

  api.takeData(today, tomorrowDate).then((res) => console.log(res))

  return (
    <div className="App">
    </div>
  );
}

export default App;
