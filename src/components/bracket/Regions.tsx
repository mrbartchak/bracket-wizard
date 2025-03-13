import { MatchupCard } from "@/components/bracket/MatchupCard"
import { ChampionshipCard } from "./ChampionshipCard";
import { matchups } from "@/data/teams";

export function EastRegion() {
  return (
    <main className="flex flex-row w-full items-center space-x-8">
      {/*Round 1*/}
      <div className="space-y-4">
        <MatchupCard matchup={matchups[0]} />
        <MatchupCard matchup={matchups[1]} />
        <MatchupCard matchup={matchups[2]} />
        <MatchupCard matchup={matchups[3]} />
        <MatchupCard matchup={matchups[4]} />
        <MatchupCard matchup={matchups[5]} />
        <MatchupCard matchup={matchups[6]} />
        <MatchupCard matchup={matchups[7]} />
      </div>
      <div className="flex flex-col h-full justify-between py-16">
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
      </div>
      <div className="flex flex-col h-full justify-between py-40">
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
      </div>
    </main>
  );
}

export function WestRegion() {
  return (
    <main className="flex flex-row w-full justify-end items-center space-x-8">
      {/*Round 1*/}
      <div className="flex flex-col h-full justify-between py-40">
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
      </div>
      <div className="flex flex-col h-full justify-between py-16">
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
      </div>
      <div className="space-y-4">
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
        <MatchupCard matchup={null} />
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