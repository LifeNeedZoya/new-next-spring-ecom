import { ProtectRoute } from "@/lib/protect-route";
function Dashboard() {
  return <div>This won't be shown unless authenticated</div>;
}
export default ProtectRoute(Dashboard);
