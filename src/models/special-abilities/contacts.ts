import { gainAdvantage, halfDuration } from '../effects';
import { SpecialAbility } from './special-ability';

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
