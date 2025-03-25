import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TimelineModal from './components/TimelineModal';
import { timelineData } from './data/timelineData';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const timeline = document.getElementById('timeline');
    const pointWidth = 128;
    const scrollAmount = pointWidth * 2;

    if (timeline) {
      const targetScroll = direction === 'left' 
        ? Math.max(0, timeline.scrollLeft - scrollAmount)
        : timeline.scrollLeft + scrollAmount;
      
      timeline.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      
      setScrollPosition(targetScroll);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-900 to-black text-white p-8 flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-8">
        Linha do Tempo das Redes Sociais
      </h1>

      <div className="relative h-[200px]">
        {/* Navigation Buttons */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm z-10 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm z-10 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Timeline Container */}
        <div
          id="timeline"
          className="overflow-x-auto hide-scrollbar relative mx-12 h-full"
        >
          {/* Timeline Events Container */}
          <div className="flex gap-32 h-full relative min-w-max px-12 items-center">
            {/* Timeline Line */}
            <div className="h-1 bg-blue-500 absolute top-1/2 left-12 right-12 -translate-y-1/2" />
            
            {timelineData.map((event, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="text-sm mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {event.year}
                </div>
                <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-900 group-hover:bg-blue-400 group-hover:scale-125 transition-all duration-300 relative z-10" />
                <div className="w-32 text-center mt-4 text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {event.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Container */}
      <div className="flex-1 container mx-auto max-w-6xl overflow-hidden">
        {selectedEvent && (
          <TimelineModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </div>
    </div>
  );
}

export default App;