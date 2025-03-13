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
    <main className="w-full p-4">
      <div className="flex flex-row justify-between border">
        {/*East*/}
        <div className="flex flex-row items-center space-x-2">
          {/*Round 1*/}
          <div className="space-y-2">
            <MatchupCard matchup={matchup} />
            <MatchupCard matchup={matchup} />
            <MatchupCard matchup={matchup} />
            <MatchupCard matchup={matchup} />
            <MatchupCard matchup={matchup} />
            <MatchupCard matchup={matchup} />
            <MatchupCard matchup={matchup} />
            <MatchupCard matchup={matchup} />
          </div>
          <div className="flex flex-col h-full justify-between py-16">
            <MatchupCard matchup={null} />
            <MatchupCard matchup={null} />
            <MatchupCard matchup={null} />
            <MatchupCard matchup={null} />
          </div>
        </div>
        {/*West*/}
        <div>
          <MatchupCard matchup={matchup} />
          <MatchupCard matchup={matchup} />
          <MatchupCard matchup={matchup} />
          <MatchupCard matchup={matchup} />
          <MatchupCard matchup={matchup} />
          <MatchupCard matchup={matchup} />
          <MatchupCard matchup={matchup} />
          <MatchupCard matchup={matchup} />
        </div>
      </div>

      {/*South*/}
      {/*Midwest*/}
    </main>
  );
}