import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { TimeTracking, TimeTrackingFail, TimeTrackingSuccess, TimeTracking_, TimeTypeActions, } from '../action/timeTracking.action';
import { Observable, of } from 'rxjs';
import { CustomOcc } from 'src/app/core/occ-adapater';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';



@Injectable()
export class TimeTrackingEffect {
    constructor(
        private actions$: Actions,
        private timeAdapter: CustomOcc
    ) { }

    
    @Effect()
    getTime$: Observable< 
    | TimeTrackingSuccess
    | TimeTrackingFail
    > = this.actions$.pipe(
        ofType<TimeTracking>(
            TimeTracking_
        ),
        map(( action ) => action),
        mergeMap(( payload ) => {

            return this.timeAdapter.getTimeTracking().pipe(
                map(( time ) => {
                    return new TimeTrackingSuccess(time);
                }),
                catchError(( error: HttpResponse<HttpErrorResponse> ) =>
                    of(new TimeTrackingFail(error.statusText))
                )
            );
        })
    )

}

