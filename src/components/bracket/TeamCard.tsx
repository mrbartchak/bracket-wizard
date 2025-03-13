import { Team } from "@/types/bracket";

interface TeamCardProps {
  team: Team | null;
}

export function TeamCard({ team: Team }: TeamCardProps) {
  return (
    <main className="flex flex-row items-center space-x-2">
      {/*Team?.seed && (
        <Badge
          className="w-10 text-center font-bold"
          style={{ background: Team?.details?.color ?? "black" }}
        >
          {Team?.seed}
        </Badge>
      )*/}
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