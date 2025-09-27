import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Users, 
  MessageSquare, 
  Network, 
  GraduationCap,
  ExternalLink,
  Calendar,
  MapPin
} from "lucide-react";
import elcodersLogo from "@/assets/elcoders-logo.jpg";
import myspaceLogo from "@/assets/myspace-logo.jpg";

const Services = () => {
  const services = [
    {
      id: "elcoders",
      icon: Code2,
      title: "ELCODERS",
      description: "Elite software development powerhouse",
      details: "Premier team of 32+ expert developers crafting cutting-edge web applications, mobile solutions, and enterprise-grade software that transforms businesses and accelerates digital innovation across Africa.",
      status: "Active",
      link: "https://elcoders-portfolio-web.vercel.app/",
      color: "bg-primary",
      logo: elcodersLogo,
      features: ["Full-Stack Development", "Mobile Applications", "Enterprise Solutions", "Cloud Architecture", "DevOps & Deployment", "API Integration"]
    },
    {
      id: "elaccess",
      icon: Users,
      title: "EL ACCESS",
      description: "Elite tech talent community",
      details: "An exclusive society connecting ambitious tech students, interns, and emerging professionals with industry leaders, providing world-class mentorship, resources, and accelerated pathways to tech excellence.",
      status: "Active",
      link: "https://el-accsess-2-registration.netlify.app/",
      color: "bg-accent",
      features: ["Elite Mentorship", "Industry Networking", "Advanced Skill Development", "Career Acceleration", "Project Collaboration", "Leadership Training"]
    },
    {
      id: "willow",
      icon: MessageSquare,
      title: "WILLOW",
      description: "Next-generation social media platform",
      details: "Revolutionary social media app designed for authentic connections and meaningful interactions. Coming in 2026 with innovative features.",
      status: "Coming 2026",
      link: "#",
      color: "bg-success",
      features: ["Authentic Connections", "Privacy-First", "AI-Powered", "Community Building"]
    },
    {
      id: "myspace",
      icon: Network,
      title: "MYSPACE",
      description: "Revolutionary tech talent ecosystem",
      details: "Next-generation platform revolutionizing how tech professionals connect with enterprises. AI-powered matching, comprehensive skill verification, and seamless project collaboration for the future of tech partnerships.",
      status: "Coming 2026",
      link: "#",
      color: "bg-warning",
      logo: myspaceLogo,
      features: ["AI-Powered Matching", "Blockchain Verification", "Enterprise Portal", "Global Talent Pool", "Smart Contracts", "Real-time Collaboration"]
    },
    {
      id: "bitspire",
      icon: GraduationCap,
      title: "BITSPIRE",
      description: "West Africa's premier tech academy",
      details: "Revolutionary tech education institute transforming careers across West Africa. Industry-aligned curriculum, expert instructors, and guaranteed placement programs creating the next generation of African tech leaders.",
      status: "Launching Oct 2025",
      link: "#",
      color: "bg-destructive",
      features: ["Intensive Bootcamps", "Industry Certifications", "100% Placement Guarantee", "Corporate Partnerships", "Mentorship Programs", "Continuous Learning"]
    }
  ];

  const getStatusColor = (status: string) => {
    if (status === "Active") return "bg-success text-success-foreground";
    if (status.includes("2026")) return "bg-primary text-primary-foreground";
    return "bg-warning text-warning-foreground";
  };

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-wide">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Tech Universe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive ecosystem of technology solutions, 
            from software development to training, social innovation to talent connection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {service.logo ? (
                        <img src={service.logo} alt={`${service.title} logo`} className="w-12 h-12 rounded-lg object-cover" />
                      ) : (
                        <div className={`p-3 rounded-lg ${service.color} text-white`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                    <Badge className={getStatusColor(service.status)}>
                      {service.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold font-display tracking-wide">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {service.details}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {service.link !== "#" ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(service.link, '_blank')}
                      >
                        Learn More <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="flex-1" disabled>
                        {service.status.includes("Coming") ? "Coming Soon" : "Learn More"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Location & Timeline Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-muted p-6 rounded-lg">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Benin Republic & Côte d'Ivoire</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span>Expanding Across West Africa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;