import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className=" image-wrapper">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://sample-sigma-inky.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src="/images/gpt.png" alt="Ryde App Interface" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                mobile-first ChatGPT clone built using Next.js App Router, integrating Google’s Gemini APIs to enable both text-based conversational AI and AI image generation. 
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://resume-editor-lac.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/project2.png"
                    alt="Resume Editor Platform"
                  />
                </a>
              </div>
              <h2>The Resume Editor Platform</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://weather-etl-project.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/project3.png" alt="Weather ETL Dashboard" />
                </a>
              </div>
              <h2>Weather ETL Dashboard</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;