export interface Action {
    type: string;
    payload: any;
}

export interface TypedAction<T> extends Action {
    type: string;
    payload: T;
}

export function props<T>(): T { return {} as T; }

export interface ActionCreator<T> {
    (payload: T): TypedAction<T>;
    type: string;
}

// tslint:disable-next-line: no-shadowed-variable
export function createAction<T>(type: string, props: T): ActionCreator<T> {
    const rc = (payload: T): TypedAction<T> => ({type, payload});
    rc.type = type;
    return rc;
}
