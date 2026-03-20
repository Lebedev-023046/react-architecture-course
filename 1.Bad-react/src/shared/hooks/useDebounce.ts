import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			if (timerId) {
				clearTimeout(timerId);
			}
		};
	}, [value, delay]);

	return debouncedValue;
};
