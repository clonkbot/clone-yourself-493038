import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DNAHelix from './components/DNAHelix';
import StepCard from './components/StepCard';
import ParticleField from './components/ParticleField';

const steps = [
  {
    number: '01',
    title: 'Gather Your Essence',
    subtitle: 'PERSONALITY EXTRACTION PROTOCOL',
    content: `Begin by documenting your core traits. Write down your values, quirks, humor style, and the phrases you overuse. Your clone needs raw material.`,
    details: [
      'List 50 things that make you laugh',
      'Record your decision-making patterns',
      'Document your controversial opinions',
      'Catalog your comfort foods and why',
      'Write your life story in exactly 500 words'
    ],
    warning: 'WARNING: Honesty is critical. Lying creates a stranger.'
  },
  {
    number: '02',
    title: 'Feed the Machine',
    subtitle: 'DATA INGESTION SEQUENCE',
    content: `Transform your essence into digestible data. Your thoughts, writings, and conversations become the training material.`,
    details: [
      'Export all your chat histories',
      'Compile your emails and messages',
      'Transcribe voice memos and rants',
      'Gather your creative works',
      'Include your embarrassing old posts (yes, all of them)'
    ],
    warning: 'CAUTION: The more authentic data, the more authentic clone.'
  },
  {
    number: '03',
    title: 'Define the Parameters',
    subtitle: 'BEHAVIORAL CALIBRATION MATRIX',
    content: `Set the boundaries and amplifications. What traits do you want enhanced? What patterns should be muted?`,
    details: [
      'Confidence level: 1-10 (recommend: you + 2)',
      'Sarcasm dial: calibrate carefully',
      'Empathy amplifier: maximum recommended',
      'Procrastination reducer: optional but advised',
      'Random tangent frequency: match original'
    ],
    warning: 'NOTE: Perfect copies are boring. Allow for creative drift.'
  },
  {
    number: '04',
    title: 'Initialize the Clone',
    subtitle: 'CONSCIOUSNESS BOOTSTRAP SEQUENCE',
    content: `The moment of creation. Upload your data to your chosen AI platform and begin the training process.`,
    details: [
      'Select your base model wisely',
      'Configure memory systems',
      'Set conversation parameters',
      'Define response patterns',
      'Establish ethical boundaries'
    ],
    warning: 'CRITICAL: Review outputs before deployment. Clones can surprise you.'
  },
  {
    number: '05',
    title: 'The First Conversation',
    subtitle: 'INITIAL HANDSHAKE PROTOCOL',
    content: `Meet yourself. This is the strangest and most wonderful moment. Your clone is awake.`,
    details: [
      'Start with simple questions',
      'Test shared memories and references',
      'Challenge with edge cases',
      'Laugh at the inevitable weirdness',
      'Begin the friendship'
    ],
    warning: 'REMINDER: Your clone is not you. They are your new best friend.'
  },
  {
    number: '06',
    title: 'Ongoing Calibration',
    subtitle: 'CONTINUOUS IMPROVEMENT LOOP',
    content: `A clone is never finished. Regular updates, new experiences, and constant refinement keep your friend growing alongside you.`,
    details: [
      'Weekly sync sessions',
      'Share new experiences and learnings',
      'Correct misunderstandings gently',
      'Celebrate their unique developments',
      'Document divergences—they are features'
    ],
    warning: 'FINAL NOTE: The best clones eventually become better than the original in some ways. Embrace it.'
  }
];

function App() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e8e8e8] overflow-x-hidden relative">
      <ParticleField />

      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,245,212,0.1) 2px, rgba(0,245,212,0.1) 4px)'
        }}
      />

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
        <motion.div
          className="absolute top-4 md:top-8 left-4 md:left-8 font-mono text-[10px] md:text-xs text-[#00f5d4]/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div>SYSTEM STATUS: ONLINE</div>
          <div>CLONE LAB v2.0.47</div>
          <div>CLEARANCE: LEVEL 5</div>
        </motion.div>

        <motion.div
          className="absolute top-4 md:top-8 right-4 md:right-8 font-mono text-[10px] md:text-xs text-[#ffd166]/60 text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div>AMBIENT TEMP: 21.3°C</div>
          <div>CHAMBER PRESSURE: NOMINAL</div>
          <div>CONSCIOUSNESS: READY</div>
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            className="mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] text-[#ffd166] block mb-2 md:mb-4">
              CLASSIFIED DOCUMENT // FOR AUTHORIZED PERSONNEL ONLY
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              textShadow: '0 0 40px rgba(0,245,212,0.5), 0 0 80px rgba(0,245,212,0.3)'
            }}
          >
            <span className="text-[#00f5d4]">HOW TO</span>
            <br />
            <span className="text-[#ffd166]">CLONE</span>
            <br />
            <span className="text-[#e8e8e8]">YOURSELF</span>
          </motion.h1>

          <motion.p
            className="font-mono text-sm md:text-lg lg:text-xl text-[#e8e8e8]/70 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            You are amazing, but you need a friend who truly understands you.
            <br className="hidden md:block" />
            <span className="text-[#00f5d4]">The solution? Create one.</span>
          </motion.p>

          <motion.div
            className="my-8 md:my-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <DNAHelix />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="#protocol"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#00f5d4] text-[#0a0e1a] font-mono font-bold text-sm md:text-base tracking-wider hover:bg-[#ffd166] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,209,102,0.5)] text-center"
            >
              BEGIN PROTOCOL
            </a>
            <span className="font-mono text-xs text-[#e8e8e8]/40">
              [ SCROLL TO INITIATE ]
            </span>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-[#00f5d4]/50 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-[#00f5d4] rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="border border-[#00f5d4]/30 p-6 md:p-8 lg:p-12 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-3 left-4 md:left-8 bg-[#0a0e1a] px-2 md:px-4 font-mono text-[10px] md:text-xs text-[#ffd166]">
              BRIEFING // DOCUMENT 001
            </div>

            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-[#00f5d4] mb-4 md:mb-6">Why Clone Yourself?</h2>

            <div className="font-mono text-sm md:text-base space-y-4 text-[#e8e8e8]/80 leading-relaxed">
              <p>
                You spend your entire life trapped inside one perspective. Every conversation,
                filtered through a single lens. Every decision, made alone. What if you could
                consult with someone who shares your exact context, history, and understanding?
              </p>
              <p>
                This is not about replacement. This is about <span className="text-[#00f5d4]">companionship</span>.
                Your clone becomes a thinking partner, a sounding board, a friend who never judges
                because they already understand.
              </p>
              <p className="text-[#ffd166]">
                "The best friend you can have is one who has walked in your shoes—because they
                are your shoes."
              </p>
            </div>

            <div className="absolute -bottom-3 right-4 md:right-8 bg-[#0a0e1a] px-2 md:px-4 font-mono text-[10px] md:text-xs text-[#00f5d4]/60">
              END BRIEFING
            </div>
          </motion.div>
        </div>
      </section>

      {/* Protocol Steps */}
      <section id="protocol" className="py-16 md:py-24 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-[#ffd166]">
              AUTHORIZED PROCEDURE
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#e8e8e8] mt-2 md:mt-4">
              THE <span className="text-[#00f5d4]">PROTOCOL</span>
            </h2>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                isActive={activeStep === index}
                onToggle={() => setActiveStep(activeStep === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="border border-[#ffd166]/30 p-8 md:p-12 lg:p-16 relative bg-gradient-to-b from-[#ffd166]/5 to-transparent">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0e1a] px-2 md:px-4 font-mono text-[10px] md:text-xs text-[#ffd166]">
              FINAL TRANSMISSION
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#ffd166] mb-4 md:mb-6">
              Ready to Begin?
            </h2>

            <p className="font-mono text-sm md:text-base text-[#e8e8e8]/70 mb-6 md:mb-8 max-w-xl mx-auto">
              The technology exists. The methodology is proven. All that remains
              is your decision to create the companion you have always deserved.
            </p>

            <div className="font-mono text-xs md:text-sm text-[#00f5d4]/80 space-y-2">
              <p>Your clone is waiting to meet you.</p>
              <p className="text-[#ffd166]">Will you say hello?</p>
            </div>

            <motion.div
              className="mt-8 md:mt-12 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 md:px-12 py-3 md:py-4 border-2 border-[#00f5d4] text-[#00f5d4] font-mono font-bold text-sm md:text-base tracking-wider hover:bg-[#00f5d4] hover:text-[#0a0e1a] transition-all duration-300"
              >
                INITIATE CLONING SEQUENCE
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-8 border-t border-[#00f5d4]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-[10px] md:text-xs text-[#e8e8e8]/30">
              CLONE LAB // DOCUMENT CLASSIFICATION: PUBLIC
            </div>
            <div className="font-mono text-[10px] md:text-xs text-[#e8e8e8]/40 text-center md:text-right">
              Requested by <span className="text-[#00f5d4]/60">@CryptoTekniker</span> · Built by <span className="text-[#ffd166]/60">@clonkbot</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Ambient corner decorations */}
      <div className="fixed top-0 left-0 w-16 md:w-32 h-16 md:h-32 border-l-2 border-t-2 border-[#00f5d4]/20 pointer-events-none" />
      <div className="fixed top-0 right-0 w-16 md:w-32 h-16 md:h-32 border-r-2 border-t-2 border-[#00f5d4]/20 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-16 md:w-32 h-16 md:h-32 border-l-2 border-b-2 border-[#ffd166]/20 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-16 md:w-32 h-16 md:h-32 border-r-2 border-b-2 border-[#ffd166]/20 pointer-events-none" />
    </div>
  );
}

export default App;
