import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { TimeTracking } from "src/app/store/action/timeTracking.action";
import { getTimeTracker } from "src/app/store/selector/timeTracking.selector";
import { StateWithTime } from "src/app/store/state";

@Injectable({
    providedIn: 'root'
})
export class TimeService {
    constructor(
        protected timeStore: Store<StateWithTime>,
        private actions$: Actions
    ){}

    getTimeTracker(){
        this.timeStore.dispatch(
            new TimeTracking()
        );
        return this.getTimeTrackerFromStore();
    }

    getTimeTrackerFromStore(){
        return this.timeStore.pipe(
            select(getTimeTracker)
        )
    }
}