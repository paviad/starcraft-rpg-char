import { Effect } from './effects';

export interface TriggerCondition {
    use: string;
    which: string | string[];
    purpose?: string;
    circumstances?: string;
}

export type ConditionTreeAnd = TriggerCondition | ConditionTreeOr[];
export type ConditionTreeOr = ConditionTreeAnd[];

export interface TriggeredEffect {
    condition: ConditionTreeOr;
    effects: Effect[];
}
