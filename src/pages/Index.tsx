import { Hero } from "@/components/Hero";
import { InvestmentChart } from "@/components/InvestmentChart";
import { AssetsOverview } from "@/components/AssetsOverview";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SubscriptionPlans />
      <InvestmentChart />
      <AssetsOverview />
      <Footer />
    </div>
  );
};

export default Index;
