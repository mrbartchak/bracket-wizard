import { Matchup } from "@/types/bracket";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

interface ChampionshipCardProps {
  matchup: Matchup | null;
}

export function ChampionshipCard({ matchup }: ChampionshipCardProps) {
  return (
    <div className="">
      <Card className="w-96 h-36 py-3 drop-shadow-2xl">
        <CardHeader>
          <CardTitle className="text-bold text-xl text-center">
            National Championship
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="flex flex-row items-center justify-between space-x-4">
          <div className="flex flex-1 flex-row items-center space-x-4">
            {matchup?.team1?.logo ? (
              <Image 
                src={matchup.team1.logo} 
                alt={`${matchup.team1.name} logo`} 
                width={32} 
                height={32} 
              />
            ) : (
              <Skeleton className="h-8 w-8 rounded-full" />
            )}
            {matchup?.team1?.name ? (
              <p>{matchup.team1.name}</p>
            ) : (
              <Skeleton className="h-6 w-24" />
            )}
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-1 flex-row justify-end items-center space-x-4">
            {matchup?.team2?.name ? (
              <p>{matchup.team2.name}</p>
            ) : (
              <Skeleton className="h-6 w-24" />
            )}
            {matchup?.team2?.logo ? (
              <Image 
                src={matchup.team2.logo} 
                alt={`${matchup.team2.name} logo`} 
                width={32} 
                height={32} 
              />
            ) : (
              <Skeleton className="h-8 w-8 rounded-full" />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}