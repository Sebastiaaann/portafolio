import { useRef } from 'react';
import { AnimatedTextLine } from '../components/AnimatedTextLine';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatedHeaderSection } from '../components/AnimatedHeaderSection';

const Hero = () => {
    const text = `Plataforma inteligente de logística y transporte
que optimiza tus operaciones mediante IA avanzada
y control total de flota en tiempo real.`;
  
    return (
        <section id="inicio" className='flex flex-col justify-end min-h-screen bg-white'> 
            <AnimatedHeaderSection 
                subTitle={"Logística Inteligente"}
                title={"FleetMaster"}
                text={text}
                textColor={"text-black"}
            />
        </section>
    
    

  )
}
    
export default Hero