import { CharacterSheet } from './character-sheet';

export type Modifier<T extends number | string> = T | ((sheet: CharacterSheet) => T);

export function getModifier<T extends number | string>(sheet: CharacterSheet, mod: Modifier<T>) {
    if (typeof (mod) === 'function') {
        return mod(sheet);
    } else {
        return mod;
    }
}
