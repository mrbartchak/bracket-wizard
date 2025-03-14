import { Matchup } from "@/types/bracket";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";

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
        </CardHeader>
        <Separator />
        <CardContent className="flex flex-row justify-between space-x-4">
          <div className="flex flex-1 flex-row items-center space-x-4">
            <p>{matchup?.team1?.name}</p>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-1 flex-row justify-end items-center space-x-4">
            <p>{matchup?.team2?.name}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}