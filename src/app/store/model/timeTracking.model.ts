

export interface TimeTrackingModel {
    title: string,
    timeframes: {
        daily: TimeCurrentPrevious,
        weekly: TimeCurrentPrevious,
        monthly:  TimeCurrentPrevious
    }
      
}

export interface TimeCurrentPrevious{
    current: number,
    previous: number
}