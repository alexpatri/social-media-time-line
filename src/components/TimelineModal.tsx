import React from 'react';
import { X } from 'lucide-react';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  image: string;
}

interface TimelineModalProps {
  event: TimelineEvent;
  onClose: () => void;
}

const TimelineModal: React.FC<TimelineModalProps> = ({ event, onClose }) => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-black rounded-xl w-full h-full overflow-hidden relative mt-4 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>
      
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/2 h-full">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8 md:w-1/2">
          <div className="text-blue-400 font-semibold mb-2">{event.year}</div>
          <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
          <p className="text-gray-300 leading-relaxed">{event.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TimelineModal;