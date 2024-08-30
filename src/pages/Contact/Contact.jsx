import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import "../Contact/contact.css"

const Contact = () => {
  useEffect(() => {
    const widgetScriptSrc = "https://tally.so/widgets/embed.js";

    const load = () => {
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
        return;
      }

      document
        .querySelectorAll("iframe[data-tally-src]:not([src])")
        .forEach((iframeEl) => {
          iframeEl.src = iframeEl.dataset.tallySrc;
        });
    };

    if (typeof Tally !== "undefined") {
      load();
      return;
    }

    if (document.querySelector(`script[src="${widgetScriptSrc}"]`) === null) {
      const script = document.createElement("script");
      script.src = widgetScriptSrc;
      script.onload = load;
      script.onerror = load;
      document.body.appendChild(script);
      return;
    }
  }, []);
  return (
    <>
      <Navbar />

      <div className="contact_me">
        <iframe
          data-tally-src="https://tally.so/embed/n0LW0P?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="1"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Contact form
"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
