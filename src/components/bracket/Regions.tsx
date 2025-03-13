import { MatchupCard } from "@/components/bracket/MatchupCard"
import { Matchup } from "@/types/bracket"
import { Team } from "@/types/bracket";
import { ChampionshipCard } from "./ChampionshipCard";

const lehigh: Team = {
  name: "Lehigh",
  seed: 16,
  details: {
    logo: "lehigh-logo.png",
  }
};

const alabama: Team = {
  name: "Alabama",
  seed: 1,
  details: {
    logo: "alabama-logo.svg",
  }
};

const matchup: Matchup = {
  team1: alabama,
  team2: lehigh,
}

export function EastRegion() {
  return (
    <main className="flex flex-row w-full items-center space-x-8">
      {/*Round 1*/}
      <div className="space-y-4">
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
        <MatchupCard matchup={matchup} />
        <MatchupCard matchup={matchup} />
        <MatchupCard matchup={matchup} />
        <MatchupCard matchup={matchup} />
        <MatchupCard matchup={matchup} />
        <MatchupCard matchup={matchup} />
        <MatchupCard matchup={matchup} />
        <MatchupCard matchup={matchup} />
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
      <ChampionshipCard matchup={matchup}/>
    </main>
  )
}