import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => {
  return (
    <div className="p-8 rounded-xl bg-oxford-navy/30 backdrop-blur-sm border border-oxford-white/10 hover:border-oxford-blue/30 transition-all duration-300 animate-fade-up group">
      <div className="w-14 h-14 bg-oxford-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-oxford-blue/20 transition-colors">
        <Icon className="w-7 h-7 text-oxford-blue" />
      </div>
      <h3 className="text-2xl font-semibold text-oxford-white mb-3">{title}</h3>
      <p className="text-oxford-white/80 text-lg">{description}</p>
    </div>
  );
};

export default FeatureCard;