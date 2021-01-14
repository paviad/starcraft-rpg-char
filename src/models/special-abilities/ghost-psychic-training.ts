import { SpecialAbility } from './special-ability';

export const ghostPsychicTraining: SpecialAbility = {
    name: 'Ghost Psychic Training',
    effects: [
        {
            condition: [],
            effects: [
                {
                    rootProperty: 'psychicType',
                    modifier: 'controlled',
                }
            ]
        }
    ]
};
