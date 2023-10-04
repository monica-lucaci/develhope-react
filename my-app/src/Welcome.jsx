const Welcome = ({ name = "guest" }) => {
  return <p>Welcome, {name}!</p>;
};

export default Welcome;

//se non passo il parametro stranamente non mi da errore,pero nessun nome viene visualizzato
