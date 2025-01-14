export default function Stars() {
  //Recuerda... Logica para hacer la esleta Aqui//
  return (
    <div className="stars">
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`star star${i + 1}`}></div>
      ))}
    </div>
  );
}
