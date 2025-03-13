import { MatchupCard } from "@/components/bracket/MatchupCard"
import { Matchup } from "@/types/bracket";
import { Team } from "@/types/bracket";
import { EastRegion } from "@/components/bracket/Regions";

export function MarchMadnessBracket() {
  return (
    <main className="w-full h-full p-4 border-4">
      <div className="flex flex-row h-full justify-between border">
        <EastRegion />
        {/*West*/}
        <div>
          <MatchupCard matchup={null} />
          <MatchupCard matchup={null} />
          <MatchupCard matchup={null} />
          <MatchupCard matchup={null} />
          <MatchupCard matchup={null} />
          <MatchupCard matchup={null} />
          <MatchupCard matchup={null} />
          <MatchupCard matchup={null} />
        </div>
      </div>

      {/*South*/}
      {/*Midwest*/}
    </main>
  );
}