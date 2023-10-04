const Welcome = ({ name = "guest",age}) => {
  return <>
   <p>Welcome, {name}!</p>
   <p>Your age is {age}!</p>
  </>
 
};

export default Welcome;

//se non passo il parametro stranamente non mi da errore,pero nessun nome viene visualizzato
