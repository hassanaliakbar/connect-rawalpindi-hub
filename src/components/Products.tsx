import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Fan, Camera, Wrench, Shield, Zap } from "lucide-react";

const products = [
  {
    icon: Fan,
    title: "Propellers & Blades",
    description: "High-performance propellers for various drone models"
  },
  {
    icon: Battery,
    title: "Batteries & Chargers",
    description: "Long-lasting batteries and fast charging solutions"
  },
  {
    icon: Camera,
    title: "Cameras & Sensors",
    description: "Advanced imaging and multi-spectral sensors"
  },
  {
    icon: Shield,
    title: "Protection Gear",
    description: "Protective cases and landing gear accessories"
  },
  {
    icon: Wrench,
    title: "Maintenance Tools",
    description: "Professional tools for drone maintenance and repair"
  },
  {
    icon: Zap,
    title: "Electronic Components",
    description: "Flight controllers, ESCs, and other electronics"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Product Range</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive selection of drone parts and accessories for agricultural applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <product.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
