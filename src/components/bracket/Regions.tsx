import { MatchupCard } from "@/components/bracket/MatchupCard"
import { ChampionshipCard } from "./ChampionshipCard";
import { matchups } from "@/data/teams";
import { Matchup } from "@/types/bracket";

interface RegionProps {
  round1: Matchup[] | null;
  round2: Matchup[] | null;
  sweet16: Matchup[] | null;
  elite8: Matchup[] | null;
}

export function EastRegion({ round1, round2, sweet16, elite8 }: RegionProps) {
  return (
    <main className="flex flex-row w-full items-center space-x-8">
      {/*Round 1*/}
      <div className="space-y-4">
        <MatchupCard matchup={round1 && round1[0] ? round1[0] : null} />
        <MatchupCard matchup={round1 && round1[1] ? round1[1] : null} />
        <MatchupCard matchup={round1 && round1[2] ? round1[2] : null} />
        <MatchupCard matchup={round1 && round1[3] ? round1[3] : null} />
        <MatchupCard matchup={round1 && round1[4] ? round1[4] : null} />
        <MatchupCard matchup={round1 && round1[5] ? round1[5] : null} />
        <MatchupCard matchup={round1 && round1[6] ? round1[6] : null} />
        <MatchupCard matchup={round1 && round1[7] ? round1[7] : null} />
      </div>
      <div className="flex flex-col h-full justify-between py-16">
        <MatchupCard matchup={round2 && round2[0] ? round2[0] : null} />
        <MatchupCard matchup={round2 && round2[1] ? round2[1] : null} />
        <MatchupCard matchup={round2 && round2[2] ? round2[2] : null} />
        <MatchupCard matchup={round2 && round2[3] ? round2[3] : null} />
      </div>
      <div className="flex flex-col h-full justify-between py-40">
        <MatchupCard matchup={sweet16 && sweet16[0] ? sweet16[0] : null} />
        <MatchupCard matchup={sweet16 && sweet16[1] ? sweet16[1] : null} />
      </div>
    </main>
  );
}

export function WestRegion({ round1, round2, sweet16, elite8 }: RegionProps) {
  return (
    <main className="flex flex-row w-full justify-end items-center space-x-8">
      {/*Round 1*/}
      <div className="flex flex-col h-full justify-between py-40">
        <MatchupCard matchup={sweet16 && sweet16[1] ? sweet16[1] : null} />
        <MatchupCard matchup={sweet16 && sweet16[0] ? sweet16[0] : null} />
      </div>
      <div className="flex flex-col h-full justify-between py-16">
        <MatchupCard matchup={round2 && round2[3] ? round2[3] : null} />
        <MatchupCard matchup={round2 && round2[2] ? round2[2] : null} />
        <MatchupCard matchup={round2 && round2[1] ? round2[1] : null} />
        <MatchupCard matchup={round2 && round2[0] ? round2[0] : null} />
      </div>
      <div className="space-y-4">
        <MatchupCard matchup={round1 && round1[7] ? round1[7] : null} />
        <MatchupCard matchup={round1 && round1[6] ? round1[6] : null} />
        <MatchupCard matchup={round1 && round1[5] ? round1[5] : null} />
        <MatchupCard matchup={round1 && round1[4] ? round1[4] : null} />
        <MatchupCard matchup={round1 && round1[3] ? round1[3] : null} />
        <MatchupCard matchup={round1 && round1[2] ? round1[2] : null} />
        <MatchupCard matchup={round1 && round1[1] ? round1[1] : null} />
        <MatchupCard matchup={round1 && round1[0] ? round1[0] : null} />
      </div>
    </main>
  );
}

export function FinalFour() {
  return (
    <main className="flex flex-col justify-center">
      <MatchupCard matchup={null} />
    </main>
  );
}

export function Championship() {
  return (
    <main className="flex flex-row justify-center">
      <ChampionshipCard matchup={null}/>
    </main>
  )
}