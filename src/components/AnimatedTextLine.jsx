import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AnimatedTextLine = ({ text, className}) => {
    const lines= text.split('\n').filter(line => line.trim() !== '');
    const containerRef = useRef(null);
    const lineRefs = useRef([]);
    useGSAP(() => {
        if (lineRefs.current.length > 0) {
            // GSAP animation logic here
            gsap.fromTo(lineRefs.current,
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.3,
                    ease: "back.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                    }
                }
            );
        }
    });
  
        return (
    <div ref={containerRef} className={className}>
        {lines.map((line, index) => (
            <div key={index} className="overflow-hidden">
                <span 
                key={index}
                ref={(el) => (lineRefs.current[index] = el)}
                className="block leading-relaxed tracking-wide text-pretty">{line}</span>
            </div>
        ))}
    </div>
  )
}
