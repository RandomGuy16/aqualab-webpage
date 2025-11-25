import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useDeviceType } from "@/app/useDeviceType";

interface ParameterGraphProps {
  parametersArray: EspParameters[]
  dataKey: String
  strokeColor: String
  parameterLabel: String
  parameterDescription: String
  xAxisLabel: String
}

function ParameterGraph(
  {
    parametersArray,
    dataKey,
    strokeColor,
    parameterLabel,
    parameterDescription,
    xAxisLabel
  }: ParameterGraphProps) {
  const deviceType = useDeviceType();

  const getWidth = () => {
    switch (deviceType) {
      case 'mobile':
        return 300;
      case 'tablet':
        return 400;
      case 'desktop':
        return 500;
    }
  };
  const getHeight = () => {
    switch (deviceType) {
      case 'mobile':
        return 200;
      case 'tablet':
        return 250;
      case 'desktop':
        return 300;
    }
  }

  return (
    <div className='flex flex-1 flex-col md:flex-row h-full justify-center items-center px-8 py-4'>
      <div className='flex flex-1 flex-col h-26 sm:h-60 lg:h-72 justify-start items-start'>
        <h1 className='block text-2xl font-semibold text-colorAccent1 dark:text-colorAccent2'>{parameterLabel}</h1>
        <p className='block'>{parameterDescription}</p>
      </div>
      <div>
        <LineChart width={getWidth()} height={getHeight()} data={parametersArray}>
          <XAxis dataKey="timestamp" tick={false} axisLine={true} label={xAxisLabel} />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey={dataKey} stroke={strokeColor} dot={false} />
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
  const motorState = parametersArray[0]?.rele_estado ?? 'apagado'
  return (
    <div className="bg-white rounded-xl w-full h-full px-4">
      <div className='flex flex-1 flex-col md:flex-row h-full justify-center items-center px-8 py-4'>
        <div className='flex flex-1 flex-col w-full justify-start items-start'>
          <h1 className='block text-2xl font-semibold text-colorAccent1 dark:text-colorAccent2'>Motor</h1>
          <span className='block'>Estado del motor: {motorState}</span>
        </div>
      </div>
      <hr />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"distancia_cm"}
        strokeColor={"#ffc400"}
        parameterLabel={"Altura del agua en la pecera"}
        parameterDescription={"Mide qué tan lleno está el tanque. Cuando se acerca al límite, indica riesgo de rebalse y necesidad de ajuste."}
        xAxisLabel={"Altura del agua antes de revalsar"}
      />
      <hr />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"humedad"}
        strokeColor={"#6491ed"}
        parameterLabel={"Humedad del aire"}
        parameterDescription={"Refleja la cantidad de vapor presente en el ambiente. Ayuda a detectar cambios que pueden afectar las plantas o la evaporación del sistema."}
        xAxisLabel={"Humedad del aire"}
      />
      <hr />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"ph"}
        strokeColor={"#836eff"}
        parameterLabel={"PH en el agua"}
        parameterDescription={"Indica qué tan ácida o alcalina está el agua. Mantener un pH estable es clave para la salud de peces y plantas."}
        xAxisLabel={"PH en el agua"}
      />
      <hr />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"tds_ppm"}
        strokeColor={"#2de070"}
        parameterLabel={"TDS en el agua"}
        parameterDescription={"Muestra la concentración de sólidos disueltos. Un valor fuera de rango puede indicar acumulación de nutrientes o contaminación."}
        xAxisLabel={"TDS en el agua"}
      />
      <hr />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"temperatura_aire"}
        strokeColor={"#fa730c"}
        parameterLabel={"Temperatura en el aire"}
        parameterDescription={"Controla el calor ambiental alrededor del sistema. Cambios bruscos pueden afectar el crecimiento y la estabilidad general."}
        xAxisLabel={"Temperatura en el aire"}
      />
    </div>
  )
}


