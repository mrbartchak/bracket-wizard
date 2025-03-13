import { Matchup } from "@/types/bracket";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { TeamCard } from "@/components/bracket/TeamCard";
import { match } from "assert";

interface ChampionshipCardProps {
  matchup: Matchup | null;
}

export function ChampionshipCard({ matchup }: ChampionshipCardProps) {
  return (
    <div>
      <Card className="w-96 h-36 py-3 drop-shadow-2xl">
        <CardHeader>
          <CardTitle className="text-bold text-xl text-center">
            National Championship
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row justify-between space-x-4">
          <div className="flex flex-1 flex-row items-center space-x-4">
            <Image
              src={"/images/" + matchup?.team1?.details?.logo}
              alt="Championship Team 1 Logo"
              width={48} height={48}
            />
            <p>{matchup?.team1?.name}</p>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-1 flex-row justify-end items-center space-x-4">
            <p>{matchup?.team2?.name}</p>
            <Image
              src={"/images/" + matchup?.team2?.details?.logo}
              alt="Championship Team 2 Logo"
              width={48} height={48}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}