import { useEffect } from "react";

const OnekoLoader = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/oneko.js";
    script.onload = () => {
      if (typeof window.oneko === "function") {
        window.oneko(); // start the cat!
      }
    };
    document.body.appendChild(script);

    return () => {
      // Optional: clean up if you want to remove oneko on unmount
      const neko = document.getElementById("oneko");
      if (neko) neko.remove();
    };
  }, []);

  return null; // nothing to render visually
};

export default OnekoLoader;
