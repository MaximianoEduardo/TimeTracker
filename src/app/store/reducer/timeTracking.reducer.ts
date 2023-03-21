import { TimeTracking_, TimeTracking_FAIL, TimeTracking_SUCCESS, TimeTypeActions } from "../action/timeTracking.action";
import { TimeTrackerState } from "../state";

export const initialState: TimeTrackerState = {
    timeTracker: {
        title: "",
        timeframes: {
            daily: {
                current: 0,
                previous: 0
            },
            weekly: {
                current: 0,
                previous: 0
            },
            monthly: {
                current: 0,
                previous: 0
            },
        }
    },
}

export function timeReducer(
    state = initialState,
    action: TimeTypeActions
): TimeTrackerState {
    switch (action.type) {
        case TimeTracking_FAIL:
        case TimeTracking_SUCCESS:
            return{
                ...state,
                timeTracker: action.payload
            }
        default:
            return state;
    }
}