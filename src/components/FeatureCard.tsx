import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow animate-fade-up">
      <div className="w-12 h-12 bg-oxford-purple/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-oxford-purple" />
      </div>
      <h3 className="text-xl font-semibold text-oxford-dark mb-2">{title}</h3>
      <p className="text-oxford-gray">{description}</p>
    </div>
  );
};

export default FeatureCard;