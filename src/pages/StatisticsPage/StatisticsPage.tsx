// TYPES
import { InfoCard, ChartCard } from "src/types/statistics";

// COMPONENTS
import { StatisticsCard } from "src/components";

const StatisticsPage = () => {
  const infoCards: InfoCard[] = [
    { title: "Total Listings For Sale", value: "2,200,000", additionalInfo: "+20.1% from last month" },
    { title: "Cars Sold last 30 days", value: "23,231", additionalInfo: "+20.1% from last month" },
    { title: "New listings 30 days", value: "+12,234", additionalInfo: "+19% from last month" },
    { title: "Countries", value: "9", additionalInfo: "+2 since last month" },
    { title: "Total Listings in Database", value: "3,200,000", additionalInfo: "+20.1% from last 24h" },
    { title: "Cars Sold last last week", value: "789", additionalInfo: "+20.1% from last month" },
    { title: "Sellers in database", value: "+12,234", additionalInfo: "+19% from last month" },
    { title: "Marketplaces", value: "9", additionalInfo: "+2 since last month" },
  ];
  const chartCards: ChartCard[] = [
    {
      title: "Top Manufacturers Sold last 30 days",
      chartData: [
        { name: "Toyota", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Ford", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Chevrolet", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Honda", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Nissan", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Hyundai", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Volkswagen", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Volvo", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "BMW", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Audi", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Porsche", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Lexus", value: Math.floor(Math.random() * 5000) + 1000 },
      ],
    },
    {
      title: "Top Models Sold last 30 days",
      chartData: [
        { name: "Mondeo", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Focus", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Fiesta", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Fusio", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Kuga", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Puma", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "EcoSport", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Ranger", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Everest", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Raptor", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Bronco", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Explorer", value: Math.floor(Math.random() * 5000) + 1000 },
      ],
    },
    {
      title: "Top Sellers in last 30 days",
      chartData: [
        { name: "Mari", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Kaspar", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Jürgen", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Andres", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Jaak", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Tarmo", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Emma", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Kristel", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Kadri", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Sander", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Siim", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Lenna", value: Math.floor(Math.random() * 5000) + 1000 },
      ],
    },
    {
      title: "Fastest Turnover Models",
      chartData: [
        { name: "Mondeo", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Focus", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Fiesta", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Fusio", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Kuga", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Puma", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "EcoSport", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Ranger", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Everest", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Raptor", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Bronco", value: Math.floor(Math.random() * 5000) + 1000 },
        { name: "Explorer", value: Math.floor(Math.random() * 5000) + 1000 },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-6 mb-20">
      <h1 className="text-3xl font-bold tracking-[-0.4px]">Statistics</h1>
      <div className="grid grid-cols-12 gap-4">
        {infoCards.map((card, index) => (
          <div key={`info-card-${index}`} className="lg:col-span-3 sm:col-span-6 col-span-12">
            <StatisticsCard {...card} />
          </div>
        ))}
        {chartCards.map((card, index) => (
          <div key={`chart-card-${index}`} className="lg:col-span-6 col-span-12">
            <StatisticsCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsPage;
