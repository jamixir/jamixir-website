import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";

const examples = [
  {
    id: "block",
    title: "Block Structure",
    math: "β = ⟨P_H, P_E, P_T⟩",
    elixir: `defmodule JAM.Block do
  @type t :: %__MODULE__{
    header: JAM.Header.t(),
    extrinsic: JAM.Extrinsic.t(), 
    tickets: [JAM.Ticket.t()]
  }
  
  defstruct [:header, :extrinsic, :tickets]
  
  def new(header, extrinsic, tickets) do
    %__MODULE__{
      header: header,
      extrinsic: extrinsic,
      tickets: tickets
    }
  end
end`
  },
  {
    id: "state-transition",
    title: "State Transition Function", 
    math: "Υ: (σ, B) ↦ σ'",
    elixir: `defmodule JAM.StateTransition do
  @doc "State transition function from JAM graypaper"
  def add_block(%State{} = state, %Block{} = block) do
     timeslot_   = get_timeslot(h)
     entropy_ = get_new_entropy(h, state.timeslot, state.entropy)
     # ...
  end
  
  defp get_new_entropy(h, timeslot, %Entropy{} = entropy) do

  end
  
  defp get_timeslot(h) do
    h.timeslot
  end
end`
  },
  {
    id: "merkle",
    title: "State Merklization",
    math: "H(σ) = BLAKE2b(encode(σ))",
    elixir: `defmodule JAM.Merkle do
  def merkleize_state(state) do
    state
    |> JAM.Codec.encode()
    |> then(&:crypto.hash(:blake2b, &1))
  end
  
  def build_tree(leaves) when is_list(leaves) do
    leaves
    |> Enum.chunk_every(2)
    |> Enum.map(&hash_pair/1)
    |> case do
      [root] -> root
      nodes -> build_tree(nodes)
    end
  end
  
  defp hash_pair([left, right]) do
    :crypto.hash(:blake2b, left <> right)
  end
  defp hash_pair([single]), do: single
end`
  },
  {
    id: "work-package",
    title: "Work Package Definition",
    math: "ω = ⟨c, l, s, x⟩",
    elixir: `defmodule JAM.WorkPackage do
  @type t :: %__MODULE__{
    core_index: non_neg_integer(),
    length: non_neg_integer(),
    segment_root: binary(),
    extrinsics: [JAM.Extrinsic.t()]
  }
  
  defstruct [:core_index, :length, :segment_root, :extrinsics]
  
  def validate(%__MODULE__{} = package) do
    with :ok <- validate_core_index(package.core_index),
         :ok <- validate_length(package.length),
         :ok <- validate_segment_root(package.segment_root),
         :ok <- validate_extrinsics(package.extrinsics) do
      {:ok, package}
    end
  end
end`
  }
];

export const CodeExamples = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="code" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Code as Explanation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how mathematical formulas from the JAM Graypaper translate directly into clean, readable Elixir code
          </p>
        </div>

        <Tabs defaultValue="block" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {examples.map((example) => (
              <TabsTrigger key={example.id} value={example.id} className="text-sm">
                {example.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {examples.map((example) => (
            <TabsContent key={example.id} value={example.id}>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {example.title}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(example.elixir)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    <span className="font-mono text-sm bg-muted px-2 py-1 rounded">
                      {example.math}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="text-sm font-mono text-muted-foreground overflow-x-auto whitespace-pre">
                      {example.elixir}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};