

export interface AquariumRequest {
  parametersArray: EspParameters[]
}

export interface EspParameters {
  distancia_cm: number,
  humedad: number,
  ph: number,
  rele_estado: string,
  tds_ppm: number,
  temperatura_aire: number,
  timestamp: Date
}

