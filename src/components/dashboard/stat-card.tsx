import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CardProps {
  card: {
    id: number;
    name: string;
    value: number;
    description: string;
    icon: React.ReactNode;
  };
}

const StatCard = ({ card }: CardProps) => {
  return (
    <Card key={card.id}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{card.name}</CardTitle>
        {card.icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-primary">{card.value}</div>
        <p className="text-xs text-muted-foreground">{card.description}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
