import { useState, useEffect } from "react";
import { Team, Matchup } from "@/types/bracket";
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
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(matchup?.winner || null);

  useEffect(() => {
    setSelectedTeam(matchup?.winner || null);
  }, [matchup]);

  const handleWinnerSelect = (team: Team | null) => {
    if (team && selectedTeam && team.name === selectedTeam.name) {
      setSelectedTeam(null);
    }
    else if (team) {
      setSelectedTeam(team);
    }
  };

  return (
    <div>
      <Card className="w-52 p-0 drop-shadow-lg rounded-md">
        <CardContent className="p-0">
          <TeamCard 
            team={matchup?.team1 ?? null}
            isSelected={matchup?.team1 ? selectedTeam?.name === matchup?.team1?.name : undefined}
            onSelect={handleWinnerSelect}
          />
          <Separator />
          <TeamCard
            team={matchup?.team2 ?? null}
            isSelected={matchup?.team2 ? selectedTeam?.name === matchup?.team2?.name : undefined}
            onSelect={handleWinnerSelect}
          />
        </CardContent>
      </Card>
    </div>
  )
}