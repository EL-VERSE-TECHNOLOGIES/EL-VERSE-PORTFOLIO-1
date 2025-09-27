import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Heart, Code2 } from "lucide-react";
import elVerseLogo from "@/assets/el-verse-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={elVerseLogo} alt="EL VERSE" className="w-10 h-10" />
              <span className="text-2xl font-bold font-brand">EL VERSE</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Building the future of African technology through comprehensive solutions, 
              training, and innovation. Your gateway to the tech universe.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Software Development</Badge>
              <Badge variant="secondary">Tech Training</Badge>
              <Badge variant="secondary">Social Innovation</Badge>
              <Badge variant="secondary">Talent Connection</Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Our Universe</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">ELCODERS</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">EL ACCESS</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">WILLOW (2026)</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">MYSPACE (2026)</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">BITSPIRE (Oct 2025)</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="https://wa.me/2348061908715" className="hover:text-primary transition-colors">
                  WhatsApp: +234 806 190 8715
                </a>
              </li>
              <li>
                <a href="mailto:elcoderssoftwares12@gmail.com" className="hover:text-primary transition-colors">
                  elcoderssoftwares12@gmail.com
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ElVerse27" className="hover:text-primary transition-colors">
                  Twitter: @ElVerse27
                </a>
              </li>
              <li>
                <a href="https://instagram.com/el_verse1" className="hover:text-primary transition-colors">
                  Instagram: el_verse1
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} EL VERSE. All rights reserved. Benin Republic & Côte d'Ivoire.
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and 
            <Code2 className="w-4 h-4 text-primary" /> by Supreme Elyon & Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;