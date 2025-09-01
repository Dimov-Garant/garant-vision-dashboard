import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
export const Hero = () => {
  return <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 opacity-20">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover blur-sm" style={{
        filter: 'blur(2px)'
      }}>
          
          <source src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/30 to-primary/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Гарант България Холд
            <span className="block bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent text-2xl md:text-3xl">инвестиционно дружество</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Оценки на български и международни компании. 
            Вземете информирани инвестиционни решения и подкрепете дейността ни с абонамента си.
          </p>

          <div className="flex flex-col gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105">
              Инвестирай сега
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105">
              Виж резултатите ни
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105">
              Абонирай се за анализи
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};