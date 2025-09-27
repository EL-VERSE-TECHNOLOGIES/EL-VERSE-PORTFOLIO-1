import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  ExternalLink,
  Clock,
  Users
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+234 806 190 8715",
      action: () => window.open("https://wa.me/2348061908715", "_blank"),
      color: "text-success"
    },
    {
      icon: Mail,
      label: "Email",
      value: "elcoderssoftwares12@gmail.com",
      action: () => window.open("mailto:elcoderssoftwares12@gmail.com", "_blank"),
      color: "text-primary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Benin Republic & Côte d'Ivoire",
      action: null,
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Twitter,
      platform: "Twitter",
      handle: "@ElVerse27",
      link: "https://twitter.com/ElVerse27",
      color: "text-blue-400"
    },
    {
      icon: Instagram,
      platform: "Instagram",
      handle: "el_verse1",
      link: "https://instagram.com/el_verse1",
      color: "text-pink-500"
    },
    {
      icon: Github,
      platform: "GitHub",
      handle: "ELVERSE TECHNOLOGIES",
      link: "https://github.com/elverse-technologies",
      color: "text-foreground"
    },
    {
      icon: Linkedin,
      platform: "LinkedIn",
      handle: "EL VERSE",
      link: "https://linkedin.com/company/el-verse",
      color: "text-blue-600"
    }
  ];

  const serviceTypes = [
    {
      title: "Software Development",
      description: "Custom web and mobile applications",
      icon: "💻"
    },
    {
      title: "Tech Training",
      description: "Professional development programs",
      icon: "🎓"
    },
    {
      title: "Digital Transformation",
      description: "Enterprise technology solutions",
      icon: "🚀"
    },
    {
      title: "Talent Connection",
      description: "Tech recruitment and matching",
      icon: "🤝"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into digital reality? Connect with EL VERSE today and 
            discover how our tech universe can accelerate your business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-background p-3 rounded-lg border border-border">
                      <IconComponent className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                    {info.action && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={info.action}
                        className="hover:bg-primary/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Business Hours */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-muted-foreground">8:00 AM - 6:00 PM WAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-muted-foreground">9:00 AM - 4:00 PM WAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services & Social */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Our Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {serviceTypes.map((service, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-2xl mb-3">{service.icon}</div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <h4 className="text-xl font-bold mb-6">Connect With Us</h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start h-auto p-4 border-border/50 hover:border-primary/50"
                    onClick={() => window.open(social.link, "_blank")}
                  >
                    <IconComponent className={`w-5 h-5 mr-3 ${social.color}`} />
                    <div className="text-left">
                      <div className="font-semibold text-sm">{social.platform}</div>
                      <div className="text-xs text-muted-foreground">{social.handle}</div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary p-8 md:p-12 rounded-2xl text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the growing list of satisfied clients who trust EL VERSE for their technology needs. 
            Let's discuss how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open("https://wa.me/2348061908715", "_blank")}
              className="bg-white text-primary hover:bg-white/90"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start WhatsApp Chat
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open("mailto:elcoderssoftwares12@gmail.com", "_blank")}
              className="border-white text-white hover:bg-white/10"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;