import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { WorkPage } from "@/pages/work";
import { ServicesPage } from "@/pages/services";
import { PricingPage } from "@/pages/pricing";
import { BlogPage } from "@/pages/blog";
import { ContactPage } from "@/pages/contact";
import { useState } from "react";

const queryClient = new QueryClient();

function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999, fontFamily: "sans-serif" }}>
      {open && (
        <div style={{ position: "absolute", bottom: "75px", right: "0", width: "290px", background: "#1a1a1a", borderRadius: "14px", boxShadow: "0 8px 32px rgba(0,0,0,0.5)", overflow: "hidden" }}>
          <div style={{ background: "#25D366", padding: "16px", color: "white" }}>
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>💬 Chat with us</div>
            <div style={{ fontSize: "12px", opacity: 0.85, marginTop: "2px" }}>We reply instantly on WhatsApp</div>
          </div>
          <div style={{ padding: "16px" }}>
            <div style={{ background: "#2a2a2a", borderRadius: "8px", padding: "12px", color: "#ccc", fontSize: "13px", marginBottom: "12px" }}>
              👋 Hi! How can we help you? Send us a message below.
            </div>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              style={{ width: "100%", padding: "10px", boxSizing: "border-box", background: "#2a2a2a", border: "1px solid #333", borderRadius: "6px", color: "white", fontSize: "13px", outline: "none", marginBottom: "10px" }}
            />
            <button
              onClick={() => {
                const msg = message || "Hi! I visited your website and would like to know more.";
                window.open(`https://wa.me/2348107311900?text=${encodeURIComponent(msg)}`, "_blank");
              }}
              style={{ width: "100%", background: "#25D366", color: "white", border: "none", padding: "10px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", fontSize: "14px" }}
            >
              Open WhatsApp Chat →
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        style={{ background: "#25D366", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 20px rgba(37,211,102,0.6)", border: "none" }}
        aria-label="Open WhatsApp chat"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.874L.057 23.776a.75.75 0 00.92.92l5.902-1.478A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.522-5.168-1.428l-.37-.22-3.835.96.977-3.835-.242-.384A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </button>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/work" component={WorkPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
        <WhatsAppWidget />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
