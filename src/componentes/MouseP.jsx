import { useEffect, useState } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const { pageX, pageY } = e;
      setPosition({ x: pageX, y: pageY });
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(255, 255, 255, 1.0)",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          blur: 100,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </>
  );
};

function Mouse() {
  return (
    <main>
      <MouseFollower />
    </main>
  );
}

export default Mouse;
