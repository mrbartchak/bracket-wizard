import { Team } from "@/types/bracket";
import { Badge } from "@/components/ui/badge"

interface TeamCardProps {
  team: Team | null;
}

export function TeamCard({ team: Team }: TeamCardProps) {
  return (
    <main className="flex flex-row space-x-2">
      {Team?.seed && (
        <Badge
          className="w-8 text-center font-bold"
          style={{ background: Team?.details?.color ?? "black" }}
        >
          {Team?.seed}
        </Badge>
      )}
      <p
        className="font-bold"
        style={{ color: Team ? Team.details?.color ?? "black" : "lightgray" }}
      >
        {Team?.name ?? "TBD"}
      </p>
    </main>
  );
}