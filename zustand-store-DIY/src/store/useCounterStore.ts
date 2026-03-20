import { createStoreDIY } from "./zustand-diy";

type CounterState = {
	count: number;
	increment: () => void;
	decrement: () => void;
};

export const counterStore = createStoreDIY<CounterState>((set, get) => ({
	count: 0,
	increment: () =>
		set(() => {
			const { count } = get();
			return { count: count + 1 };
		}),
	decrement: () =>
		set(() => {
			const { count } = get();
			return { count: count - 1 };
		}),
}));
