

interface AquariumRequest {
  parametersArray: EspParameters[]
}

interface EspParameters {
  distancia_cm: Number,
  humedad: Number,
  ph: Number,
  rele_estado: String,
  tds_ppm: Number,
  temperatura_aire: Number,
  timestamp: Date
}

