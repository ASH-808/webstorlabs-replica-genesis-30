
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Smartphone, Wifi } from "lucide-react";

export const Products = () => {
  const products = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "NFC Cards",
      description: "Premium NFC-enabled access cards with customizable designs and advanced security features.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Smart Readers",
      description: "High-performance NFC readers with real-time data processing and cloud connectivity.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      icon: <Wifi className="h-8 w-8 text-blue-600" />,
      title: "Smart Tags",
      description: "Versatile NFC tags for asset tracking, automation, and seamless user interactions.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete NFC ecosystem solutions designed for modern access control and smart automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {product.icon}
                  <CardTitle className="text-xl font-semibold">{product.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
