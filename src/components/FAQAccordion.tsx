import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  itemProp?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="card overflow-hidden" itemProp={item.itemProp}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === index}
            aria-label={item.question}
          >
            <h3 className="text-left font-medium text-body">{item.question}</h3>
            <ChevronDown
              size={20}
              className={`text-teal flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 border-t border-gray-100 pt-4 text-secondary">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
