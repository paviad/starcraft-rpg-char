import { Abilities } from '../character-sheet';
import { Modifier } from '../modifier';
import { coreCitizen } from './core-citizen';
import { ghost } from './ghost';

type AbilityModifier = {
    [key in keyof Abilities]?: Modifier<number>;
};

export interface Background {
    name: string;
    prerequisites?: { [key: string]: string };
    cost: Modifier<number>;
    abilityScore: AbilityModifier;
    abilityScoreChoice?: AbilityModifier;
    specialAbilities: string[];
    specialAbilitiesChoice?: string[];
    bonusTalent?: string;
    wealth?: Modifier<number>;
    description?: string;
}

export const backgrounds = {
    'core-citizen': coreCitizen,
    'ghost': ghost,
};
