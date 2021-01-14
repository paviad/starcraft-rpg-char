import { SpecialAbility } from './special-ability';

export const sanctionedGhost: SpecialAbility = {
    name: 'Sanctioned Ghost',
    effects: [
        {
            condition: [],
            effects: [
                {
                    rootProperty: 'credits',
                    modifier: 0,
                },
                {
                    rootProperty: 'sanctionedGhostCredits',
                    modifier: 8000,
                }
            ]
        }
    ]
};
