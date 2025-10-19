import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Genuine and certified drone parts",
  "Competitive pricing",
  "Fast delivery across Pakistan",
  "Expert technical support",
  "Warranty on all products",
  "Custom solutions for large orders"
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-primary">AgriDrone Spares</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are Pakistan's leading supplier of agricultural drone parts and accessories. 
              Based in Rawalpindi, we serve customers nationwide with premium quality products 
              and exceptional customer service.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our mission is to support the agricultural industry by providing reliable, 
              high-quality drone components that help farmers maximize their productivity.
            </p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-primary-foreground/90 mb-6">
                We understand the critical role that agricultural drones play in modern farming. 
                That's why we stock only the highest quality parts and provide expert guidance 
                to ensure your equipment performs at its best.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold mb-1">500+</div>
                  <div className="text-primary-foreground/80">Products in Stock</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">1000+</div>
                  <div className="text-primary-foreground/80">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">24/7</div>
                  <div className="text-primary-foreground/80">Customer Support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
