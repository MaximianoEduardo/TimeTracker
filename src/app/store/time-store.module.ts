import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { TIME_FEATURE } from "./state";
import { timeReducer } from "./reducer/timeTracking.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TimeTrackingEffect } from "./effect/timeTracking.effect";

@NgModule({
    imports:[
        CommonModule,
        StoreModule.forFeature(TIME_FEATURE, timeReducer),
        EffectsModule.forFeature([ TimeTrackingEffect, ])
    ]
})
export class CustomTimeStoreModule {}