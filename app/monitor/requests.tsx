

async function getParameters() {
  try {
    const response = await fetch("https://")
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}\nResponse message: ${response.statusText}`)
    }
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    return null
  }
}

export { getParameters }

