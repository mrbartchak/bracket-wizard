import { Matchup } from "@/types/bracket";
import {
  Card,
  CardContent
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { TeamCard } from "@/components/bracket/TeamCard";

interface MatchupCardProps {
  matchup: Matchup | null;
}

export function MatchupCard({ matchup }: MatchupCardProps) {
  return (
    <div>
      <Card className="w-52 p-0 drop-shadow-lg rounded-md">
        <CardContent className="p-0">
          <TeamCard team={matchup?.team1 ?? null} />
          <Separator />
          <TeamCard team={matchup?.team2 ?? null} />
        </CardContent>
      </Card>
    </div>
  )
}