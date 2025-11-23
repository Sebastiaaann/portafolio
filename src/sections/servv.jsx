import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const ServiceSummary = () => {
useGSAP(() => {
    // GSAP animation logic for ServiceSummary section can be added here
    gsap.to("#title-service-1", {
        xPercent: 20,
        scrollTrigger: {
            targer: "#title-service-1",
            scrub: true,
        }
    });
    gsap.to("#title-service-2", {
        xPercent: -30,
        scrollTrigger: {
            targer: "#title-service-2",
            scrub: true,
        }
    });
    gsap.to("#title-service-3", {
        xPercent: 100,
        scrollTrigger: {
            targer: "#title-service-3",
            scrub: true,
        }
    });
    gsap.to("#title-service-4", {
        xPercent: -100,
        scrollTrigger: {
            targer: "#title-service-4",
            scrub: true,
        }
    });
});
    return (
    
    <section className="py-20 overflow-hidden font-light leading-snug text-center
    contact-text-responsive bg-amber-700">
       
        <div id="title-service-1">
            <p>Real Time Control</p>
        </div>
        
        <div id="title-service-2" className="flex items-center justify-center 
        gap-3 translate-x-16">
        
            <p className="font-normal">Cost Optimization</p>
            <div className="w-10 h-1 md:w-32 bg-gold"/>
            <p>Financial Balance</p>
        
        </div>
            
        <div id="title-service-3" className="flex items-center 
        justify-center gap-3 
        -translate-x-48"
        >
            
            <p>Fleet </p>
            <div className="w-10 h-1 md:w-32 bg-gold"/>
            <p className="italic">Predictive </p>
            <div className="w-10 h-1 md:w-32 bg-gold"/>
            <p>Automated</p>
        
        </div>
        
        <div id="title-service-4" className="translate-x-48">
                <p>Data Driven Decisions</p>
        </div>
       
        
    </section>
  )
}
