export interface Team {
  name: string;
  seed: number;
  logo?: string;
  details?: TeamDetails;
  stats?: TeamStats;
}

export interface TeamDetails {
  color?: string;
  logo?: string;
}

export interface TeamStats {
  name: string;
  tRank: number;
  conference: string;
  record: string;
  adjOE: number;
  oeRank: number;
  adjDE: number;
  deRank: number;
  barthag: number;
}

export interface Matchup {
  team1: Team | null;
  team2: Team | null;
  winner?: Team;
}