import { Team } from "@/types/bracket";
import Image from "next/image";

interface TeamCardProps {
  team: Team | null;
}

export function TeamCard({ team: Team }: TeamCardProps) {
  return (
    <main className="flex flex-row items-center p-2 space-x-2 hover:bg-gray-100 rounded">
      {Team?.logo && (
        <Image
          src={Team?.logo}
          alt={Team?.name ?? "TBD"}
          className="w-6 h-auto"
          width={32}
          height={32}
        />
      )}
      <p
        className="text-xs opacity-50 w-2"
      >
        {Team?.seed}
      </p>
      <p
        className="font-bold text-xs"
        style={{ color: Team ? Team.details?.color ?? "black" : "lightgray" }}
      >
        {Team?.name ?? "TBD"}
      </p>
    </main>
  );
}
