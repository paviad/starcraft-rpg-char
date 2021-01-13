import { CharacterSheet } from './character-sheet';

export type Modifier = number | ((sheet: CharacterSheet) => number);
