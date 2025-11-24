"use client"
import { useState, useEffect } from "react"
import { getParameters } from "@/app/monitor/requests"
import AquariumParametersGraph from "./ParametersGraph"


export default function Monitor() {
  const [aquariumRequest, setAquariumRequest] = useState<AquariumRequest>({
    parametersArray: [
      {
        ph: 7.2,
        temperatura: 25.5,
        altura: 30.1,
        conductividadElectrica: 1200,
        tds: 600,
        timestamp: new Date('2024-06-01T10:00:00Z'),
      },
      {
        ph: 6.8,
        temperatura: 24.8,
        altura: 29.7,
        conductividadElectrica: 1180,
        tds: 590,
        timestamp: new Date('2024-06-01T11:00:00Z'),
      },
      {
        ph: 7.0,
        temperatura: 26.0,
        altura: 31.0,
        conductividadElectrica: 1220,
        tds: 610,
        timestamp: new Date('2024-06-01T12:00:00Z'),
      },
      {
        ph: 7.4,
        temperatura: 25.2,
        altura: 30.5,
        conductividadElectrica: 1190,
        tds: 595,
        timestamp: new Date('2024-06-01T13:00:00Z'),
      },
      {
        ph: 7.1,
        temperatura: 25.8,
        altura: 30.8,
        conductividadElectrica: 1210,
        tds: 605,
        timestamp: new Date('2024-06-01T14:00:00Z'),
      },
      {
        ph: 6.9,
        temperatura: 24.9,
        altura: 29.9,
        conductividadElectrica: 1175,
        tds: 585,
        timestamp: new Date('2024-06-01T15:00:00Z'),
      },
      {
        ph: 7.3,
        temperatura: 25.6,
        altura: 30.3,
        conductividadElectrica: 1205,
        tds: 602,
        timestamp: new Date('2024-06-01T16:00:00Z'),
      },
      {
        ph: 7.0,
        temperatura: 25.0,
        altura: 30.0,
        conductividadElectrica: 1185,
        tds: 590,
        timestamp: new Date('2024-06-01T17:00:00Z'),
      },
      {
        ph: 7.5,
        temperatura: 26.2,
        altura: 31.2,
        conductividadElectrica: 1230,
        tds: 615,
        timestamp: new Date('2024-06-01T18:00:00Z'),
      },
      {
        ph: 6.7,
        temperatura: 24.5,
        altura: 29.5,
        conductividadElectrica: 1160,
        tds: 580,
        timestamp: new Date('2024-06-01T19:00:00Z'),
      }
      // Add more EspParameters as needed
    ],
  })

  // useEffect(() => {
  //   setInterval(async () => {
  //     const newParameters = await getParameters()
  //     setParameters(newParameters)
  //   })
  // }, [])

  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-start min-h-screen bg-cover bg-center">
        <div className="flex flex-row min-h-16 w-full p-8 items-center justify-center bg-colorBg1 dark:bg-black sm:items-start">
          <div className="max-w-3xl sm:items-start">
            <h1 className="max-w-3xl text-4xl text-center font-semibold leading-10 tracking-tight text-colorAccent1 dark:text-colorAccent2">
              P&aacute;gina de monitoreo
            </h1>
            <br />
            <p>Los par&aacute;metros en tiempo real del acuario :)</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col w-full items-center justify-start">
          <div className="flex flex-1 flex-col w-full lg:w-3/4 p-8 rounded-2">
            <AquariumParametersGraph parametersArray={aquariumRequest.parametersArray} />
          </div>
        </div>
      </main>
    </>
  )
}

