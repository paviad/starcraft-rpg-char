import { Background } from './backgrounds';

export const ghost: Background = {
    name: 'Ghost',
    prerequisites: {
        'race': 'terran-psionic',
    },
    cost: 6,
    abilityScore: {
        instinct: 1,
        agility: 1,
        willpower: 1,
    },
    bonusTalent: 'jaded',
    specialAbilities: ['ghost-psychic-training'],
    specialAbilitiesChoice: ['sanctioned-ghost', 'rogue-ghost'],
    description: 'Ghosts are the secret soldiers, spies, and assassins of the Confederacy, and later Dominion. They are recruited ' +
        'from the ranks of psionic children taken from their homes when they are young and then conditioned to be the ultimate killing ' +
        'machines for their governments. These shadowy figures use stealth technology and psionic powers to infiltrate any obstacle ' +
        'and exterminate their targets with cold precision.',
};
