import { buyBasicRace, buyTerranPsionic, chooseAdaptabilityFocus, choosePowerLevel, chooseStartingLevel } from './models/build-actions';
import { reducer } from './models/build-reducers';
import { baseCharacterSheet, CharacterSheet } from './models/character-sheet';

let a: CharacterSheet = {
    ...baseCharacterSheet,
};

a = reducer(a, choosePowerLevel('heroic'));
a = reducer(a, chooseStartingLevel(5));
a = reducer(a, buyTerranPsionic('telekinetic'));
a = reducer(a, chooseAdaptabilityFocus('melee'));

console.log(a);

export * from './models/action';
export * from './models/build-actions';
export * from './models/build-reducers';
export * from './models/character-sheet';
export * from './models/race';
export * from './models/reducer';
