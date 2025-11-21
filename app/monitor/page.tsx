"use client"
import { useState, useEffect } from "react"
import { getParameters } from "@/app/monitor/requests"


export default function Monitor() {
  const [parameters, setParameters] = useState<EspParameters>({
    Tds: 0,
    altura: 0,
    conductividadElectrica: 0,
    ph: 0,
    temperatura: 0
  })

  useEffect(() => {
    setInterval(async () => {
      const newParameters = await getParameters()
      setParameters(newParameters)
    })
  })

  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-start min-h-screen bg-cover bg-center">
        <div className="flex flex-row min-h-16 w-full py-16 px-8 items-center justify-center bg-white dark:bg-black sm:items-start">
          <div className="max-w-3xl bg-white dark:bg-black sm:items-start">
            <h1 className="max-w-3xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              P&aacute;gina de monitoreo
            </h1>
          </div>
          <div className="flex flex-row">
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-start">
          <span>{parameters.Tds.valueOf()}</span>
          <span>{parameters.altura.valueOf()}</span>
          <span>{parameters.conductividadElectrica.valueOf()}</span>
          <span>{parameters.ph.valueOf()}</span>
          <span>{parameters.temperatura.valueOf()}</span>
        </div>
      </main>
    </>
  )
}

