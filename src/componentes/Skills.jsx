import "../App";

function skills(skills) {
  const { skill, image } = skills;
  document.addEventListener("pointerenter", (e) => {
    e.preventDefault();
    const skillDiv = document.querySelector(".skill");
    skillDiv.classList.add("focus" + skill);
  });
  return (
    <div className="skill">
      <h3 className="hidden">{skill}</h3>
      <img className="skillImg w-14" src={image} alt="imagen" />
    </div>
  );
}

export default skills;
