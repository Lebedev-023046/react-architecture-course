import type { ReactNode } from "react";

export const PokemonCard = ({
  name,
  action,
}: {
  name: string;
  action: ReactNode;
}) => {
  return (
    <div className="flex items-center justify-between p-3 mb-3 bg-white rounded-lg shadow">
      <span className="font-medium text-gray-800">{name}</span>
      <div>{action}</div>
    </div>
  );
};
