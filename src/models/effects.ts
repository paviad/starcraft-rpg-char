import { CharacterSheet } from './character-sheet';
import { Modifier } from './modifier';

export type GainAdvantage = 'gain-advantage';
export type HalfDuration = 'half-duration';

type RootProperties = keyof CharacterSheet;

export interface Modification<T extends number | string> {
    rootProperty: keyof CharacterSheet;
    modifier: Modifier<T>;
}

export type Effect =
    | GainAdvantage
    | HalfDuration
    | Modification<number>
    | Modification<string>
    ;

export const gainAdvantage = 'gain-advantage';
export const halfDuration = 'half-duration';
