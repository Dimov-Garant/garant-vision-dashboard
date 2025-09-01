import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

const investmentData = [
  { month: 'Ян', portfolio: 85000, market: 82000, garant: 88000, garantBulgaria: 90000, allAssets: 87000 },
  { month: 'Фев', portfolio: 89000, market: 85000, garant: 92000, garantBulgaria: 95000, allAssets: 91000 },
  { month: 'Мар', portfolio: 87000, market: 83000, garant: 91000, garantBulgaria: 93000, allAssets: 89000 },
  { month: 'Апр', portfolio: 94000, market: 88000, garant: 97000, garantBulgaria: 100000, allAssets: 96000 },
  { month: 'Май', portfolio: 98000, market: 92000, garant: 102000, garantBulgaria: 106000, allAssets: 100000 },
  { month: 'Юни', portfolio: 105000, market: 96000, garant: 108000, garantBulgaria: 112000, allAssets: 107000 },
];

const performanceMetrics = [
  { 
    label: "Годишна доходност", 
    value: "+24.5%", 
    trend: "up", 
    description: "Превишаваме пазара с 8.2%" 
  },
  { 
    label: "Текущ портфейл", 
    value: "2.8M лв", 
    trend: "up", 
    description: "Активно управлявани активи" 
  },
  { 
    label: "Брой позиции", 
    value: "42", 
    trend: "neutral", 
    description: "Диверсифициран портфейл" 
  }
];

export const InvestmentChart = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Инвестиционни резултати
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Проследете представянето на нашите инвестиционни стратегии и 
            сравнете резултатите с пазарните индекси
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {performanceMetrics.map((metric, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-in" 
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-6 w-6 text-success" />
                  ) : metric.trend === 'down' ? (
                    <TrendingDown className="h-6 w-6 text-destructive" />
                  ) : (
                    <BarChart3 className="h-6 w-6 text-primary" />
                  )}
                </div>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  metric.trend === 'up' ? 'bg-success/10 text-success' : 
                  metric.trend === 'down' ? 'bg-destructive/10 text-destructive' : 
                  'bg-primary/10 text-primary'
                }`}>
                  {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{metric.value}</h3>
              <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </Card>
          ))}
        </div>

        {/* Interactive Chart */}
        <Card className="p-8 bg-gradient-card border-border/50 shadow-xl">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Портфейлно представяне</h3>
            <p className="text-muted-foreground">Сравнение на Garant Bulgaria стратегии с пазарните индекси</p>
          </div>
          
          <div className="h-96 w-full bg-muted/20 rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={investmentData}>
                <CartesianGrid strokeDasharray="1 1" stroke="hsl(var(--border))" strokeOpacity={0.3} />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))',
                    boxShadow: '0 10px 40px -10px hsl(var(--foreground) / 0.1)'
                  }}
                  formatter={(value: number) => [`${value.toLocaleString()} лв`, '']}
                />
                
                {/* Light gray background lines for all assets */}
                <Line 
                  type="monotone" 
                  dataKey="allAssets" 
                  stroke="hsl(var(--muted-foreground))" 
                  strokeWidth={1}
                  strokeOpacity={0.4}
                  dot={false}
                  name="Всички активи"
                />
                <Line 
                  type="monotone" 
                  dataKey="portfolio" 
                  stroke="hsl(var(--muted-foreground))" 
                  strokeWidth={1}
                  strokeOpacity={0.4}
                  dot={false}
                  name="Общ портфейл"
                />
                <Line 
                  type="monotone" 
                  dataKey="market" 
                  stroke="hsl(var(--muted-foreground))" 
                  strokeWidth={1}
                  strokeDasharray="3 3"
                  strokeOpacity={0.5}
                  dot={false}
                  name="Пазарен индекс"
                />
                
                {/* Bold line for Garant Bulgaria */}
                <Line 
                  type="monotone" 
                  dataKey="garantBulgaria" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={4}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'hsl(var(--primary))', fill: 'hsl(var(--background))' }}
                  name="Гарант България"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center mt-6 space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-1 bg-primary rounded-full"></div>
              <span className="text-foreground font-semibold">Гарант България</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-0.5 bg-muted-foreground/40 rounded-full"></div>
              <span className="text-muted-foreground">Всички активи</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-0.5 bg-muted-foreground/40 rounded-full"></div>
              <span className="text-muted-foreground">Общ портфейл</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-0.5 border border-muted-foreground/50 rounded-full border-dashed"></div>
              <span className="text-muted-foreground">Пазарен индекс</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};