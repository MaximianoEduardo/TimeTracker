
export const TIME_FEATURE = 'customTimer';


export interface StateWithTime {
    [TIME_FEATURE]: TimeTrackerState
}

export interface TimeTrackerState {
    timeTracker: {
        title:      string;
        timeframes: Timeframes;
    }
}
export interface TimeTracker {
    title:      string;
    timeframes: Timeframes;
}

export interface Timeframes {
    daily:   Daily;
    weekly:  Daily;
    monthly: Daily;
}

export interface Daily {
    current:  number;
    previous: number;
}