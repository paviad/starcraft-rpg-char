import { Action, ActionCreator, TypedAction } from './action';

type ActionReducer<S, T extends Action = Action> = (state: S, action: T, prevalidateOnly?: boolean) => S;

type ReducerFunction<S, P> = (state: S, payload: P, prevalidateOnly: boolean) => S;

interface On<S, T extends Action = Action> {
    reducer: ActionReducer<S, T>;
    types: string[];
}

export function on<S, P>(creator: ActionCreator<P>, reducer: ReducerFunction<S, P>): On<S, TypedAction<P>> {
    return {
        reducer: (s, a, p) => reducer(s, a.payload, p || false),
        types: [creator.type],
    };
}

export function createReducer<S>(initialState: S, validate: (s: S) => void, ...ons: On<S>[]): ActionReducer<S> {
    return (s, a) => {
        const r = ons.filter(o => o.types.indexOf(a.type) !== -1);
        if (r.length === 0) {
            return s;
        }
        return r.reduce((sacc, ri) => {
            const newState = ri.reducer(sacc, a, false);
            validate(newState);
            return newState;
        }, s);
    };
}
