import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, BarChart3, ShoppingCart } from "lucide-react";

const investmentData = [
  { month: 'Ян', portfolio: 85000, market: 82000, garant: 88000 },
  { month: 'Фев', portfolio: 89000, market: 85000, garant: 92000 },
  { month: 'Мар', portfolio: 87000, market: 83000, garant: 91000 },
  { month: 'Апр', portfolio: 94000, market: 88000, garant: 97000 },
  { month: 'Май', portfolio: 98000, market: 92000, garant: 102000 },
  { month: 'Юни', portfolio: 105000, market: 96000, garant: 108000 },
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
          
          {/* Stock Price and Purchase Button */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-primary/5 rounded-lg p-6 mb-6 border border-primary/20">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-foreground mb-1">Гарант България Холд</h4>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-3xl font-bold text-primary">42.75 лв</span>
                <span className="text-success flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  +1.8%
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Цена на акция към момента</p>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Закупи дялове
            </Button>
          </div>
          
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={investmentData}>
                <defs>
                  <linearGradient id="garant" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="portfolio" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                  formatter={(value: number) => [`${value.toLocaleString()} лв`, '']}
                />
                <Area 
                  type="monotone" 
                  dataKey="garant" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  fill="url(#garant)"
                  name="Garant Стратегии"
                />
                <Area 
                  type="monotone" 
                  dataKey="portfolio" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={2}
                  fill="url(#portfolio)"
                  name="Общ портфейл"
                />
                <Line 
                  type="monotone" 
                  dataKey="market" 
                  stroke="hsl(var(--muted-foreground))" 
                  strokeWidth={1}
                  strokeDasharray="5 5"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center mt-6 space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">Garant Стратегии</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-muted-foreground">Общ портфейл</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 border-2 border-muted-foreground rounded-full"></div>
              <span className="text-muted-foreground">Пазарен индекс</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};