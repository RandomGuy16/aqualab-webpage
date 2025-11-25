

async function getParameters(): Promise<AquariumRequest> {
  try {
    const response = await fetch("https://us-central1-aqualab-b1032.cloudfunctions.net/api/getLast?limit=10")
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}\nResponse message: ${response.statusText}`)
    }
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    return { parametersArray: [] }
  }
}

export { getParameters }

