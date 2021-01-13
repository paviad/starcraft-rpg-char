export type Terran = 'terran';
export type TerranPsionic = 'terran-psionic';
export type BasicRace = Terran;
export type Race = Terran | TerranPsionic;

export type PsychicWrangler = 'psychic-wrangler';
export type BasicTelepath = 'basic-telepath';
export type AdvancedTelepath = 'advanced-telepath';
export type Telekinetic = 'telekinetic';
export type TerranPsionicType = PsychicWrangler | BasicTelepath | AdvancedTelepath | Telekinetic;

export interface RaceData {
    name: Race;
    cost: number;
}

const RaceCosts: { [key in BasicRace]: number } = {
    terran: 4,
};

export class BasicRaceData implements RaceData {
    cost: number;

    constructor(public name: BasicRace) {
        this.cost = RaceCosts[name];
    }
}

const TerranPsionicTypesCosts: { [key in TerranPsionicType]: number } = {
    'advanced-telepath': 9,
    'basic-telepath': 6,
    'psychic-wrangler': 2,
    telekinetic: 12,
};

export class TerranPsionicData implements RaceData {
    name = 'terran-psionic' as const;
    cost: number;

    constructor(public type: TerranPsionicType) {
        this.cost = 4 + TerranPsionicTypesCosts[type];
    }
}
