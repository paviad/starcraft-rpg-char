import { assertAllCasesCovered } from '../assert-all-cases-covered';
import { buyBasicRace, buyTerranPsionic, chooseAdaptabilityFocus, choosePowerLevel, chooseStartingLevel } from './build-actions';
import { baseCharacterSheet, CharacterSheet, PowerLevel, Skills } from './character-sheet';
import { BasicRace, BasicRaceData, TerranPsionicData, TerranPsionicType } from './race';
import { createReducer, on } from './reducer';

export const reducer = createReducer(
    baseCharacterSheet,
    validateSheet,
    on(choosePowerLevel, reduceChoosePowerLevel),
    on(chooseStartingLevel, reduceChooseStartingLevel),
    on(buyBasicRace, reduceBuyBasicRace),
    on(buyTerranPsionic, reduceBuyTerranPsionic),
    on(chooseAdaptabilityFocus, reduceChooseAdaptibilityFocus),
);

export function reduceChoosePowerLevel(sheet: CharacterSheet, payload: PowerLevel, prevalidateOnly: boolean): CharacterSheet {
    if (sheet.powerLevel) {
        throw new Error('Campaign power level already set');
    }

    if (prevalidateOnly) {
        return sheet;
    }

    const newSheet: CharacterSheet = {
        ...sheet,
        powerLevel: payload,
    };

    return newSheet;
}

export function reduceChooseStartingLevel(sheet: CharacterSheet, payload: 1 | 5 | 10 | 20, prevalidateOnly: boolean): CharacterSheet {
    if (!sheet.powerLevel) {
        throw new Error('Must choose power level first');
    }

    if (sheet.startingLevel) {
        throw new Error('Starting level already set');
    }

    if (prevalidateOnly) {
        return sheet;
    }

    const newSheet: CharacterSheet = {
        ...sheet,
        startingLevel: payload,
    };

    const plStatsDic: { [key in PowerLevel]: [number, number] } = {
        'heroic': [4, 25],
        'advanced-heroic': [5, 32],
        'epic-heroic': [6, 40],
    };

    const p = plStatsDic[sheet.powerLevel];

    newSheet.cp = p[1] + p[0] * payload;

    const startingCredits: { [key in typeof payload]: number } = {
        1: 1000,
        5: 6000,
        10: 25000,
        20: 240000,
    };

    newSheet.credits = startingCredits[payload];

    return newSheet;
}

export function reduceBuyBasicRace(sheet: CharacterSheet, payload: BasicRace, prevalidateOnly: boolean): CharacterSheet {
    if (sheet.race) {
        throw new Error('Race already set');
    }

    if (prevalidateOnly) {
        return sheet;
    }

    const newSheet = {
        ...sheet
    };

    const raceData = new BasicRaceData(payload);

    if (newSheet.cp < raceData.cost) {
        throw new Error('Not enough cp');
    }

    newSheet.cp -= raceData.cost;
    newSheet.race = raceData.name;

    switch (payload) {
        case 'terran':
            newSheet.abilities = {
                agility: 2,
                fortitude: 2,
                instinct: 2,
                intelligence: 2,
                strength: 2,
                willpower: 2,
            };
            break;
        default:
            assertAllCasesCovered(payload);
    }

    return newSheet;
}

export function reduceBuyTerranPsionic(sheet: CharacterSheet, payload: TerranPsionicType, prevalidateOnly: boolean): CharacterSheet {
    if (sheet.race) {
        throw new Error('Race already set');
    }

    if (prevalidateOnly) {
        return sheet;
    }

    const newSheet = {
        ...sheet
    };

    const raceData = new TerranPsionicData(payload);

    if (newSheet.cp < raceData.cost) {
        throw new Error('Not enough cp');
    }

    newSheet.cp -= raceData.cost;
    newSheet.race = raceData.name;

    const psiLevelPerType: { [key in TerranPsionicType]: number } = {
        'psychic-wrangler': 1,
        'basic-telepath': 1,
        'advanced-telepath': 2,
        telekinetic: 3,
    };

    newSheet.derivedStats.psiLevel = psiLevelPerType[payload];

    newSheet.abilities = {
        agility: 2,
        fortitude: 2,
        instinct: 2,
        intelligence: 2,
        strength: 2,
        willpower: 2,
    };

    return newSheet;
}

export function reduceChooseAdaptibilityFocus(sheet: CharacterSheet, payload: keyof Skills, prevalidateOnly: boolean): CharacterSheet {
    if (sheet.race !== 'terran' && sheet.race !== 'terran-psionic') {
        throw new Error('Can only choose adaptibility focus after picking terran or terran-psionic');
    }

    const newSheet: CharacterSheet = {
        ...sheet,
        adaptabilityFocus: payload,
    };

    return newSheet;
}

function validateSheet(sheet: CharacterSheet) {
    sheet.validation = {};

    if (!sheet.race) {
        sheet.validation.race = 'No race selected';
    }

    if (sheet.cp > sheet.abilities.intelligence) {
        sheet.validation.cp = `Too many leftover cp (${sheet.cp}) max is (${sheet.abilities.intelligence})`;
    }

    if ((sheet.race === 'terran' || sheet.race === 'terran-psionic') && !sheet.adaptabilityFocus) {
        sheet.validation.adaptabilityFocus = 'Adaptability focus not chosen';
    }

    if (!sheet.startingLevel) {
        sheet.validation.startingLevel = 'Must choose starting level';
    }

    if (!sheet.powerLevel) {
        sheet.validation.powerLevel = 'Must choose campaign power level';
    }

    sheet.creationStage = 1;
}
