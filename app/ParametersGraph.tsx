import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';
import { useDeviceType } from "@/app/useDeviceType";
import { EspParameters, AquariumRequest } from "@/app/models";
import ParameterGraphTooltip from "@/app/ParameterGraphTooltip";

interface ParameterGraphProps {
  parametersArray: EspParameters[]
  dataKey: string
  strokeColor: string
  parameterLabel: string
  parameterDescription: string
  xAxisLabel: string
  minRecommended: number
  maxRecommended: number
}

function ParameterGraph(
  {
    parametersArray,
    dataKey,
    strokeColor,
    parameterLabel,
    parameterDescription,
    xAxisLabel,
    minRecommended,
    maxRecommended
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
          <Tooltip content={ParameterGraphTooltip} />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey={dataKey.toString()} stroke={strokeColor.toString()} dot={false} />

          {minRecommended !== 0 && (
            <ReferenceLine
              y={minRecommended}
              stroke={`${strokeColor.toString()}`}
              strokeDasharray="3 3"
              label={{ value: `Min: ${minRecommended}`, position: 'insideBottomRight', fill: `${strokeColor.toString()}` }}
            />
          )}

          {maxRecommended !== 0 && (
            <ReferenceLine
              y={maxRecommended}
              stroke={`${strokeColor.toString()}`}
              strokeDasharray="3 3"
              label={{ value: `Max: ${maxRecommended}`, position: 'insideTopRight', fill: `${strokeColor.toString()}` }}
            />
          )}
        </LineChart>
      </div>
    </div>
  )
}


export default function AquariumParametersGraph({ parametersArray }: AquariumRequest) {
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
        parameterLabel={"Altura del agua en la pecera (cm)"}
        parameterDescription={"Mide qué tan lleno está el tanque. Cuando se acerca al límite, indica riesgo de rebalse y necesidad de ajuste."}
        xAxisLabel={"Altura del agua antes de revalsar"}
        minRecommended={10}
        maxRecommended={40}
      />
      <hr />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"humedad"}
        strokeColor={"#6491ed"}
        parameterLabel={"Humedad del aire (porcentaje de Humedad Relativa: RH)"}
        parameterDescription={"Refleja la cantidad zde vapor presente en el ambiente. Ayuda a detectar cambios que pueden afectar las plantas o la evaporación del sistema."}
        xAxisLabel={"Humedad del aire"}
        minRecommended={0}
        maxRecommended={0}
      />
      <hr />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"ph"}
        strokeColor={"#836eff"}
        parameterLabel={"PH en el agua"}
        parameterDescription={"Indica qué tan ácida o alcalina está el agua. Mantener un pH estable es clave para la salud de peces y plantas."}
        xAxisLabel={"PH en el agua"}
        minRecommended={6.5}
        maxRecommended={7.5}
      />
      <hr />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"tds_ppm"}
        strokeColor={"#2de070"}
        parameterLabel={"TDS en el agua (ppm)"}
        parameterDescription={"Muestra la concentración de sólidos disueltos. Un valor fuera de rango puede indicar acumulación de nutrientes o contaminación."}
        xAxisLabel={"TDS en el agua"}
        minRecommended={1300}
        maxRecommended={1500}
      />
      <hr />
      <ParameterGraph
        parametersArray={parametersArray}
        dataKey={"temperatura_aire"}
        strokeColor={"#fa730c"}
        parameterLabel={"Temperatura en el aire (C°)"}
        parameterDescription={"Controla el calor ambiental alrededor del sistema. Cambios bruscos pueden afectar el crecimiento y la estabilidad general."}
        xAxisLabel={"Temperatura en el aire"}
        minRecommended={22}
        maxRecommended={30}
      />
    </div>
  )
}


