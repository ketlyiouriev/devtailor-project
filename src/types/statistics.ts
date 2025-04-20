export type InfoCard = { title: string; value: string; additionalInfo: string };
export type ChartCard = { title: string; chartData: { name: string; value: number }[] };

export type CardType = InfoCard | ChartCard;
