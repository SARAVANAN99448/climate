import { motion } from 'framer-motion';

const DashboardCard = ({ title, value, unit, color, icon, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col justify-center gap-5 min-w-[200px] h-44 bg-white shadow-2xl rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all ${className}`}
    >
      <div className="flex items-center justify-center space-x-2">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className={`text-2xl font-bold text-center ${color}`}>
        {value} <span className="">{unit}</span>
      </div>
    </motion.div>
  );
};

export default DashboardCard;
