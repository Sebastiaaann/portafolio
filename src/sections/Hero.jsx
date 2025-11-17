import { useRef } from 'react';
import { AnimatedTextLine } from '../components/AnimatedTextLine';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatedHeaderSection } from '../components/AnimatedHeaderSection';

const Hero = () => {
    const text = `Sistema integral de administración vehicular
que revoluciona la gestión de flotas mediante
tecnología moderna y análisis en tiempo real.`;
  
    return (
        <section id="home" className='flex flex-col justify-end min-h-screen bg-white'> 
            <AnimatedHeaderSection 
                subTitle={"Fleet Technology"}
                title={"FM"}
                text={text}
                textColor={"text-black"}
            />
        </section>
    
    

  )
}
    
export default Hero