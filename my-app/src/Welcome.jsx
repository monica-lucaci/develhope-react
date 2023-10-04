import Age from "./age";

const Welcome = ({ name = "guest", age }) => {
  return (
    <>
      <p>Welcome, {name}!</p>
      <Age age={age} />
    </>
  );
};

export default Welcome;

//se non passo il parametro stranamente non mi da errore,pero nessun nome viene visualizzato
