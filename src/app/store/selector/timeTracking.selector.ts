import { DefaultProjectorFn, MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { StateWithTime, TIME_FEATURE, TimeTrackerState } from "../state";

export const getCustomTimeTracker: MemoizedSelector<
    StateWithTime,
    TimeTrackerState
> = createFeatureSelector<TimeTrackerState>(TIME_FEATURE);

export const getTimeTracker: MemoizedSelector<
    StateWithTime,
    TimeTrackerState
> = createSelector(getCustomTimeTracker, (state: TimeTrackerState) => {
    return state;
})


