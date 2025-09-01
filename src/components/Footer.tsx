import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Garant Bulgaria</h3>
            <p className="text-lg text-white/80 mb-6 max-w-md">
              Водеща компания в България за професионални финансови анализи и 
              инвестиционни консултации. Помагаме на инвеститорите да вземат 
              информирани решения.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/60" />
                <span className="text-white/80">contact@garantbulgaria.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/60" />
                <span className="text-white/80">+359 2 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white/60" />
                <span className="text-white/80">София, България</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Финансови анализи</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Инвестиционни стратегии</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Портфейлно управление</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Секторни анализи</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Консултации</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Ресурси</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">База знания</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Пазарни данни</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Уебинари</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API документация</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/60 text-sm">
              © 2024 Garant Bulgaria. Всички права запазени.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};