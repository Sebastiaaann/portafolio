import { useRef } from "react";
import { AnimatedHeaderSection } from "../components/AnimatedHeaderSection";
import { AnimatedTextLine } from "../components/AnimatedTextLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Innovación en cada kilómetro
    construimos soluciones logísticas inteligentes
    desde la planificación hasta la entrega final`;
  const aboutText = `Obsesionados con optimizar cada ruta y reducir costos operativos—desde interfaces intuitivas hasta sistemas de IA que predicen el futuro de tu flota. Cada línea de código es una promesa: eficiencia que tus clientes sienten.
  Nuestra misión:
🚛 Digitalizar la logística latinoamericana (un camión a la vez)
📊 Democratizar el acceso a herramientas empresariales de clase mundial
🌍 Reducir la huella de carbono con rutas optimizadas por IA
⚡ Hacer que gestionar una flota sea tan simple como pedir un Uber`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="acerca" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Logística inteligente, resultados reales"}
        title={"Nosotros"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/fleet-trucks.jpg"
          alt="fleet operations"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLine text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;