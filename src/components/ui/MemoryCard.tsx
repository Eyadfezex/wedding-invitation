"use client";
import React from "react";
import { Card, CardContent } from "./card";
import { Separator } from "./separator";
import { motion } from "framer-motion";
import { withAnimatedAppearance } from "../hoc/withAnimatedAppearance";

/**
 * Props for the MemoryCard component
 * @interface MemoryCardProps
 * @property {string} [date] - The date to display on the card. Defaults to "Nov 1, 2022"
 * @property {string} [imageSrc] - The source URL for the memory image. Defaults to a placeholder image
 */
interface MemoryCardProps {
  date?: string;
  imageSrc?: string;
}

/**
 * A card component that displays a memory with a date and an image
 * @component
 * @param {MemoryCardProps} props - The component props
 * @returns {React.ReactElement} A memory card with hover animations
 *
 * @example
 * ```tsx
 * <MemoryCard
 *   date="Dec 25, 2023"
 *   imageSrc="/path/to/image.jpg"
 * />
 * ```
 */
const MemoryCard: React.FC<MemoryCardProps> = ({
  date = "Nov 1, 2022",
  imageSrc = "/54a810555979f3b9ac4515d9101e071bffc740ba.jpg",
}) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Card className="bg-primary flex justify-between items-center !py-4 shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="flex items-center w-full h-full justify-between !px-6">
          <div className="flex flex-col gap-2">
            <p className="text-white text-2xl font-semibold">{date}</p>
          </div>
          <Separator
            orientation="vertical"
            className="!h-[3.5rem] !bg-[#1212121A] !w-1 rounded-full mx-4"
          />
          <div className="relative h-[6rem] w-[10rem] rounded-2xl overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={imageSrc}
              alt="memory"
              className="absolute w-full h-full object-cover transition-transform"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default withAnimatedAppearance(MemoryCard);
