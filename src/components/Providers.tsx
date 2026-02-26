"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WhatsAppBouncer from "@/components/WhatsAppBouncer";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-w-0 overflow-x-hidden">
          <WhatsAppBouncer />
          {children}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
