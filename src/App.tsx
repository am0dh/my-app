import './App.css';
import { Helper } from './Helpers/Helper';
import { Wine } from './Helpers/Types';
import Table from './Tables/Table';
import data from './Wine-Data.json';
import { useEffect, useState } from 'react'

function App() {

  const [dictionary,setDictionary] = useState<{ [id: number]: Wine[]; }>({})

  useEffect(()=>{
    const dict: { [id: number]: Wine[]; } = {};

    data.forEach((item) => {
      const alcoholValue = item.Alcohol;
      if (!dict.hasOwnProperty(alcoholValue)) {
        dict[alcoholValue] = [];
      }
      dict[alcoholValue].push(item);
    });

    setDictionary(dict);
  },[])
  
  

  return (
    <div className='div-class'>
      <h2>
      Flavanoids
      </h2>
      <Table dictionary={dictionary} calculateMean={Helper.calculateMean} calculateMedian={Helper.calculateMedian} calculateMode={Helper.calculateMode} dataText={"Flavanoid"}></Table>

      <h2>
      Gamma
      </h2>
      <Table dictionary={dictionary} calculateMean={Helper.calculateGammaMean} calculateMedian={Helper.calculateGammaMedian} calculateMode={Helper.calculateGammaMode} dataText={"Gamma"}></Table>
    
    </div>
  );
}

export default App;
