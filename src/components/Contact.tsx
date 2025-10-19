import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import whatsappLogo from "@/assets/whatsapp-logo.png";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923215381591', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            We're here to help with all your drone spare parts needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Phone</CardTitle>
              <CardDescription>Give us a call</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="tel:03215381591" className="text-foreground hover:text-primary transition-colors font-medium">
                03215381591
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription>Send us a message</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:aghaaliakbar@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium break-all">
                aghaaliakbar@gmail.com
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Location</CardTitle>
              <CardDescription>Head Office</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-medium">Rawalpindi, Pakistan</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Hours</CardTitle>
              <CardDescription>We're available</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-medium">Mon - Sat: 9AM - 6PM</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 border-[#25D366]/20">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <img src={whatsappLogo} alt="WhatsApp" className="w-16 h-16" />
              </div>
              <CardTitle>WhatsApp Support</CardTitle>
              <CardDescription>
                Get instant support via WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                size="lg"
              >
                Chat on WhatsApp
              </Button>
              <p className="text-sm text-muted-foreground mt-3">03215381591</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
