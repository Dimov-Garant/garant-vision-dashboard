import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Globe, TrendingUp, DollarSign, PieChart, Users } from "lucide-react";

const assetCategories = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Български компании",
    count: "28 позиции",
    value: "1.2M лв",
    percentage: "45%",
    growth: "+18.2%",
    color: "primary"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Международни пазари",
    count: "14 позиции", 
    value: "800K лв",
    percentage: "30%",
    growth: "+12.8%",
    color: "success"
  },
  {
    icon: <PieChart className="h-8 w-8" />,
    title: "ETF фондове",
    count: "8 позиции",
    value: "450K лв", 
    percentage: "17%",
    growth: "+8.5%",
    color: "info"
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Паричен резерв",
    count: "Ликвидност",
    value: "220K лв",
    percentage: "8%", 
    growth: "+2.1%",
    color: "warning"
  }
];

const topHoldings = [
  { name: "Софарма АД", sector: "Фармация", weight: "8.2%", change: "+5.4%" },
  { name: "ПИБ АД", sector: "Банки", weight: "7.1%", change: "+12.1%" },
  { name: "Еврохолд България", sector: "Холдинги", weight: "6.8%", change: "-2.3%" },
  { name: "M&A Capital", sector: "Инвестиции", weight: "5.9%", change: "+8.7%" },
  { name: "Apple Inc.", sector: "Технологии", weight: "5.2%", change: "+15.2%" }
];

export const AssetsOverview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Притежавани активи
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Диверсифициран портфейл от български и международни инвестиции, 
            управлявани с професионален подход и дългосрочна визия
          </p>
        </div>

        {/* Asset Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {assetCategories.map((asset, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`p-3 rounded-xl mb-4 w-fit ${
                asset.color === 'primary' ? 'bg-primary/10 text-primary' :
                asset.color === 'success' ? 'bg-success/10 text-success' :
                asset.color === 'info' ? 'bg-info/10 text-info' :
                'bg-warning/10 text-warning'
              } group-hover:scale-110 transition-transform duration-300`}>
                {asset.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{asset.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{asset.count}</p>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-foreground">{asset.value}</span>
                <Badge variant="outline" className={`${
                  asset.growth.startsWith('+') ? 'text-success border-success' : 
                  'text-destructive border-destructive'
                }`}>
                  {asset.growth}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">от портфейла</span>
                <span className="text-lg font-semibold text-foreground">{asset.percentage}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Top Holdings */}
        <Card className="p-8 bg-gradient-card border-border/50 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-foreground flex items-center">
              <Users className="h-6 w-6 mr-3 text-primary" />
              Топ позиции в портфейла
            </h3>
            <Badge className="bg-primary/10 text-primary border-primary">
              Активно управлявани
            </Badge>
          </div>

          <div className="space-y-4">
            {topHoldings.map((holding, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-background/50 hover:bg-background transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {holding.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{holding.sector}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-right">
                  <div>
                    <p className="font-semibold text-foreground">{holding.weight}</p>
                    <p className="text-xs text-muted-foreground">тегло</p>
                  </div>
                  <Badge variant="outline" className={`${
                    holding.change.startsWith('+') ? 'text-success border-success' : 
                    'text-destructive border-destructive'
                  }`}>
                    {holding.change}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-center text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 mr-2 text-primary" />
              Средна годишна доходност на топ 10 позициите: <span className="font-semibold text-success ml-2">+16.8%</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};