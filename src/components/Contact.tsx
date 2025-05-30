
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      content: "contact@webstorlabs.com",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      bgColor: "bg-green-100"
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: "Office",
      content: "123 Tech Street\nSan Francisco, CA 94105",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in-down">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Ready to implement smart access control? Let's discuss your requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-right" style={{ animationDelay: '400ms' }}>
            <Card className="border border-gray-200 bg-white h-full shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="border-gray-300 bg-white" />
                  <Input placeholder="Last Name" className="border-gray-300 bg-white" />
                </div>
                <Input placeholder="Email Address" type="email" className="border-gray-300 bg-white" />
                <Input placeholder="Company" className="border-gray-300 bg-white" />
                <Textarea 
                  placeholder="Tell us about your project requirements..." 
                  className="border-gray-300 bg-white min-h-32"
                />
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-3 font-semibold">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-black mb-6 animate-fade-in-left" style={{ animationDelay: '600ms' }}>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${600 + (index * 150)}ms` }}
                >
                  <div className={`p-3 ${info.bgColor} rounded-full flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-lg">{info.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-scale-fade-in" style={{ animationDelay: '1000ms' }}>
              <Card className="border border-blue-200 bg-blue-50 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-black mb-3 text-lg">Newsletter Signup</h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    Stay updated with the latest NFC technology trends and product updates.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input 
                      placeholder="Your email address" 
                      className="flex-1 border-blue-300 bg-white focus:border-blue-500 focus:ring-blue-500" 
                      type="email"
                    />
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold whitespace-nowrap">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
