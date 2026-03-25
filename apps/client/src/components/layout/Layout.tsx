import { type ReactNode } from "react";
import { Loader2 } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useProgressStore } from "@/store/progressStore";

export function Layout({ children }: { children: ReactNode }) {
  const progressLoading = useProgressStore((s) => s.loading);

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
        {progressLoading ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm"
            aria-busy="true"
            aria-live="polite"
          >
            <div className="flex items-center gap-3 rounded-lg border bg-card px-6 py-4 shadow-lg">
              <Loader2 className="h-6 w-6 animate-spin text-indigo-600" />
              <span className="text-sm font-medium text-foreground">Syncing progress…</span>
            </div>
          </div>
        ) : null}
      </div>
    </TooltipProvider>
  );
}
