"use client"
import { useState, useEffect } from "react"
import { getParameters } from "@/app/monitor/requests"
import AquariumParametersGraph from "./ParametersGraph"


export default function Monitor() {
  const [aquariumRequest, setAquariumRequest] = useState<AquariumRequest>({
    parametersArray: [
      // Add more EspParameters as needed
    ],
  })

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const newParameters = await getParameters()

      for (let i in newParameters) {
        console.log(newParameters[i])
      }

      setAquariumRequest(newParameters)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

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

