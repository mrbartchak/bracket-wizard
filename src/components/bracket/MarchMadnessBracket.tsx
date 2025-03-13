import { MatchupCard } from "@/components/bracket/MatchupCard"
import { Matchup } from "@/types/bracket";
import { Team } from "@/types/bracket";
import { EastRegion, WestRegion, FinalFour, Championship } from "@/components/bracket/Regions";

export function MarchMadnessBracket() {
  return (
    <main className="w-full h-full p-4">
      <div className="flex flex-row h-full justify-between">
        <EastRegion />
        <FinalFour />
        <WestRegion />
      </div>
      <Championship />
      <div className="flex flex-row h-full justify-between">
        <EastRegion />
        <FinalFour />
        <WestRegion />
      </div>
    </main>
  );
}