import { motion, AnimatePresence } from 'framer-motion';

interface StepCardProps {
  step: {
    number: string;
    title: string;
    subtitle: string;
    content: string;
    details: string[];
    warning: string;
  };
  index: number;
  isActive: boolean;
  onToggle: () => void;
}

const StepCard = ({ step, index, isActive, onToggle }: StepCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative ${isEven ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'} w-full md:w-[85%] lg:w-[75%]`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Step number floating */}
      <div
        className={`absolute -top-4 ${isEven ? 'left-4 md:-left-4' : 'right-4 md:-right-4'} font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[#00f5d4]/10 pointer-events-none select-none`}
      >
        {step.number}
      </div>

      <button
        onClick={onToggle}
        className="w-full text-left group"
        aria-expanded={isActive}
      >
        <div
          className={`border ${isActive ? 'border-[#00f5d4]' : 'border-[#00f5d4]/30'} p-4 md:p-6 lg:p-8 relative transition-all duration-300 hover:border-[#00f5d4]/60 bg-[#0a0e1a]/80 backdrop-blur-sm`}
        >
          {/* Status indicator */}
          <div className={`absolute top-4 md:top-6 right-4 md:right-6 flex items-center gap-2`}>
            <span className="font-mono text-[8px] md:text-[10px] text-[#00f5d4]/60 hidden sm:inline">
              {isActive ? 'EXPANDED' : 'TAP TO EXPAND'}
            </span>
            <motion.div
              className="w-5 h-5 md:w-6 md:h-6 border border-[#00f5d4]/50 flex items-center justify-center"
              animate={{ rotate: isActive ? 45 : 0 }}
            >
              <span className="text-[#00f5d4] text-sm md:text-base">+</span>
            </motion.div>
          </div>

          {/* Header */}
          <div className="pr-16 md:pr-24">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-[#ffd166]">
              {step.subtitle}
            </span>
            <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-[#e8e8e8] mt-1 md:mt-2 group-hover:text-[#00f5d4] transition-colors">
              {step.title}
            </h3>
          </div>

          {/* Preview content */}
          <p className="font-mono text-xs md:text-sm text-[#e8e8e8]/60 mt-3 md:mt-4 leading-relaxed line-clamp-2">
            {step.content}
          </p>

          {/* Expanded content */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-4 md:pt-6 mt-4 md:mt-6 border-t border-[#00f5d4]/20">
                  {/* Full content */}
                  <p className="font-mono text-sm md:text-base text-[#e8e8e8]/80 mb-4 md:mb-6 leading-relaxed">
                    {step.content}
                  </p>

                  {/* Checklist */}
                  <div className="bg-[#00f5d4]/5 border border-[#00f5d4]/20 p-4 md:p-6 mb-4 md:mb-6">
                    <div className="font-mono text-[10px] md:text-xs text-[#00f5d4] mb-3 md:mb-4 tracking-wider">
                      REQUIRED ACTIONS:
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      {step.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2 md:gap-3 font-mono text-xs md:text-sm text-[#e8e8e8]/70"
                        >
                          <span className="text-[#ffd166] mt-0.5 flex-shrink-0">{'>'}</span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Warning */}
                  <div className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-[#ffd166]/10 border-l-2 border-[#ffd166]">
                    <span className="text-[#ffd166] font-mono text-base md:text-lg flex-shrink-0">!</span>
                    <span className="font-mono text-[10px] md:text-xs text-[#ffd166]/90">
                      {step.warning}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-3 md:w-4 h-3 md:h-4 border-l-2 border-t-2 border-[#00f5d4]" />
          <div className="absolute top-0 right-0 w-3 md:w-4 h-3 md:h-4 border-r-2 border-t-2 border-[#00f5d4]" />
          <div className="absolute bottom-0 left-0 w-3 md:w-4 h-3 md:h-4 border-l-2 border-b-2 border-[#00f5d4]" />
          <div className="absolute bottom-0 right-0 w-3 md:w-4 h-3 md:h-4 border-r-2 border-b-2 border-[#00f5d4]" />
        </div>
      </button>

      {/* Connecting line to next step */}
      {index < 5 && (
        <div className={`hidden md:block absolute ${isEven ? 'right-0 md:right-[-12%] lg:right-[-8%]' : 'left-0 md:left-[-12%] lg:left-[-8%]'} top-full w-px h-8 md:h-12 bg-gradient-to-b from-[#00f5d4]/30 to-transparent`} />
      )}
    </motion.div>
  );
};

export default StepCard;
