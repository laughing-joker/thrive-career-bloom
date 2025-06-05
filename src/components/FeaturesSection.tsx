
import FeatureCard from './FeatureCard';
import { Briefcase, BookOpen, Users, BarChart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Briefcase,
      title: 'Job Opportunities',
      description: 'Discover thousands of job opportunities from top companies worldwide. Filter by location, salary, and skills to find your perfect match.',
    },
    {
      icon: BookOpen,
      title: 'Professional Courses',
      description: 'Enhance your skills with our comprehensive course library. Learn from industry experts and earn certifications that matter.',
    },
    {
      icon: Users,
      title: 'Career Coaching',
      description: 'Get personalized guidance from experienced career coaches. Receive mentorship tailored to your goals and industry.',
    },
    {
      icon: BarChart,
      title: 'Skill Assessments',
      description: 'Evaluate your current skills and identify areas for improvement. Track your progress and showcase your expertise.',
    },
  ];

  return (
    <section className="py-20 bg-main-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Accelerate Your Career Growth
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive platform provides everything you need to advance your career, 
            from finding the right opportunities to developing essential skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
