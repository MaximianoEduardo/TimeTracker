import { Action } from '@ngrx/store';
import { TimeTrackingModel } from '../model/timeTracking.model';

export const TimeTracking_ = "TimeTracking"
export const TimeTracking_SUCCESS = "TimeTracking SUCCESS"
export const TimeTracking_FAIL = "TimeTracking FAIL"

export class TimeTracking implements Action {
    readonly type = TimeTracking_;
    constructor() { }
}

export class TimeTrackingSuccess implements Action {
    readonly type = TimeTracking_SUCCESS;
    constructor(public payload: TimeTrackingModel[]) { }
}

export class TimeTrackingFail implements Action {
    readonly type = TimeTracking_FAIL;
    constructor(public payload: any) { }
}

export type TimeTypeActions = TimeTracking | TimeTrackingSuccess | TimeTrackingFail;