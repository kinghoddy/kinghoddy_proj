import { Fade, Grow, Zoom, Slide } from "@mui/material";
import React, { useRef, useState } from "react";

function Animator({
  children,
  timeout,
  direction = "right",
  variant = "fade",
  style,
  delay,
}) {
  const ref = useRef();
  const [inn, setIn] = useState(false);
  React.useEffect(() => {
    if (ref.current) {
      checkScrolled();
      window.addEventListener("scroll", checkScrolled);
    } else window.removeEventListener("scroll", checkScrolled);
    return () => window.removeEventListener("scroll", checkScrolled);
  }, [ref]);
  const props = {
    in: inn,
    style,
    timeout: {
      enter: timeout,
      exit: 500,
    },
    ref,
    children,
  };
  const checkScrolled = () => {
    const top = ref.current.getBoundingClientRect().top;
    const bottom = ref.current.getBoundingClientRect().bottom;
    if (top > 0 && top < window.innerHeight) {
      setTimeout(() => {
        setIn(true);
      }, delay || 0);
    } else if (top > window.innerHeight) setIn(false);
    if (bottom < 0) setIn(false);
  };
  const types = {
    fade: <Fade {...props} />,
    zoom: <Zoom {...props} />,
    grow: <Grow {...props} />,
    slide: <Slide direction={direction} {...props} />,
  };
  return types[variant];
}

export default Animator;
