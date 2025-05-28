
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to implement smart access control? Let's discuss your requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-0 bg-gray-50 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="border-gray-200" />
                  <Input placeholder="Last Name" className="border-gray-200" />
                </div>
                <Input placeholder="Email Address" type="email" className="border-gray-200" />
                <Input placeholder="Company" className="border-gray-200" />
                <Textarea 
                  placeholder="Tell us about your project requirements..." 
                  className="border-gray-200 min-h-32"
                />
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-3">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Email</h4>
                    <p className="text-gray-600">contact@webstorlabs.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Office</h4>
                    <p className="text-gray-600">
                      123 Tech Street<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 bg-blue-50">
              <CardContent className="p-6">
                <h4 className="font-bold text-black mb-3">Newsletter Signup</h4>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest NFC technology trends and product updates.
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Your email" className="flex-1 border-gray-200" />
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
