import { useEffect, useState } from "react";

export const useAsync = <T>(callback: () => Promise<T>) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await callback();

				if (!data) {
					setData(null);
					setError(null);

					throw new Error(`HTTP error`);
				}

				setData(data);
			} catch (e) {
				if (e instanceof Error) {
					console.log({ e });
					setError(e?.message ?? "Network error");
					setData(null);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [callback]);

	return { loading, error, data };
};
