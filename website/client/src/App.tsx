import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Taxonomy from "./pages/Taxonomy";
import DecisionEngine from "./pages/DecisionEngine";
import CognitiveModels from "./pages/CognitiveModels";
import About from "./pages/About";
import Prompts from "./pages/Prompts";

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="/taxonomy" component={Taxonomy} />
        <Route path="/decision-engine" component={DecisionEngine} />
        <Route path="/cognitive-models" component={CognitiveModels} />
        <Route path="/about" component={About} />
        <Route path="/prompts" component={Prompts} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
