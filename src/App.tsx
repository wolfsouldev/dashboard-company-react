import { Dashboard } from "./pages/dashboard/Dasboard";
import { TooltipProvider } from "./components/ui/tooltip";

export default function App() {
  return (
    <TooltipProvider>
      <Dashboard />
    </TooltipProvider>
  );
}
