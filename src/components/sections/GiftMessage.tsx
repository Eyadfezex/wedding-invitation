import React from "react";
import { Button } from "../ui/button";
import Header from "../ui/Header";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const GiftMessage = () => {
  return (
    <section
      className=",
    max-w-4xl px-4 space-y-6 pb-14 mx-auto"
    >
      <Header header="GIFT MESSAGE" />
      <form action="" className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Input className="" placeholder="Jane Smith" type="text" />
          <Input className="" placeholder="jane@framer.com" type="email" />
        </div>
        <Textarea placeholder="message" className="max-h-40" />
        <Button className="bg-primary !py-6" type="submit">
          Send
        </Button>
      </form>
    </section>
  );
};

export default GiftMessage;
