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
        className="mouseP"
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 1.0)",
          borderRadius: "50%",
          opacity: 1,
          pointerEvents: "none",
          left: -10,
          top: -10,
          width: 20,
          height: 20,
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
