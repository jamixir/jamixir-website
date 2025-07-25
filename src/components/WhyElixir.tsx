import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Smile, 
  Code 
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Built-in Concurrency + Async I/O",
    description: "Actor model with lightweight processes makes parallel computation natural and efficient",
    code: "# Spawn thousands of processes effortlessly\nTask.async_stream(work_packages, &process_package/1, max_concurrency: 1000)"
  },
  {
    icon: Shield,
    title: "Fault Tolerance from Erlang/OTP",
    description: "Let it crash philosophy with supervisor trees ensures system resilience",
    code: "# Supervisors restart failed processes\nchildren = [\n  {JAM.Validator.Supervisor, []},\n  {JAM.Network.Supervisor, []}\n]\nSupervisor.start_link(children, strategy: :one_for_one)"
  },
  {
    icon: Smile,
    title: "Productivity and Developer Experience",
    description: "Pattern matching, pipe operator, and immutability make complex logic readable",
    code: "%WorkPackage{extrinsics: extrinsics}\n|> validate_package()\n|> execute_transitions()\n|> merge_state()\n|> {:ok, result}"
  },
  {
    icon: Code,
    title: "Functional Programming Maps to JAM Specs",
    description: "Mathematical functions translate directly to Elixir functions with clear data flow",
    code: "# State transition function from JAM spec\ndef state_transition(σ, ρ, χ) do\n  σ\n  |> apply_block(ρ)\n  |> merge_reports(χ)\nend"
  }
];

export const WhyElixir = () => {
  return (
    <section id="why-elixir" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Elixir?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elixir's design philosophy aligns perfectly with JAM's requirements for concurrent, fault-tolerant, and mathematically precise systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{reason.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {reason.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <pre className="text-muted-foreground whitespace-pre-wrap">
                    {reason.code}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};