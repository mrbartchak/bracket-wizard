import { Team } from "@/types/bracket";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface TeamCardProps {
  team: Team | null;
}

export function TeamCard({ team: Team }: TeamCardProps) {
  return (
    <main className="flex flex-row items-center h-10 p-1 space-x-2 hover:bg-gray-100 rounded">
      {Team?.logo ? (
        <Image
          src={Team.logo}
          alt={Team.name ?? "TBD"}
          className="w-6 h-auto my-1 ml-1 mr-3"
          width={32}
          height={32}
        />
      ) : (
        <Skeleton className="w-6 h-6 my-1 ml-1 mr-3 rounded-full" />
      )}

      {Team ? (
        <>
          <p className="text-xs opacity-50 w-2">
        {Team.seed ?? "-"}
          </p>
          <p
        className="font-semibold text-xs"
        style={{ color: Team.details?.color ?? "black" }}
          >
        {Team.name}
          </p>
        </>
      ) : (
        <Skeleton className="w-[75%] h-4 rounded" />
      )}
    </main>
  );
}
