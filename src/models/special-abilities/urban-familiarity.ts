import { gainAdvantage } from '../effects';
import { SpecialAbility } from './special-ability';

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
