import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, Zap, Trophy, ArrowRight, User, Heart } from 'lucide-react';

interface LandingScreenProps {
  onStart: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onStart }) => {
  const [showNameEntry, setShowNameEntry] = useState(false);
  const [userName, setUserName] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStomachClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowNameEntry(true);
      setIsAnimating(false);
    }, 500);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      // Store the name for later use
      localStorage.setItem('learnerbot_username', userName.trim());
      onStart();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [-20, 20, -20]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"
        />
      </div>

      <AnimatePresence mode="wait">
        {!showNameEntry ? (
          <motion.div
            key="main-screen"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-10 text-center max-w-6xl mx-auto"
          >
            {/* Title */}
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-black mb-8"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Meet Your AI Learning Buddy
              </span>
            </motion.h1>

            {/* AI Model */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                {/* AI Robot Body */}
                <div className="relative w-80 h-96 mx-auto">
                  {/* Head */}
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-2xl shadow-2xl border-4 border-white/20"
                  >
                    {/* Eyes */}
                    <div className="flex justify-center items-center h-full space-x-3">
                      <motion.div
                        animate={{ scale: [1, 0.8, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-3 h-3 bg-white rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 0.8, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.1 }}
                        className="w-3 h-3 bg-white rounded-full"
                      />
                    </div>
                    
                    {/* Antenna */}
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full"
                    >
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                    </motion.div>
                  </motion.div>

                  {/* Body */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-3xl shadow-2xl border-4 border-white/10"
                  >
                    {/* Chest Panel */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl border border-blue-400/30">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-xl flex items-center justify-center"
                      >
                        <Brain className="w-8 h-8 text-cyan-400" />
                      </motion.div>
                    </div>

                    {/* Clickable Stomach Area */}
                    <motion.button
                      onClick={handleStomachClick}
                      whileHover={{ scale: 1.1, glow: true }}
                      whileTap={{ scale: 0.95 }}
                      animate={isAnimating ? { 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      } : {}}
                      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center group cursor-pointer border-2 border-white/20"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 text-white"
                      >
                        <Heart className="w-full h-full group-hover:text-pink-200" />
                      </motion.div>
                      
                      {/* Pulse effect */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full"
                      />
                    </motion.button>

                    {/* Side Panels */}
                    <div className="absolute top-8 -left-2 w-4 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-l-lg">
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-full h-full bg-green-300 rounded-l-lg"
                      />
                    </div>
                    <div className="absolute top-8 -right-2 w-4 h-8 bg-gradient-to-l from-red-400 to-pink-400 rounded-r-lg">
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        className="w-full h-full bg-red-300 rounded-r-lg"
                      />
                    </div>
                  </motion.div>

                  {/* Arms */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-28 -left-8 w-6 h-20 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full shadow-lg"
                  />
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-28 -right-8 w-6 h-20 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full shadow-lg"
                  />

                  {/* Legs */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <motion.div
                      animate={{ scaleY: [1, 0.95, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-8 h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full shadow-lg"
                    />
                    <motion.div
                      animate={{ scaleY: [1, 0.95, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                      className="w-8 h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full shadow-lg"
                    />
                  </div>
                </div>

                {/* Floating particles around the robot */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.sin(i) * 10, 0],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                    style={{
                      top: `${20 + i * 10}%`,
                      left: `${10 + i * 15}%`
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Instruction Text */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-center mb-8"
            >
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Click on my <span className="text-pink-400 font-bold animate-pulse">heart</span> to start your learning adventure!
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
                <span>I'm excited to learn your name!</span>
                <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
              </div>
            </motion.div>

            {/* Features Preview */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              <div className="bg-gray-800/30 backdrop-blur-md rounded-xl p-4 border border-gray-700/50">
                <Zap className="w-6 h-6 text-purple-400 mb-2 mx-auto" />
                <h3 className="text-sm font-bold text-white mb-1">AI-Powered Learning</h3>
                <p className="text-xs text-gray-400">Smart conversations tailored for you</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-md rounded-xl p-4 border border-gray-700/50">
                <Trophy className="w-6 h-6 text-cyan-400 mb-2 mx-auto" />
                <h3 className="text-sm font-bold text-white mb-1">Earn Rewards</h3>
                <p className="text-xs text-gray-400">Unlock badges and level up</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-md rounded-xl p-4 border border-gray-700/50">
                <Brain className="w-6 h-6 text-pink-400 mb-2 mx-auto" />
                <h3 className="text-sm font-bold text-white mb-1">Interactive Quizzes</h3>
                <p className="text-xs text-gray-400">Test your knowledge with fun activities</p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="name-entry"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            className="relative z-10 text-center max-w-md mx-auto"
          >
            {/* Animated AI Head */}
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-full shadow-2xl flex items-center justify-center relative"
            >
              <Brain className="w-16 h-16 text-white" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-cyan-400/30 rounded-full"
              />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Hi there, future genius! 🌟
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 mb-8"
            >
              I'm so excited to be your learning buddy! What should I call you?
            </motion.p>

            <motion.form
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              onSubmit={handleNameSubmit}
              className="space-y-6"
            >
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/90 border border-gray-600/60 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-purple-400/60 transition-all duration-300 text-center text-lg"
                  autoFocus
                />
              </div>

              <motion.button
                type="submit"
                disabled={!userName.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 disabled:hover:shadow-none relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Let's Start Learning!
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-gray-500 text-sm mt-6"
            >
              Don't worry, I'll remember your name for our future adventures! 🚀
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LandingScreen;