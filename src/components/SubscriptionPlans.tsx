import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    id: "free",
    name: "Свободен достъп",
    price: "0,00",
    currency: "лв/мес.",
    icon: <Zap className="h-6 w-6" />,
    badge: "Базово",
    badgeColor: "default",
    features: [
      "Сравнителен поглед над всички Български компании",
      "Сортирани и сравнени по сектори", 
      "Отношение на текуща цена на акция, спрямо финансови резултати за последните 5 години",
      "Базови графики и визуализации"
    ],
    buttonText: "Регистрирай ме",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    id: "global",
    name: "Световни пазари", 
    price: "3,99",
    currency: "лв/мес.",
    icon: <Star className="h-6 w-6" />,
    badge: "Популярно",
    badgeColor: "primary",
    features: [
      "Всичко от базовия план",
      "Сравнителен поглед над Български и 400 световни компании",
      "Сортирани и сравнени по сектори",
      "Разширени аналитични инструменти",
      "Международни пазарни данни в реално време"
    ],
    buttonText: "Регистрирай ме", 
    buttonVariant: "default" as const,
    popular: true
  },
  {
    id: "premium",
    name: "Оценки: стойност",
    price: "24,99", 
    currency: "лв/мес.",
    icon: <Crown className="h-6 w-6" />,
    badge: "Професионално",
    badgeColor: "success",
    features: [
      "Всичко от другите два абонамента плюс:",
      "Цялостен детайлен финансов анализ и оценка на стойността на всяко дружество",
      "Исторически финансови отчети и коефициенти", 
      "Възможност за лично участие чрез промяна на прогнози и изготвяне на оценки",
      "Тримесечен секторен анализ (10 сектора)",
      "Персонализирани препоръки и портфейлни предложения"
    ],
    buttonText: "Регистрирай ме",
    buttonVariant: "default" as const,
    popular: false
  }
];

export const SubscriptionPlans = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Изберете абонамент
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Професионални инвестиционни анализи и оценки, достъпни на три нива 
            според вашите потребности и инвестиционни цели
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={plan.id} className={`relative p-8 transition-all duration-500 hover:scale-105 animate-fade-in ${
              plan.popular 
                ? 'bg-gradient-primary text-white shadow-2xl border-primary scale-105' 
                : 'bg-gradient-card border-border/50 hover:shadow-xl'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}>
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-white text-primary px-4 py-2 text-sm font-semibold">
                    ⭐ Най-популярно
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  plan.popular 
                    ? 'bg-white/20 text-white' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {plan.icon}
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-white' : 'text-foreground'
                }`}>
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline justify-center mb-2">
                  <span className={`text-4xl font-bold ${
                    plan.popular ? 'text-white' : 'text-foreground'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ml-1 ${
                    plan.popular ? 'text-white/80' : 'text-muted-foreground'
                  }`}>
                    {plan.currency}
                  </span>
                </div>

                <Badge variant={plan.popular ? "secondary" : "outline"} 
                       className={plan.popular ? "bg-white/20 text-white border-white/30" : ""}>
                  {plan.badge}
                </Badge>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-white' : 'text-primary'
                    }`} />
                    <span className={`text-sm leading-relaxed ${
                      plan.popular ? 'text-white/90' : 'text-muted-foreground'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-white text-primary hover:bg-white/90' 
                    : ''
                }`}
                variant={plan.popular ? "secondary" : plan.buttonVariant}
                size="lg"
              >
                {plan.buttonText}
              </Button>

              {plan.id === "premium" && (
                <div className="mt-4 text-center">
                  <p className={`text-xs ${
                    plan.popular ? 'text-white/70' : 'text-muted-foreground'
                  }`}>
                    Включва 14-дневен безплатен период
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Всички планове включват 24/7 поддръжка и редовни актуализации на данните
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Без скрити такси</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Отказване по всяко време</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Сигурни плащания</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};