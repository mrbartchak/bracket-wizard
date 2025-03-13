import { Team } from "@/types/bracket";
import { Matchup } from "@/types/bracket";

const teams: Team[] = [
  { name: "Alabama", seed: 1 },
  { name: "Arizona", seed: 2 },
  { name: "Baylor", seed: 3 },
  { name: "Duke", seed: 4 },
  { name: "Gonzaga", seed: 5 },
  { name: "Houston", seed: 6 },
  { name: "Illinois", seed: 7 },
  { name: "Kansas", seed: 8 },
  { name: "Kentucky", seed: 9 },
  { name: "Louisville", seed: 10 },
  { name: "Michigan", seed: 11 },
  { name: "Michigan State", seed: 12 },
  { name: "North Carolina", seed: 13 },
  { name: "Ohio State", seed: 14 },
  { name: "Oklahoma", seed: 15 },
  { name: "Oregon", seed: 16 },
  { name: "Purdue", seed: 17 },
  { name: "Tennessee", seed: 18 },
  { name: "Texas", seed: 19 },
  { name: "UCLA", seed: 20 },
  { name: "USC", seed: 21 },
  { name: "Villanova", seed: 22 },
  { name: "Virginia", seed: 23 },
  { name: "Wisconsin", seed: 24 },
  { name: "Xavier", seed: 25 },
  { name: "Yale", seed: 26 },
  { name: "Florida", seed: 27 },
  { name: "Indiana", seed: 28 },
  { name: "Iowa", seed: 29 },
  { name: "Maryland", seed: 30 },
  { name: "Memphis", seed: 31 },
  { name: "Miami", seed: 32 },
  { name: "Minnesota", seed: 33 },
  { name: "Missouri", seed: 34 },
  { name: "Nebraska", seed: 35 },
  { name: "Notre Dame", seed: 36 },
  { name: "Oklahoma State", seed: 37 },
  { name: "Penn State", seed: 38 },
  { name: "Pittsburgh", seed: 39 },
  { name: "Rutgers", seed: 40 },
  { name: "Seton Hall", seed: 41 },
  { name: "Syracuse", seed: 42 },
  { name: "Texas A&M", seed: 43 },
  { name: "Texas Tech", seed: 44 },
  { name: "Utah", seed: 45 },
  { name: "Vanderbilt", seed: 46 },
  { name: "Wake Forest", seed: 47 },
  { name: "Washington", seed: 48 },
  { name: "West Virginia", seed: 49 },
  { name: "Wichita State", seed: 50 },
  { name: "Arkansas", seed: 51 },
  { name: "Auburn", seed: 52 },
  { name: "Butler", seed: 53 },
  { name: "Cincinnati", seed: 54 },
  { name: "Clemson", seed: 55 },
  { name: "Colorado", seed: 56 },
  { name: "Creighton", seed: 57 },
  { name: "Davidson", seed: 58 },
  { name: "Dayton", seed: 59 },
  { name: "Georgetown", seed: 60 },
  { name: "Georgia", seed: 61 },
  { name: "Iowa State", seed: 62 },
  { name: "Kansas State", seed: 63 },
  { name: "Lehigh", seed: 64 },
];

const matchups = teams.reduce((acc, team, index) => {
  if (index % 2 === 0) {
    let matchup: Matchup = {
      team1: teams[index],
      team2: teams[index + 1],
    }
    acc.push(matchup);
  }
  return acc;
}, [] as Matchup[]);

export { teams, matchups };