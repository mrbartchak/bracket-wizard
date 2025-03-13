export interface Team {
  name: string;
  seed: number;
  details?: TeamDetails;
}

export interface TeamDetails {
  color?: string;
  logo?: string;
}

export interface Matchup {
  team1: Team | null;
  team2: Team | null;
  winner?: Team;
}