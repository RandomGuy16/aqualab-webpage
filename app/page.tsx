"use client"
import { useState, useEffect } from "react"
import { getParameters } from "@/app/requests"
import AquariumParametersGraph from "@/app/ParametersGraph"
import { Cormorant } from "next/font/google";
import { AquariumRequest, EspParameters } from "@/app/models"
import { requestNotificationPermission, sendNotification } from "./notifications";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export default function Monitor() {
  const [aquariumRequest, setAquariumRequest] = useState<AquariumRequest>({
    parametersArray: []
  })
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>("default")
  const [notifiedTds, setNotifiedTds] = useState<boolean>(false)
  const [notifiedPh, setNotifiedPh] = useState<boolean>(false)
  const [notifiedTemperature, setNotifiedTemperature] = useState<boolean>(false)

  // request notification permission
  useEffect(() => {
    const foo = async () => {
      if ("Notification" in window) {
        await requestNotificationPermission()
        setNotificationPermission(Notification.permission);
      }
    }
    foo()
  }, [])

  const handleGetAquariumRequest = async () => {
    try {
      const newParameters = await getParameters()
      const parametersArr: EspParameters[] = []

      for (let i in newParameters) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        parametersArr.push(newParameters[i])
      }

      // check to send a notification
      if (!notifiedTemperature &&
        (22 > parametersArr[0]?.temperatura_aire || parametersArr[0]?.temperatura_aire > 30)
      ) {
        sendNotification("Aqualab: Temperatura anormal!", { body: "La temperatura no esta en el rango adecuado" })
        setNotifiedTemperature(true)
      } else setNotifiedTemperature(false)

      if (!notifiedPh &&
        (6.5 > parametersArr[0]?.ph || parametersArr[0]?.ph > 7.5)
      ) {
        sendNotification("Aqualab: PH anormal en el agua!", { body: "El PH no esta en el rango adecuado" })
        setNotifiedPh(true)
      } else setNotifiedPh(false)

      if (!notifiedTds &&
        (1300 > parametersArr[0]?.tds_ppm || parametersArr[0]?.tds_ppm > 1500)) {
        sendNotification("Aqualab: TDS anormal en el agua!", { body: "El TDS no esta en el rango adecuado" })
        setNotifiedTds(true)
      } else setNotifiedTds(false)

      setAquariumRequest({
        parametersArray: parametersArr
      })
    } catch (error) {
      console.error(error)
      setAquariumRequest({
        parametersArray: []
      })
    }
  }

  useEffect(() => {
    handleGetAquariumRequest()
    const intervalId = setInterval(async () => {
      handleGetAquariumRequest()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-start min-h-screen bg-cover bg-center">
        <div className="relative flex flex-row min-h-16 w-full h-48 bg-[url('/acuaponia_iot_fz.jpg')] bg-cover bg-center p-8 items-center justify-center bg-colorBg1 dark:bg-black sm:items-start">
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative select-none x-10 max-w-3xl sm:items-start text-center text-colorBg1 dark:text-(--bg-2)">
            <h1 className={`max-w-3xl text-4xl drop-shadow-xl leading-10 tracking-tight ${cormorant.variable} font-bold`}>
              P&aacute;gina de monitoreo
            </h1>
            <br />
            <p className="text-shadow-lg">Los par&aacute;metros en tiempo real del cultivo acuap&oacute;nico</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col w-full items-center justify-start bg-(--bg-1)">
          <div className="flex flex-1 flex-col w-full lg:w-3/4 p-8 rounded-2">
            <AquariumParametersGraph parametersArray={aquariumRequest.parametersArray} />
          </div>
        </div>
      </main>
    </>
  )
}

