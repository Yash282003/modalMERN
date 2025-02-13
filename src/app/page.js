import Tooltip from "@/components/Tooltip";
import FlowbiteModal from "@/components/FlowbiteModal";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <FlowbiteModal />
      <Tooltip/>
    </main>
  );
}
