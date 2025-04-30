import Header from "@/components/ui/Header";
import React from "react";
import MemoryCard from "../ui/MemoryCard";

const Story = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-14 space-y-6">
      <Header header="story" />
      <div className="flex flex-col md:flex-row gap-6">
        <p className="md:w-1/3">
          My passion lies in the intersection of art and technology, creating
          visually captivating interfaces and elevating overall user digital
          experiences.
        </p>
        <div className="space-y-6 md:w-2/3">
          <p>
            I hold a Bachelor of Technology in Computer Science from the
            esteemed Art University and a Master of Fine Arts in Interactive
            Design. This academic foundation has equipped me with a solid
            understanding of the principles that underpin effective interaction
            design, providing me with the knowledge to create designs that
            seamlessly blend aesthetics and functionality.
          </p>
          <div className="space-y-6">
            <Header header="MEMORIES" />
            <div className="grid grid-cols-1 gap-4">
              <MemoryCard />
              <MemoryCard />
              <MemoryCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
