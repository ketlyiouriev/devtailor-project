// TYPES
import { ChartCard, CardType } from "@/src/types/statistics";
import { ContentType } from "recharts/types/component/Label";

// SHADCN COMPONENTS
import { Card, CardContent, CardHeader, CardTitle } from "src/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "src/components/ui/chart";

// RECHARTS COMPONENTS
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from "recharts";

type CustomBarLabelProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  value: number;
  payload: { name: string };
};

const CustomBarLabel = (props: CustomBarLabelProps) => {
  const { x, y, width, height, value, payload } = props;
  if (x === undefined || y === undefined || width === undefined || height === undefined) {
    console.log("missing required props, returning null!");
    return null;
  }

  const name = payload?.name || value || "";

  // position the label at the bottom of the bar
  const labelX = x + width / 2;
  const labelY = y + height - 20;

  return (
    <text
      x={labelX}
      y={labelY}
      textAnchor="start"
      dominantBaseline="middle"
      className="fill-white"
      fontSize={14}
      transform={`rotate(270, ${labelX}, ${labelY})`}
    >
      {name}
    </text>
  );
};

const StatisticsCard = (card: CardType) => {
  const isChartCard = (card: CardType): card is ChartCard => "chartData" in card;

  const barCount = isChartCard(card) ? card.chartData.length : 0;
  const minChartWidth = barCount * 60;

  const getChartConfig = (title: string) => {
    switch (title) {
      case "Top Manufacturers Sold last 30 days":
        return { value: { label: "Units Sold" } };
      case "Top Models Sold last 30 days":
        return { value: { label: "Units Sold" } };
      case "Top Sellers in last 30 days":
        return { value: { label: "Units Sold" } };
      case "Fastest Turnover Models":
        return { value: { label: "Days to Sell" } };
      default:
        return { value: { label: "Units" } };
    }
  };

  return isChartCard(card) ? (
    <Card className="!shadow-statistics-card">
      <CardHeader className="flex flex-row items-center">
        <CardTitle>{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="sm:overflow-visible overflow-x-auto">
          <div style={{ minWidth: `${minChartWidth}px` }} className="sm:!min-w-0 sm:w-full">
            <ChartContainer config={getChartConfig(card.title) satisfies ChartConfig} className="h-[353px] w-full">
              <BarChart data={card.chartData} accessibilityLayer margin={{ top: 10 }}>
                <CartesianGrid vertical={false} className="stroke-border" />
                <XAxis dataKey="name" fontSize={12} tick={false} tickLine={false} axisLine={false} />
                <YAxis dataKey="value" fontSize={12} tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent hideIndicator />} />
                <Bar dataKey="value" fill="currentColor" radius={4} className="fill-primary">
                  <LabelList dataKey="name" content={CustomBarLabel as ContentType} />
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : (
    <Card key={card.title} className="h-full gap-2 !shadow-statistics-card">
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{card.value}</div>
        <p className="text-xs text-muted-foreground">{card.additionalInfo}</p>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
