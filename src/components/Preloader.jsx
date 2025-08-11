// import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";

// export default function Preloader() {
//   const [loading, setLoading] = useState(true);
//   const handRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Wave animation on hand emoji (rotate back and forth)
//     const waveTimeline = gsap.timeline({ repeat: -1, yoyo: true });
//     waveTimeline.to(handRef.current, {
//       rotation: 20,
//       transformOrigin: "70% 70%",
//       duration: 0.5,
//       ease: "power1.inOut",
//     });
//     waveTimeline.to(handRef.current, {
//       rotation: -20,
//       duration: 0.5,
//       ease: "power1.inOut",
//     });
//     waveTimeline.to(handRef.current, {
//       rotation: 0,
//       duration: 0.5,
//       ease: "power1.inOut",
//     });

//     // Fade in container from opacity 0 to 1
//     gsap.to(containerRef.current, {
//       opacity: 1,
//       duration: 0.8,
//       ease: "power2.out",
//     });

//     // After 2 seconds, fade out container and then hide preloader
//     const timer = setTimeout(() => {
//       gsap.to(containerRef.current, {
//         opacity: 0,
//         duration: 0.7,
//         ease: "power2.inOut",
//         onComplete: () => {
//           setLoading(false);
//           gsap.from(".project-card", {
//             y: 30,
//             opacity: 0,
//             duration: 0.8,
//             stagger: 0.2,
//             ease: "power3.out",
//           });
//         },
//       });
//     }, 2000);

//     return () => {
//       clearTimeout(timer);
//       waveTimeline.kill();
//     };
//   }, []);

//   if (!loading) return null;

//   return (
//     <div
//       ref={containerRef}
//       style={{ opacity: 0 }} // Start hidden to prevent flicker
//       className="preloader fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[9999]"
//     >
//       <div
//         ref={handRef}
//         className="text-6xl select-none"
//         aria-label="Waving hand emoji"
//       >
//         👋
//       </div>
//       <h1 className="text-4xl font-bold tracking-wide mt-4">HARSH RAJPUT</h1>
//       <p className="text-lg mt-2 font-light">Data Analyst</p>
//     </div>
//   );
// }
