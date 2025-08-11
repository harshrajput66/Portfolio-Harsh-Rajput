import React, { useEffect, useState } from "react";

export default function TypedText() {
  const texts = ["Hey, I'm Harsh Rajput", "Welcome to my portfolio"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayAfterTyping = 1500;
  const delayAfterDeleting = 700;

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting) {
      // Typing phase
      if (charIndex <= texts[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[textIndex].slice(0, charIndex));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      }
      if (charIndex === texts[textIndex].length + 1) {
        timeout = setTimeout(() => setIsDeleting(true), delayAfterTyping);
      }
    } else {
      // Deleting phase
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(texts[textIndex].slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      }
      if (charIndex === 0) {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
          setCharIndex(0);
        }, delayAfterDeleting);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
      {displayText}
      <span className="blink">|</span>
      <style>{`
        .blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </h1>
  );
}
