import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


interface ParameterGraphProps {
  parametersArray: EspParameters[]
  dataKey: String
  strokeColor: String
  parameterLabel: String
}

function ParameterGraph({ parametersArray, dataKey, strokeColor, parameterLabel }: ParameterGraphProps) {
  return (
    <div className='flex flex-1 flex-row h-full justify-center items-center px-8 py-4'>
      <div className='flex flex-1 flex-col h-40 justify-start items-start'>
        <h1 className='block text-2xl font-semibold text-colorAccent1 dark:text-colorAccent2'>{parameterLabel}</h1>
        <p className='block'>Datos reportados del cultivo en la &uacute;ltima hora</p>
      </div>
      <div>
        <LineChart width={400} height={200} data={parametersArray}>
          <XAxis dataKey="timestamp" tick={false} axisLine={true} label={dataKey + " en la última hora"} />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey={dataKey} stroke={strokeColor} />
        </LineChart>
      </div>
    </div>
  )
}



export default function AquariumParametersGraph({ parametersArray }: AquariumRequest) {
  // const data = []
  // for (const espParameters of parametersArray) {
  //   data.push({
  //     ...espParameters,
  //     time: espParameters.timestamp.getTime()
  //   })
  // }
  // console.log(data)
  // 
  return (
    <div className="bg-white rounded-xl w-full h-full">
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"ph"}
        strokeColor={"#836eff"}
        parameterLabel={"PH"}
      />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"tds"}
        strokeColor={"#2de070"}
        parameterLabel={"TDS"}
      />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"altura"}
        strokeColor={"#ffc400"}
        parameterLabel={"Altura"}
      />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"conductividadElectrica"}
        strokeColor={"#22c7d4"}
        parameterLabel={"Conductividad Eléctrica"}
      />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"temperatura"}
        strokeColor={"#fa730c"}
        parameterLabel={"Temperatura"}
      />
    </div>
  )
}


