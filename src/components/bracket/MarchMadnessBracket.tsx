import { MatchupCard } from "@/components/bracket/MatchupCard"
import { Matchup } from "@/types/bracket";
import { Team } from "@/types/bracket";

const lehigh: Team = {
  name: "Lehigh",
  seed: 16,
  details: {
    color: "#5C2807"
  }
};

const alabama: Team = {
  name: "Alabama",
  seed: 1,
  details: {
    color: "#850230"
  }
};

const matchup: Matchup = {
  team1: alabama,
  team2: lehigh,
}


export function MarchMadnessBracket() {
  return (
    <main className="flex flex-row items-center space-x-4">
      <div className="space-y-4">
        <MatchupCard matchup={matchup} />
        <MatchupCard matchup={null} />
      </div>
          <div className="space-y-4">
          <MatchupCard matchup={null} />
      </div>
      <div className="space-y-4">
          <MatchupCard matchup={null} />
          <MatchupCard matchup={null} />
      </div>
    </main>
  );
}