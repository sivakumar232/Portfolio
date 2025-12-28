import { useEffect } from "react";

const OnekoLoader = () => {
  useEffect(() => {
    const script = document.createElement("script");
    const base = import.meta.env.BASE_URL;
    /* ensure proper path construction handling possible trailing slash */
    const scriptUrl = base.endsWith('/') ? `${base}js/oneko.js` : `${base}/js/oneko.js`;

    script.src = scriptUrl;
    script.async = true;

    script.onload = () => {
      console.log("Oneko script loaded");
      if (typeof window.oneko === "function") {
        const catImage = base.endsWith('/') ? `${base}js/oneko.gif` : `${base}/js/oneko.gif`;
        window.oneko(catImage);
        console.log("Oneko initialized");
      } else {
        console.error("window.oneko is not a function");
      }
    };

    script.onerror = () => {
      console.error("Failed to load oneko.js");
    };

    document.body.appendChild(script);

    return () => {
      // Clean up: remove the cat and script on unmount
      const neko = document.getElementById("oneko");
      if (neko) neko.remove();
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default OnekoLoader;
