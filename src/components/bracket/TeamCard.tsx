import { Team } from "@/types/bracket";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface TeamCardProps {
  team: Team | null;
  isSelected?: boolean;
  onSelect?: (team: Team | null) => void;
}

export function TeamCard({ team, isSelected, onSelect }: TeamCardProps) {
  const handleClick = () => {
    if (team && onSelect) {
      onSelect(team);
    }
  };

  return (
    <main
      className={`flex flex-row items-center h-10 p-1 space-x-2 rounded
        ${isSelected ? "bg-blue-100" : "hover:bg-gray-100"}`}
      onClick={handleClick}
    >
      {team?.logo ? (
        <Image
          src={team.logo}
          alt={team.name ?? "TBD"}
          className="w-6 h-auto my-1 ml-1 mr-3"
          width={32}
          height={32}
        />
      ) : (
        <Skeleton className="w-6 h-6 my-1 ml-1 mr-3 rounded-full" />
      )}

      {team ? (
        <>
          <p className="text-xs opacity-50 w-2">
        {team.seed ?? "-"}
          </p>
          <p
        className="font-semibold text-xs"
        style={{ color: team.details?.color ?? "black" }}
          >
        {team.name}
          </p>
        </>
      ) : (
        <Skeleton className="w-[75%] h-4 rounded" />
      )}
    </main>
  );
}
