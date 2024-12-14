import { motion } from "framer-motion";

const DashboardPreview = () => {
  return (
    <div className="relative -mt-20 mb-[-100px] z-10 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300"
        >
          <img
            src="/lovable-uploads/88ecf396-fe63-43fb-8a3d-4129c4168ee9.png"
            alt="AI Marketing Intelligence Dashboard"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPreview;