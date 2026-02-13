import { Player } from "@/components/player";
import Table from "@/components/table";

export default function Room() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen w-full content-center bg-foreground">

      <Table />

      <Player />
    </div>
  );
}
