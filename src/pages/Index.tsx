import { Hero } from "@/components/Hero";
import { InvestmentChart } from "@/components/InvestmentChart";
import { AssetsOverview } from "@/components/AssetsOverview";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <InvestmentChart />
      <AssetsOverview />
      <SubscriptionPlans />
      <Footer />
    </div>
  );
};

export default Index;
