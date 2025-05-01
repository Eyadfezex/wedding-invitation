import Head from "@/components/ui/Head";
import React from "react";
import MemoryCard from "../ui/MemoryCard";

/**
 * Story Section Component
 *
 * Displays a personal story section with biography and memory cards.
 * The layout adapts responsively between mobile and desktop views.
 *
 * @component
 * @returns {JSX.Element} Rendered Story section
 */
const Story: React.FC = () => {
  // Memory cards to display
  const memoryCount = 3;

  return (
    <section
      className="max-w-5xl mx-auto px-4 py-[8rem] space-y-6"
      aria-labelledby="story-heading"
    >
      <Head header="story" />
      <div className="flex flex-col md:flex-row gap-6 xl:text-lg">
        {/* Bio introduction */}
        <p className="md:w-1/2 text-justify">
          My passion lies in the intersection of art and technology, creating
          visually captivating interfaces and elevating overall user digital
          experiences.
        </p>

        <div className="space-y-6 md:w-2/4">
          {/* Detailed biography */}
          <p className="text-justify">
            I hold a Bachelor of Technology in Computer Science from the
            esteemed Art University and a Master of Fine Arts in Interactive
            Design. This academic foundation has equipped me with a solid
            understanding of the principles that underpin effective interaction
            design, providing me with the knowledge to create designs that
            seamlessly blend aesthetics and functionality.
          </p>

          {/* Memories section */}
          <div className="space-y-6">
            <Head header="MEMORIES" />
            <div className="grid grid-cols-1 gap-4">
              {Array.from({ length: memoryCount }).map((_, index) => (
                <MemoryCard key={`memory-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
