import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Dashboard from '@/components/Dashboard';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { cn } from '@/lib/utils';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ThemeProvider defaultTheme="system" storageKey="neuraops-theme">
      <div className="min-h-screen bg-background">
        <div className="flex h-screen overflow-hidden">
          <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
          <div className="flex flex-col flex-1 w-full overflow-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className={cn("flex-1 overflow-y-auto p-4 md:p-6", !sidebarOpen && "md:ml-16")}>
              <Dashboard />
            </main>
          </div>
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;