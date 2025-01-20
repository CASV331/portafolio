import "../App";

function skills(skills) {
  const { skill, image, bgColor } = skills;
  return (
    <div
      className="skill p-3 w-max-16 md:w-32 h-auto h-max-16 md:h-32 md:h-max-32"
      style={{ "--bg-color": bgColor }}
    >
      <h3 className="hidden">{skill}</h3>
      <img className="skillImg w-14" src={image} alt={skill} />
    </div>
  );
}

export default skills;
