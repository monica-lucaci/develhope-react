import Clock from "./Clock";
import Container from "./Container";
import Counter from "./Counter";
import Login from "./Login";
import TodoList from "./TodoList";
import Welcome from "./Welcome";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";

const App = () => {
  const handleLogin = (formData) => {
    console.log("Login data:", formData);
  };

  const [language, setLanguage] = useState("en");

  return (
    <>
      <div>
        <label htmlFor="languageSelect">Select a Language:</label>
        <select
          id="languageSelect"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="ro">Romanian</option>
          <option value="it">Italian</option>
          <option value="de">German</option>
        </select>
      </div>

      <Container
        title={
          <h1 style={{ color: "#8B0000" }}>
            This is my app! (Language: {language})
          </h1>
        }>

        <LanguageContext.Provider value={language}> 
        {/* If you remove the LanguageContext.Provider, the Clock component loses access to the selected language,
         and it will always display the "Current Time" message in the default language ("en")
         regardless of the user's language selection */}
          <Welcome name="Monica" />

          <Counter initialValue={0} incrementAmount={1} decrementAmount={1} />

          <Login onLogin={handleLogin} />

          <Clock />

          <TodoList />
        </LanguageContext.Provider>
      </Container>
    </>
  );
};

export default App;
