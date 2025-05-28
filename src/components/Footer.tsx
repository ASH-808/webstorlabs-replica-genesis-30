
export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">WEBSTORLABS</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Leading provider of NFC access control solutions, delivering smart, secure, and scalable systems for modern businesses.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">NFC Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Readers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Tags</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 WebstorLabs. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8 text-gray-500 text-sm">
        Made in Framer
      </div>
    </footer>
  );
};
