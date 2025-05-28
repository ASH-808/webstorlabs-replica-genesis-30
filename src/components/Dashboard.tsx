
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Shield, Activity } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { StaggeredText } from "@/components/animations/StaggeredText";

export const Dashboard = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />,
      title: "Analytics",
      description: "Real-time usage stats",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600 mb-2" />,
      title: "User Management",
      description: "Access control",
      bgColor: "bg-green-50"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600 mb-2" />,
      title: "Security",
      description: "Advanced protection",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Activity className="h-8 w-8 text-orange-600 mb-2" />,
      title: "Monitoring",
      description: "24/7 surveillance",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedText animation="fade-right" className="text-4xl md:text-5xl font-bold text-black mb-8">
              <h2>Intelligent Dashboard</h2>
            </AnimatedText>
            
            <AnimatedText animation="fade-up" delay={200} className="text-xl text-gray-600 mb-8 leading-relaxed">
              <p>
                Monitor, manage, and analyze your access control system with our intuitive admin panel. 
                Real-time insights and comprehensive reporting at your fingertips.
              </p>
            </AnimatedText>
            
            <StaggeredText
              staggerDelay={150}
              animation="scale-fade"
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <Card key={index} className={`p-4 border-0 ${feature.bgColor}`}>
                  <CardContent className="p-0">
                    {feature.icon}
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </StaggeredText>

            <AnimatedText animation="fade-up" delay={600}>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3">
                Explore Dashboard
              </Button>
            </AnimatedText>
          </div>

          <AnimatedText animation="fade-left" delay={400} className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Access Overview</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Entries</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Users</span>
                    <span className="font-semibold">89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">System Health</span>
                    <span className="font-semibold text-green-600">99.9%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">John Doe accessed Building A</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">New user registered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Security alert resolved</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};
