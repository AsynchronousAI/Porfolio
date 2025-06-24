import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";

import "@/styles/about-section.css";

interface AboutSectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

function AboutSection({ id, title, children }: AboutSectionProps) {
  return (
    <div id={id} className="about-section">
      <BlurFade inView delay={0.4} direction="down">
        <h2 className="about-section-title">{title}</h2>
      </BlurFade>
      {children}
    </div>
  );
}

export default AboutSection;
