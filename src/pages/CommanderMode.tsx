
import { MissionBegins } from "@/components/commander/MissionBegins";
import { RoomAwakens } from "@/components/commander/RoomAwakens";
import { CombatEvolution } from "@/components/commander/CombatEvolution";
import { SystemControl } from "@/components/commander/SystemControl";
import { WhyKaal } from "@/components/commander/WhyKaal";

export default function CommanderMode() {
  return (
    <div className="pt-20">
      <MissionBegins />
      <RoomAwakens />
      <CombatEvolution />
      <SystemControl />
      <WhyKaal />
    </div>
  );
}
