import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import StatCard from "@/components/dashboard/stat-card";
import EntityGraph from "@/components/dashboard/entity-graph";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { LandPlot, BrickWall, Rss, PencilRuler } from "lucide-react";

const Dashboard = () => {
  const cards = [
    {
      id: 1,
      name: "Total Areas",
      value: 108,
      description: "~ 8/day",
      icon: <LandPlot className="w-4 h-4" />,
    },
    {
      id: 2,
      name: "Total Projects",
      value: 323,
      description: "~ 15/day",
      icon: <BrickWall className="w-4 h-4" />,
    },
    {
      id: 1,
      name: "Total Blogs",
      value: 13,
      description: "~ 2/week",
      icon: <Rss className="w-4 h-4" />,
    },
    {
      id: 1,
      name: "Total Developers",
      value: 110,
      description: "~ 8/day",
      icon: <PencilRuler className="w-4 h-4" />,
    },
  ];
  const entityStats = [
    {
      name: "Areas",
      total: 108,
    },
    {
      name: "Developers",
      total: 110,
    },
    {
      name: "Blogs",
      total: 13,
    },
    {
      name: "Projects",
      total: 323,
    },
  ];
  const moderatorStats = [
    {
      id: 1,
      name: "Mushood Hanif",
      email: "mushood.hanif@fcproperties.ae",
      value: "+12 Areas",
      image: "https://ui.shadcn.com/avatars/01.png",
    },
    {
      id: 2,
      name: "Saboor Ahmed",
      email: "saboor.ahmed@fcproperties.ae",
      value: "+9 Projects",
      image: "https://ui.shadcn.com/avatars/02.png",
    },
    {
      id: 3,
      name: "Syed Tanveer",
      email: "syed.tanveer@fcproperties.ae",
      value: "+22 Developers",
      image: "https://ui.shadcn.com/avatars/03.png",
    },
    {
      id: 4,
      name: "Muaaz Ismail",
      email: "muaaz.ismail@fcproperties.ae",
      value: "+5 Blogs",
      image: "https://ui.shadcn.com/avatars/04.png",
    },
    {
      id: 5,
      name: "Mushood Hanif",
      email: "mushood.hanif@fcproperties.ae",
      value: "+3 Projects",
      image: "https://ui.shadcn.com/avatars/05.png",
    },
    {
      id: 6,
      name: "Aisha Khan",
      email: "aisha.khan@fcproperties.ae",
      value: "+7 Areas",
      image: "https://ui.shadcn.com/avatars/01.png",
    },
    {
      id: 7,
      name: "Omar Farooq",
      email: "omar.farooq@fcproperties.ae",
      value: "+10 Developers",
      image: "https://ui.shadcn.com/avatars/02.png",
    },
    {
      id: 8,
      name: "Fatima Zahra",
      email: "fatima.zahra@fcproperties.ae",
      value: "+8 Projects",
      image: "https://ui.shadcn.com/avatars/03.png",
    },
    {
      id: 9,
      name: "Ali Raza",
      email: "ali.raza@fcproperties.ae",
      value: "+6 Blogs",
      image: "https://ui.shadcn.com/avatars/04.png",
    },
    {
      id: 10,
      name: "Maryam Ahmed",
      email: "maryam.ahmed@fcproperties.ae",
      value: "+15 Areas",
      image: "https://ui.shadcn.com/avatars/05.png",
    },
    {
      id: 11,
      name: "Imran Siddiqui",
      email: "imran.siddiqui@fcproperties.ae",
      value: "+4 Developers",
      image: "https://ui.shadcn.com/avatars/01.png",
    },
    {
      id: 12,
      name: "Sara Naveed",
      email: "sara.naveed@fcproperties.ae",
      value: "+12 Blogs",
      image: "https://ui.shadcn.com/avatars/02.png",
    },
    {
      id: 13,
      name: "Kashif Malik",
      email: "kashif.malik@fcproperties.ae",
      value: "+9 Areas",
      image: "https://ui.shadcn.com/avatars/03.png",
    },
    {
      id: 14,
      name: "Nadia Hasan",
      email: "nadia.hasan@fcproperties.ae",
      value: "+11 Projects",
      image: "https://ui.shadcn.com/avatars/04.png",
    },
    {
      id: 15,
      name: "Zainab Ali",
      email: "zainab.ali@fcproperties.ae",
      value: "+3 Developers",
      image: "https://ui.shadcn.com/avatars/05.png",
    },
    {
      id: 16,
      name: "Bilal Akbar",
      email: "bilal.akbar@fcproperties.ae",
      value: "+10 Blogs",
      image: "https://ui.shadcn.com/avatars/01.png",
    },
    {
      id: 17,
      name: "Hira Shah",
      email: "hira.shah@fcproperties.ae",
      value: "+5 Areas",
      image: "https://ui.shadcn.com/avatars/02.png",
    },
    {
      id: 18,
      name: "Waqar Khan",
      email: "waqar.khan@fcproperties.ae",
      value: "+6 Projects",
      image: "https://ui.shadcn.com/avatars/03.png",
    },
    {
      id: 19,
      name: "Tariq Aziz",
      email: "tariq.aziz@fcproperties.ae",
      value: "+13 Developers",
      image: "https://ui.shadcn.com/avatars/04.png",
    },
    {
      id: 20,
      name: "Uzma Riaz",
      email: "uzma.riaz@fcproperties.ae",
      value: "+7 Blogs",
      image: "https://ui.shadcn.com/avatars/05.png",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-start justify-start space-y-5">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <StatCard key={card.id} card={card} />
        ))}
      </div>
      <div className="w-full h-full grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <EntityGraph data={entityStats} />
          </CardContent>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Additions</CardTitle>
            <CardDescription>
              You've added 176 entities this month.
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full max-h-[570px] overflow-auto flex flex-col items-start justify-start space-y-8">
            {moderatorStats.map((stat) => (
              <div key={stat.id} className="w-full flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={stat.image} alt="Avatar" />
                  <AvatarFallback>
                    {stat.name.split(" ")[0][0]}
                    {stat.name.split(" ")[1][0]}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {stat.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.email}</p>
                </div>
                <div className="ml-auto font-medium">{stat.value}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
