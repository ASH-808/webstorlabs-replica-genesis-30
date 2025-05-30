
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, Home, Briefcase } from "lucide-react";
import { StickyScrollSection } from "@/components/animations/StickyScrollSection";

export const StickyUseCases = () => {
  const useCases = [
    {
      title: "Office Access Control",
      description: "Secure building entry with employee cards and visitor management systems. Advanced analytics track movement patterns and provide insights for security optimization.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      content: (
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 border-0 text-white">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="h-8 w-8" />
              <CardTitle className="text-xl">Enterprise Ready</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-white/90">
              <li>• Multi-location support</li>
              <li>• Real-time monitoring</li>
              <li>• Visitor management</li>
              <li>• Integration ready</li>
            </ul>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Event Check-ins",
      description: "Streamlined event registration and attendee tracking with NFC technology. Reduce wait times and enhance the attendee experience with instant check-ins.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      content: (
        <Card className="bg-gradient-to-br from-green-500 to-green-700 border-0 text-white">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-8 w-8" />
              <CardTitle className="text-xl">Event Solutions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-white/90">
              <li>• Instant check-ins</li>
              <li>• Attendee analytics</li>
              <li>• Queue management</li>
              <li>• Mobile integration</li>
            </ul>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Smart Buildings",
      description: "Integrated access control for modern smart building automation systems. Connect with IoT devices and create intelligent environments that respond to occupancy.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      content: (
        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 border-0 text-white">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <Home className="h-8 w-8" />
              <CardTitle className="text-xl">Smart Integration</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-white/90">
              <li>• IoT connectivity</li>
              <li>• Energy optimization</li>
              <li>• Automated systems</li>
              <li>• Predictive analytics</li>
            </ul>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Business Solutions",
      description: "Custom enterprise solutions for complex multi-location access requirements. Scalable architecture supports organizations of any size with advanced security features.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      content: (
        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 border-0 text-white">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="h-8 w-8" />
              <CardTitle className="text-xl">Enterprise Scale</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-white/90">
              <li>• Custom workflows</li>
              <li>• Advanced reporting</li>
              <li>• API integration</li>
              <li>• 24/7 support</li>
            </ul>
          </CardContent>
        </Card>
      )
    }
  ];

  return (
    <section className="bg-white">
      <div className="text-center py-20">
        <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
          Endless Possibilities
        </h2>
        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
          From corporate offices to smart cities, our solutions adapt to every environment
        </p>
      </div>
      
      <StickyScrollSection 
        items={useCases}
        className="min-h-screen"
      />
    </section>
  );
};
