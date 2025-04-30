import Location from "@/components/sections/Location";
import Story from "@/components/sections/Story";
import ASRP from "@/components/sections/ASRP";
import Scrolling from "@/components/sections/Scrolling";
import GiftMessage from "@/components/sections/GiftMessage";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Location />
      <ASRP />
      <Scrolling />
      <GiftMessage />
    </main>
  );
}
