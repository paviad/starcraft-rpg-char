import { createAction, props } from './action';
import { PowerLevel, Skills } from './character-sheet';
import { BasicRace, TerranPsionicType } from './race';

export const choosePowerLevel = createAction('choose campaign power level', props<PowerLevel>());
export const chooseStartingLevel = createAction('choose starting level', props<1 | 5 | 10 | 20>());
export const buyBasicRace = createAction('buy basic race', props<BasicRace>());
export const buyTerranPsionic = createAction('buy race', props<TerranPsionicType>());
export const chooseAdaptabilityFocus = createAction('choose adaptability focus', props<keyof Skills>());

export const allActions = [
    choosePowerLevel,
    chooseStartingLevel,
    buyBasicRace,
    buyTerranPsionic,
    chooseAdaptabilityFocus,
];
