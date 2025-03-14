import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";


export function RoundHeaderCard() {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>
        Men's NCAA March Madness Tournament Bracket 2025
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row justify-between px-18">
          <div>
            <p className="text-sm text-gray-500">Round 1</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Round 2</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Sweet 16</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Elite 8</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Sweet 16</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Round 2</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Round 1</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}