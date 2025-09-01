import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

const stockPriceData = [
  { 
    month: 'Ян', 
    garantShare: 24.50, 
    sofarmaShare: 18.20, 
    pibShare: 12.40, 
    euroholdShare: 8.60, 
    maCapitalShare: 15.80,
    appleShare: 145.30,
    microsoftShare: 280.20
  },
  { 
    month: 'Фев', 
    garantShare: 26.10, 
    sofarmaShare: 19.10, 
    pibShare: 13.90, 
    euroholdShare: 8.40, 
    maCapitalShare: 16.70,
    appleShare: 150.80,
    microsoftShare: 290.50
  },
  { 
    month: 'Мар', 
    garantShare: 25.40, 
    sofarmaShare: 18.50, 
    pibShare: 13.20, 
    euroholdShare: 8.20, 
    maCapitalShare: 16.20,
    appleShare: 148.60,
    microsoftShare: 285.40
  },
  { 
    month: 'Апр', 
    garantShare: 28.70, 
    sofarmaShare: 20.30, 
    pibShare: 15.10, 
    euroholdShare: 9.10, 
    maCapitalShare: 18.40,
    appleShare: 165.20,
    microsoftShare: 310.80
  },
  { 
    month: 'Май', 
    garantShare: 31.20, 
    sofarmaShare: 21.80, 
    pibShare: 16.80, 
    euroholdShare: 9.60, 
    maCapitalShare: 19.90,
    appleShare: 175.40,
    microsoftShare: 325.60
  },
  { 
    month: 'Юни', 
    garantShare: 34.50, 
    sofarmaShare: 23.40, 
    pibShare: 18.20, 
    euroholdShare: 10.20, 
    maCapitalShare: 21.60,
    appleShare: 182.90,
    microsoftShare: 340.20
  },
];

const companyStocks = [
  { key: 'sofarmaShare', name: 'Софарма АД', color: 'hsl(var(--muted-foreground))' },
  { key: 'pibShare', name: 'ПИБ АД', color: 'hsl(var(--muted-foreground))' },
  { key: 'euroholdShare', name: 'Еврохолд', color: 'hsl(var(--muted-foreground))' },
  { key: 'maCapitalShare', name: 'M&A Capital', color: 'hsl(var(--muted-foreground))' },
  { key: 'appleShare', name: 'Apple Inc.', color: 'hsl(var(--muted-foreground))' },
  { key: 'microsoftShare', name: 'Microsoft', color: 'hsl(var(--muted-foreground))' },
];

const performanceMetrics = [
  { 
    label: "Цена на дял Гарант", 
    value: "34.50 лв", 
    trend: "up", 
    description: "Ръст от 40.8% за периода" 
  },
  { 
    label: "Средна цена на акциите", 
    value: "88.65 лв", 
    trend: "up", 
    description: "Средно за притежаваните позиции" 
  },
  { 
    label: "Най-добро представяне", 
    value: "+82.1%", 
    trend: "up", 
    description: "Apple Inc. за периода" 
  }
];

export const InvestmentChart = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ценово представяне на акции
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Проследете цените на дялове на Гарант и акциите от притежаваните компании 
            в реално време
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
        <Card className="relative p-10 bg-gradient-to-br from-card via-card/80 to-primary/5 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.01] backdrop-blur-sm rounded-2xl overflow-hidden group">
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full -translate-y-16 translate-x-16 blur-xl"></div>
          <div className="relative z-10">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Ценово представяне на акции</h3>
            <p className="text-muted-foreground">Цени на акции на Гарант и притежаваните компании</p>
          </div>
          
          <div className="h-96 w-full bg-muted/20 rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stockPriceData}>
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
                  tickFormatter={(value) => `${value.toFixed(0)} лв`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))',
                    boxShadow: '0 10px 40px -10px hsl(var(--foreground) / 0.1)'
                  }}
                  formatter={(value: number) => [`${value.toFixed(2)} лв`, '']}
                />
                
                {/* Light gray lines for individual company stocks */}
                {companyStocks.map((stock) => (
                  <Line 
                    key={stock.key}
                    type="monotone" 
                    dataKey={stock.key} 
                    stroke={stock.color} 
                    strokeWidth={1}
                    strokeOpacity={0.4}
                    dot={false}
                    name={stock.name}
                  />
                ))}
                
                {/* Bold line for Garant share */}
                <Line 
                  type="monotone" 
                  dataKey="garantShare" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={4}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'hsl(var(--primary))', fill: 'hsl(var(--background))' }}
                  name="Гарант дял"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center mt-6 space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-1 bg-primary rounded-full"></div>
              <span className="text-foreground font-semibold">Гарант дял</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-0.5 bg-muted-foreground/40 rounded-full"></div>
              <span className="text-muted-foreground">Притежавани акции</span>
            </div>
          </div>
          </div>
        </Card>
      </div>
    </section>
  );
};