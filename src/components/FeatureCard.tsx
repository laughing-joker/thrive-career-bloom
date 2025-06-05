
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-main-bg p-6 rounded-lg shadow-lg border border-gray-700 hover:border-primary transition-all duration-300 group hover:transform hover:scale-105">
      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      
      <h3 className="text-xl font-bold text-primary-text mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
