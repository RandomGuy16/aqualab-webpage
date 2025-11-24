

interface AquariumRequest {
  parametersArray: EspParameters[]
}

interface EspParameters {
  ph: Number
  temperatura: Number
  altura: Number
  conductividadElectrica: Number
  tds: Number
  timestamp: Date
}

