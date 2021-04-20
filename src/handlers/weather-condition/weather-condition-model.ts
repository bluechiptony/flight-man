export interface WeatherCondition {
  weatherCondidtionId: string;
  conditionStart?: Date;
  destination: any;
  conditionEnd?: Date;
  temperature: number;
  humidity?: number;
  rainMeasure: number;
  cloudMeasure: number;
}
