import {AquariumRequest} from "@/app/models"

async function getParameters(): Promise<AquariumRequest> {
  try {
    const response = await fetch("/api/getlast")
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}\nResponse message: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    return { parametersArray: [] }
  }
}

export { getParameters }

