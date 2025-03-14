import { MarchMadnessBracket } from "@/components/bracket/MarchMadnessBracket";
import { RoundHeaderCard } from "@/components/bracket/RoundHeaderCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-[1536px] mx-auto p-4 space-y-8">
      <RoundHeaderCard />
      <MarchMadnessBracket />
    </div>
  );
}
