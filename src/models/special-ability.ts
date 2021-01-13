import { gainAdvantage, halfDuration } from './effects';
import { TriggeredEffect } from './trigger';

export interface SpecialAbility {
    name: string;
    effects?: TriggeredEffect[];
}

export const contacts: SpecialAbility = {
    name: 'Contacts',
    effects: [
        {
            condition: [{ use: 'skill', which: 'influence', purpose: 'gather information' }],
            effects: [gainAdvantage]
        },
        {
            condition: [{ use: 'skill', which: 'influence', purpose: 'gather information', circumstances: 'in city with population over 100,000' }],
            effects: [halfDuration]
        },
    ]
};

export const urbanFamiliarity: SpecialAbility = {
    name: 'Urban Familiarity',
    effects: [
        {
            condition: [{
                use: 'skill',
                which: ['acrobatics', 'athletics', 'perception', 'stealth'],
                circumstances: 'in urban environment',
            }],
            effects: [gainAdvantage]
        },
    ]
};

export const specialAbilities: { [key: string]: SpecialAbility } = {
    'contacts': contacts,
    'urban-familiarity': urbanFamiliarity,
};
