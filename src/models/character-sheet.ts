export interface Abilities {
    strength: number;
    instinct: number;
    agility: number;
    fortitude: number;
    intelligence: number;
    willpower: number;
}

export interface Skills {
    athletics: number;
    computers: number;
    defensiveTraining: number;
    durability: number;
    endurance: number;
    influence: number;
    leadership: number;
    lore: number;
    medicine: number;
    melee: number;
    mentalTraining: number;
    perception: number;
    pilot: number;
    psionics: number;
    ranged: number;
    science: number;
    stealth: number;
    survival: number;
    tactics: number;
}

type Focus = { [K in keyof Skills]?: true };

export interface DerivedStats {
    maxhp: number;
    defense: number;
    toughness: number;
    resolve: number;
    morale: number;
    speed: number;
    shiftSpeed: number;
    damageThreshold: number;
    healingThreshold: number;
    bonusInitiative: number;
    damageResistance: number;
    psionicResistance: number;
    psiLevel: number;
}

export interface Validation {
    [string: string]: string;
}

export type PowerLevel = 'heroic' | 'advanced-heroic' | 'epic-heroic';

export interface CharacterSheet {
    creationStage: number;

    race?: string;
    powerLevel?: PowerLevel;
    startingLevel?: 1 | 5 | 10 | 20;
    level: number;
    credits: number;
    cp: number;
    skillPoints: number;

    // Abilities
    abilities: Abilities;

    // Terran Specific
    adaptabilityFocus?: keyof Skills;

    // Derived stats
    derivedStats: DerivedStats;

    // Skills
    skills: Skills;
    focusSkills: Focus;

    // Talents

    // Specializations

    // Gear

    // Validation Messages
    validation: Validation;
}

export const baseCharacterSheet: CharacterSheet = {
    creationStage: 0,

    level: 1,
    credits: 1000,
    cp: 25,
    skillPoints: 0,

    // Abilities
    abilities: {
        strength: 0,
        instinct: 0,
        agility: 0,
        fortitude: 0,
        intelligence: 0,
        willpower: 0,
    },

    // Derived stats
    derivedStats: {
        maxhp: 0,
        defense: 0,
        toughness: 0,
        resolve: 0,
        morale: 0,
        speed: 0,
        shiftSpeed: 0,
        damageThreshold: 0,
        healingThreshold: 0,
        bonusInitiative: 0,
        damageResistance: 0,
        psionicResistance: 0,
        psiLevel: 0,
    },

    // Skills
    skills: {
        athletics: 0,
        computers: 0,
        defensiveTraining: 0,
        durability: 0,
        endurance: 0,
        influence: 0,
        leadership: 0,
        lore: 0,
        medicine: 0,
        melee: 0,
        mentalTraining: 0,
        perception: 0,
        pilot: 0,
        psionics: 0,
        ranged: 0,
        science: 0,
        stealth: 0,
        survival: 0,
        tactics: 0,
    },

    focusSkills: {
    },

    validation: {},
};
