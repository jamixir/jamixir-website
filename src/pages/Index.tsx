import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { JAMFeatures } from "@/components/JAMFeatures";
import { WhyElixir } from "@/components/WhyElixir";
import { CodeExamples } from "@/components/CodeExamples";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <JAMFeatures />
        <WhyElixir />
        <CodeExamples />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
