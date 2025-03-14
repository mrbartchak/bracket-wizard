'use client'

import { useState, useEffect } from "react";
import { Team } from "@/types/bracket";
import { Matchup } from "@/types/bracket";
import { EastRegion, WestRegion, FinalFour, Championship } from "@/components/bracket/Regions";

export function MarchMadnessBracket() {

  const [teams, setTeams] = useState<Team[]>([]);
  const [matchups, setMatchups] = useState<Matchup[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("/api/teams");
        const data = await response.json();
        
        if (data.teams) {
          const mappedTeams = data.teams.map((team: any) => ({
            name: team.team_name,
            seed: team.team_id,
            logo: team.team_logo,
          }));
          setTeams(mappedTeams);
        } else {
          console.error("Error fetching teams");
        }
      } catch (err) {
        console.error("Error fetching teams", err);
      }
    };

    fetchTeams();
  }, []);

  useEffect(() => {
    console.log(teams);

    const generateMatchups = () => {
      const newMatchups = [];
      if (teams) {
        for (let i = 0; i < teams.length; i += 2) {
          newMatchups.push({
            team1: teams[i],
            team2: teams[i + 1],
            winner: undefined,
          });
        }
      }
      setMatchups(newMatchups);
    };

    generateMatchups();
  }, [teams]);

  return (
    <main className="w-full h-full p-4">
      <div className="flex flex-row h-full justify-between">
        <EastRegion
          round1={matchups.slice(0, 8)}
          round2={null}
          sweet16={null}
          elite8={null}
        />
        <FinalFour />
        <WestRegion
          round1={matchups.slice(8, 16)}
          round2={null}
          sweet16={null}
          elite8={null}
        />
      </div>
      <Championship />
      <div className="flex flex-row h-full justify-between">
        <EastRegion
          round1={matchups.slice(16, 24)}
          round2={null}
          sweet16={null}
          elite8={null}
        />
        <FinalFour />
        <WestRegion
          round1={matchups.slice(24, 32)}
          round2={null}
          sweet16={null}
          elite8={null}
        />
      </div>
    </main>
  );
}