
import { Button } from "@/components/ui/button";
import { StickyScrollSection } from "@/components/animations/StickyScrollSection";
import { CinematicText } from "@/components/animations/CinematicText";
import { BarChart3, Users, Shield, Activity, ArrowRight } from "lucide-react";

export const Dashboard = () => {
  const dashboardFeatures = [
    {
      title: "Real-time Analytics",
      description: "Monitor access patterns, peak usage times, and security events in real-time. Our advanced analytics engine processes millions of data points to give you actionable insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-blue-500" />
            <span className="text-lg font-semibold">Live Data Processing</span>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">
            View Analytics
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    {
      title: "User Management",
      description: "Effortlessly manage user permissions, create access groups, and handle visitor registrations. Streamlined workflows for administrators and security personnel.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-green-500" />
            <span className="text-lg font-semibold">Advanced Permissions</span>
          </div>
          <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full">
            Manage Users
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    {
      title: "Security Monitoring",
      description: "24/7 security monitoring with AI-powered threat detection. Instant alerts for suspicious activities and comprehensive audit trails for compliance.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-purple-500" />
            <span className="text-lg font-semibold">AI-Powered Security</span>
          </div>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full">
            Security Center
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    {
      title: "System Health",
      description: "Monitor device status, connectivity, and performance metrics. Predictive maintenance alerts ensure maximum uptime and reliability.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Activity className="h-6 w-6 text-orange-500" />
            <span className="text-lg font-semibold">Predictive Maintenance</span>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
            System Status
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    }
  ];

  return (
    <section className="bg-white">
      <div className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <CinematicText
            variant="split"
            size="xl"
            className="text-black mb-8"
            splitWords
          >
            Intelligent Control Center
          </CinematicText>
          
          <CinematicText
            variant="fade-up"
            size="sm"
            className="text-gray-600 font-light max-w-2xl mx-auto"
            delay={400}
          >
            Experience the future of access control management with our revolutionary dashboard
          </CinematicText>
        </div>
      </div>
      
      <StickyScrollSection
        items={dashboardFeatures}
        className="bg-gray-50"
      />
    </section>
  );
};
