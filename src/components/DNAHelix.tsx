import { motion } from 'framer-motion';

const DNAHelix = () => {
  const rungs = 12;
  const baseRadius = 40;

  return (
    <div className="relative w-24 h-48 md:w-32 md:h-64">
      <motion.div
        className="absolute inset-0"
        animate={{ rotateY: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      >
        {Array.from({ length: rungs }).map((_, i) => {
          const yPos = (i / rungs) * 100;
          const rotation = (i / rungs) * 360;

          return (
            <div
              key={i}
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: `${yPos}%`,
                transform: `translateX(-50%) rotateY(${rotation}deg)`,
              }}
            >
              {/* Left strand node */}
              <motion.div
                className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#00f5d4]"
                style={{
                  left: `-${baseRadius}px`,
                  boxShadow: '0 0 15px rgba(0,245,212,0.8), 0 0 30px rgba(0,245,212,0.4)'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.15,
                  repeat: Infinity
                }}
              />

              {/* Connecting rung */}
              <motion.div
                className="absolute h-0.5 bg-gradient-to-r from-[#00f5d4] via-[#ffd166] to-[#00f5d4]"
                style={{
                  width: `${baseRadius * 2}px`,
                  left: `-${baseRadius}px`,
                  opacity: 0.5
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Infinity
                }}
              />

              {/* Right strand node */}
              <motion.div
                className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ffd166]"
                style={{
                  left: `${baseRadius - 8}px`,
                  boxShadow: '0 0 15px rgba(255,209,102,0.8), 0 0 30px rgba(255,209,102,0.4)'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.15 + 0.5,
                  repeat: Infinity
                }}
              />
            </div>
          );
        })}
      </motion.div>

      {/* Glow backdrop */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,212,0.3) 0%, rgba(255,209,102,0.2) 50%, transparent 70%)'
        }}
      />
    </div>
  );
};

export default DNAHelix;
