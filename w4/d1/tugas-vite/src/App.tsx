import ProfileCard from "@/components/ProfileCard";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 transition-colors">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <ProfileCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
