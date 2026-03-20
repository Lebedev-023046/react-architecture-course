import { useSyncExternalStore } from "react";

type SetStateAction<Value> =
	| ((state: Value) => Partial<Value>)
	| Partial<Value>;

type Listener<Value> = (state: Value, prevState: Value) => void;

type StoreApi<Value> = {
	getState: () => Value;
	getInitialState: () => Value;
	setState: (action: SetStateAction<Value>) => void;
	subscribe: (cb: Listener<Value>) => () => void;

	use(): Value;
	use<Selected>(selector: (state: Value) => Selected): Selected;
	use<Selected>(selector?: (state: Value) => Selected): Value | Selected;
};

type StoreCreator<Value> = (
	set: (action: SetStateAction<Value>) => void,
	get: () => Value,
) => Value;

const isObject = (state: unknown): state is Record<string, unknown> =>
	typeof state === "object" && state !== null;

export const createStoreDIY = <Value>(
	storeCreator: StoreCreator<Value>,
): StoreApi<Value> => {
	type Api = StoreApi<Value>;
	type GListener = Listener<Value>;

	let state: Value;
	const listeners: Set<GListener> = new Set<GListener>();

	const getState: Api["getState"] = () => state;

	const setState: Api["setState"] = (action: SetStateAction<Value>) => {
		const nextState = typeof action === "function" ? action(state) : action;
		if (!Object.is(nextState, state)) {
			const previousState = state;
			state = isObject(nextState)
				? Object.assign({}, state, nextState)
				: nextState;

			listeners.forEach((listener) => listener(state, previousState));
		}
	};

	const initalState = (state = storeCreator(setState, getState));
	const getInitialState: Api["getInitialState"] = () => initalState;

	const subscribe = (cb: GListener) => {
		listeners.add(cb);
		return () => listeners.delete(cb);
	};

	function use(): Value;
	function use<Selected>(selector: (state: Value) => Selected): Selected;
	function use<Selected>(
		selector?: (state: Value) => Selected,
	): Value | Selected {
		return useSyncExternalStore(subscribe, () =>
			selector ? selector(getState()) : getState(),
		);
	}

	return {
		getState,
		getInitialState,
		setState,
		subscribe,
		use,
	};
};
