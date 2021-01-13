import { Abilities } from '../character-sheet';
import { Modifier } from '../modifier';
import { SpecialAbility } from '../special-ability';
import { coreCitizen } from './core-citizen';

type AbilityModifier = {
    [key in keyof Abilities]?: Modifier;
};

export interface Background {
    name: string;
    cost: Modifier;
    abilityScore: AbilityModifier;
    specialAbility: SpecialAbility[];
    wealth: Modifier;
    description?: string;
}

export const backgrounds: { [key: string]: Background } = {
    'core-citizen': coreCitizen,
};
