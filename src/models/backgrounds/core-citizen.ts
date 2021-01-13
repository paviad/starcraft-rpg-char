import { contacts, urbanFamiliarity } from '../special-ability';
import { Background } from './backgrounds';

export const coreCitizen: Background = {
    name: 'Core Citizen',
    abilityScore: {
        agility: 1,
        intelligence: 1,
    },
    cost: 5,
    specialAbility: [
        contacts,
        urbanFamiliarity,
    ],
    wealth: 500,
    description: 'The character is from one of the core Confederate or Dominion planets. Being raised amongst high population ' +
        'urban centers, the character is wealthier and more educated than most others but has been raised deluded by the propaganda ' +
        'of their tyrannical galactic empire. Core Citizens have a wide variety of backgrounds and skill sets, and they can set out for ' +
        'military or academic professions.',
};
