import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Daniel Cukier",
    email: "daniel@jamixir.org",
    role: "Core Developer",
    bio: "Experienced software engineer with deep expertise in distributed systems and functional programming. Passionate about bridging the gap between formal specifications and practical implementations.",
    avatar: "/lovable-uploads/8d8b04cd-7ec3-40d1-a6cb-cf9d0edd9ed7.png",
    github: "danicuki",
    twitter: "danicuki"
  },
  {
    name: "Baruch Fishman (Luke)", 
    email: "daiagi@jamixir.org",
    role: "Core Developer",
    bio: "Systems architect with expertise in fault-tolerant distributed systems. Brings extensive experience in building resilient, high-performance applications using Erlang/OTP.",
    avatar: "/lovable-uploads/765bd2c6-26e9-4df0-90f2-4320fbc5fbfd.png",
    github: "daiagi",
    twitter: "luke_fishman"
  }
];

export const Team = () => {
  return (
    <section id="team" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The developers bringing JAM to life in Elixir, combining protocol expertise with functional programming mastery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-border bg-card text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://twitter.com/${member.twitter}`} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};