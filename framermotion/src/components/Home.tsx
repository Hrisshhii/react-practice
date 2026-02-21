import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container">
      <h1>Framer Motion Cards</h1>

      <motion.div
        className="card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🚀 Animated Card
      </motion.div>
    </div>
  );
}