

async function getParameters(): Promise<AquariumRequest> {
  try {
    const response = await fetch("/api/getlast")
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

