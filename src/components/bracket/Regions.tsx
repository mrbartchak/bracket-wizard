import { MatchupCard } from "@/components/bracket/MatchupCard"
import { ChampionshipCard } from "./ChampionshipCard";
import { Matchup } from "@/types/bracket";

interface RegionProps {
  round1: Matchup[] | null;
  round2?: Matchup[] | null;
  sweet16?: Matchup[] | null;
  elite8?: Matchup[] | null;
  right?: boolean;
}

export function Region({ round1, right }: RegionProps) {
  return (
    <main className="flex w-full">
    {right ?
      <RightRegion round1={round1} />
        :
      <LeftRegion round1={round1} />}
    </main>
  );
}

function LeftRegion({ round1 }: RegionProps) {
  return (
    <main className="flex flex-row w-full items-stretch justify-around space-x-4">
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
      <div className="flex flex-col h-full justify-evenly space-y-18">
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
      </div>
      <div className="flex flex-col h-full justify-evenly space-y-44 -ml-20">
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
      </div>
      <div className="flex flex-col h-full justify-center -ml-40">
        <MatchupCard matchup={null} />
      </div>
    </main>
  );
}

function RightRegion({ round1 }: RegionProps) {
  return (
    <main className="flex flex-row w-full items-stretch justify-around space-x-4">
      <div className="flex flex-col h-full justify-center -mr-40">
        <MatchupCard matchup={null} />
      </div>
      <div className="flex flex-col h-full justify-evenly space-y-44 -mr-20">
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
      </div>
      <div className="flex flex-col h-full justify-evenly space-y-18">
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
      </div>
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