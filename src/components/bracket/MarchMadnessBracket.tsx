'use client'

import { useState, useEffect } from "react";
import { Team } from "@/types/bracket";
import { Matchup } from "@/types/bracket";
import { Region, FinalFour, Championship } from "@/components/bracket/Regions";

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
            seed: Math.floor(team.team_id / 5) + 1,
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
    <main className="flex flex-col space-y-24 w-full h-full p-4">
      <div className="flex flex-row h-full space-x-52">
        <Region
          round1={matchups.slice(0, 8)}
          round2={null}
          sweet16={null}
          elite8={null}
        />
        <Region
          round1={matchups.slice(8, 16)}
          round2={null}
          sweet16={null}
          elite8={null}
          right={true}
        />
      </div>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex flex-row space-x-12 justify-center">
          <FinalFour />
          <Championship />
          <FinalFour />
        </div>
        <FinalFour />
      </div>
      <div className="flex flex-row h-full space-x-52">
        <Region
          round1={matchups.slice(16, 24)}
          round2={null}
          sweet16={null}
          elite8={null}
        />
        <Region
          round1={matchups.slice(24, 32)}
          round2={null}
          sweet16={null}
          elite8={null}
          right={true}
        />
      </div>
    </main>
  );
}