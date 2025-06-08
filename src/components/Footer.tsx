
import { Briefcase, MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { label: 'Jobs', href: '/jobs' },
        { label: 'Courses', href: '/courses' },
        { label: 'Coaching', href: '/coaching' },
        { label: 'Assessments', href: '/assessments' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="bg-main-bg border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Career Network Africa</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering African professionals to achieve their career goals through comprehensive resources, 
              networking opportunities, and skill development across the continent.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:careernetworktz@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                  careernetworktz@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+255760866733" className="text-gray-300 hover:text-primary transition-colors">
                  +255 760 866 733
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-accent-green transition-colors p-2"
                asChild
              >
                <a href="https://www.facebook.com/share/1BWVbTiE9c/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-accent-green transition-colors p-2"
                asChild
              >
                <a href="https://www.instagram.com/careernetworktz?igsh=MWRwbDFmZ3Q1cWpxeQ==" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-accent-green transition-colors p-2"
                asChild
              >
                <a href="https://www.tiktok.com/@careernetworktz?_t=ZM-8wyXhmB1TJG&_r=1" target="_blank" rel="noopener noreferrer">
                  <TikTokIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-accent-green transition-colors p-2"
                asChild
              >
                <a href="https://wa.me/255760866733" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-primary-text mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              <span className="text-primary font-medium">Transform your career journey across Africa.</span>
              <br />
              © {currentYear} Career Network Africa. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Media Icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C8.396 0 7.932.013 7.594.06 5.78.207 4.224.65 2.992 1.882 1.76 3.114 1.316 4.67.169 6.484.122 6.822.109 7.287.109 10.907s.013 4.085.06 4.423c.147 1.814.59 3.37 1.822 4.602 1.232 1.232 2.788 1.675 4.602 1.822.338.047.802.06 4.423.06s4.085-.013 4.423-.06c1.814-.147 3.37-.59 4.602-1.822 1.232-1.232 1.675-2.788 1.822-4.602.047-.338.06-.802.06-4.423s-.013-4.085-.06-4.423C22.916 4.67 22.473 3.114 21.241 1.882 20.009.65 18.453.207 16.639.06 16.301.013 15.836 0 12.017 0zm0 2.162c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675c-3.315 0-6 2.685-6 6s2.685 6 6 6 6-2.685 6-6-2.685-6-6-6zm0 9.894c-2.149 0-3.894-1.745-3.894-3.894 0-2.148 1.745-3.894 3.894-3.894 2.148 0 3.894 1.746 3.894 3.894 0 2.149-1.746 3.894-3.894 3.894zm7.718-10.17c0-.775-.63-1.405-1.405-1.405-.775 0-1.405.63-1.405 1.405s.63 1.405 1.405 1.405c.775 0 1.405-.63 1.405-1.405z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

export default Footer;
