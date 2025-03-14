import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface TournamentChampionCardProps {
  teamName?: string | null;
  teamLogo?: string | null;
}

const TournamentChampionCard: React.FC<TournamentChampionCardProps> = ({ teamName, teamLogo }) => {
  return (
    <Card className="w-64">
      <CardHeader className='justify-center text-xl'>
        <CardTitle>
          NCAA Champion
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {teamLogo ? (
          <img src={teamLogo} alt={`${teamName} logo`} className="h-16 w-16 object-contain" />
        ) : (
          <Skeleton className="h-16 w-16 rounded-full" />
        )}
        {teamName ? (
          <p className="font-semibold text-lg">{teamName}</p>
        ) : (
          <Skeleton className="w-[90%] h-4" />
        )}
      </CardContent>
    </Card>
  );
};

export default TournamentChampionCard;