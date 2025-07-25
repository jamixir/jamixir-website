import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Cpu, 
  Shield, 
  Network, 
  Zap, 
  Database, 
  GitBranch, 
  Activity, 
  FileText 
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "RISC-V PVM",
    description: "Polkadot Virtual Machine implementation with RISC-V architecture for deterministic execution"
  },
  {
    icon: Shield,
    title: "RingVRF",
    description: "Ring Verifiable Random Function for secure and anonymous randomness generation"
  },
  {
    icon: Zap,
    title: "ELVES",
    description: "Efficient Light Virtual Execution Subsystem for optimized runtime performance"
  },
  {
    icon: GitBranch,
    title: "Safrole + GRANDPA",
    description: "Block production and finality algorithms ensuring secure consensus"
  },
  {
    icon: Database,
    title: "Erasure Coding",
    description: "Data availability and recovery mechanisms for network resilience"
  },
  {
    icon: Network,
    title: "QUIC",
    description: "Modern transport protocol for fast, reliable network communication"
  },
  {
    icon: Activity,
    title: "In-core Parallelism",
    description: "Multi-core processing capabilities for enhanced throughput"
  },
  {
    icon: FileText,
    title: "Formal Specification",
    description: "Mathematical foundations translated into verifiable code"
  }
];

export const JAMFeatures = () => {
  return (
    <section id="features" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            JAM Building Blocks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the core components that make JAM a revolutionary protocol for decentralized computation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-border bg-card">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};