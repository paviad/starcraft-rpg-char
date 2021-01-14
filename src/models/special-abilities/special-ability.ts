import { TriggeredEffect } from '../trigger';
import { contacts } from './contacts';
import { rogueGhost } from './rogue-ghost';
import { sanctionedGhost } from './sanctioned-ghost';
import { urbanFamiliarity } from './urban-familiarity';

export interface SpecialAbility {
    name: string;
    effects?: TriggeredEffect[];
}

export const specialAbilities = {
    'contacts': contacts,
    'urban-familiarity': urbanFamiliarity,
    'sanctioned-ghost': sanctionedGhost,
    'rogue-ghost': rogueGhost,
};
