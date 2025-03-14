import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/**<Button asChild>
      <Link href="/login">Login</Link>
    </Button> */
export function RoundHeaderCard() {
  return (
    <div className="w-full">
      <Card className="py-4">
        <CardHeader className="flex flex-row justify-between py-0 items-center">
          <CardTitle>
            Men's NCAA March Madness Tournament Bracket 2025
          </CardTitle>
          <ProfileHoverCard />
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

function ProfileHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className="cursor-pointer">
        <Button variant="link">
          <Link href={"https://www.mattbartchak.com"}>@mattbartchak</Link>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72 space-y-2">
        <div className="flex flex-row items-center space-x-4">
          <Avatar className="w-16 h-auto">
            <AvatarImage src="https://www.mattbartchak.com/images/profile.jpg" />
          </Avatar>
          <div>
            <p className="text-sm font-semibold">Matthew Bartchak</p>
            <p className="text-xs text-grays-500">March Madness Enthusiast</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          A <Link className="cursor-pointer hover:underline font-bold" href={"https://nextjs.org"}>Next.js</Link>
          -powered web app, styled with <Link className="cursor-pointer hover:underline font-bold" href={"https://tailwindcss.com"}>Tailwind </Link> and&nbsp;
          <Link className="cursor-pointer hover:underline font-bold" href={"https://ui.shadcn.com"}>shadcn/ui</Link>,&nbsp;
          delivering NCAA basketball bracket analysis driven by <Link className="cursor-pointer hover:underline font-bold" href={"https://barttorvik.com/#"}>BartTorvik&apos;s T-score data.</Link>
        </p>
      </HoverCardContent>
    </HoverCard>
  );
}