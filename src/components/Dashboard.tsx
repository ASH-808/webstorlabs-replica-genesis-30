
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Shield, Activity } from "lucide-react";

export const Dashboard = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Intelligent Dashboard
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Monitor, manage, and analyze your access control system with our intuitive admin panel. 
              Real-time insights and comprehensive reporting at your fingertips.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="p-4 border-0 bg-blue-50">
                <CardContent className="p-0">
                  <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Analytics</h3>
                  <p className="text-sm text-gray-600">Real-time usage stats</p>
                </CardContent>
              </Card>
              
              <Card className="p-4 border-0 bg-green-50">
                <CardContent className="p-0">
                  <Users className="h-8 w-8 text-green-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">User Management</h3>
                  <p className="text-sm text-gray-600">Access control</p>
                </CardContent>
              </Card>
              
              <Card className="p-4 border-0 bg-purple-50">
                <CardContent className="p-0">
                  <Shield className="h-8 w-8 text-purple-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Security</h3>
                  <p className="text-sm text-gray-600">Advanced protection</p>
                </CardContent>
              </Card>
              
              <Card className="p-4 border-0 bg-orange-50">
                <CardContent className="p-0">
                  <Activity className="h-8 w-8 text-orange-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Monitoring</h3>
                  <p className="text-sm text-gray-600">24/7 surveillance</p>
                </CardContent>
              </Card>
            </div>

            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3">
              Explore Dashboard
            </Button>
          </div>

          <div className="relative">
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
          </div>
        </div>
      </div>
    </section>
  );
};
