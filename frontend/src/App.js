import React, { useState, useEffect } from 'react';
import './App.css';

// Importe as imagens
import hqaImage from './assets/hqa.png'; // Importe a imagem
// import robotFrameworkImg from './assets/robot-framework.png';
// import seleniumImg from './assets/selenium.png';
// import cypressImg from './assets/cypress.png';
// import playwrightImg from './assets/playwright.png';


function App() {
  const [selectedFramework, setSelectedFramework] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [thankYouVisible, setThankYouVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Envia os dados para o backend
    const response = await fetch('http://localhost:5000/enquete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ framework: selectedFramework }),
    });

    if (response.ok) {
      setThankYouVisible(true);
      setSelectedFramework('');
      fetchResults();
    } else {
      alert('Ocorreu um erro. Tente novamente!');
    }

    setLoading(false);
  };

  const fetchResults = async () => {
    try {
      const response = await fetch('http://localhost:5000/resultados');
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Erro ao carregar os resultados', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchResults, 1000); // Atualizar os resultados a cada 1 segundo

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="App">
      <div className="container-wrapper"> {/* Container Wrapper para organizar os containers */}
        <div className="container">
          <div className="image-container">
            <img src={hqaImage} alt="HQA" />
          </div>
          <h1>Qual framework você prefere?</h1>

          <form onSubmit={handleSubmit} className="poll-form">
            <div className="option">
              <input
                type="radio"
                id="robot"
                name="framework"
                value="Robot Framework"
                checked={selectedFramework === 'Robot Framework'}
                onChange={(e) => setSelectedFramework(e.target.value)}
                required
              />
              <label htmlFor="robot">Robot Framework</label>
            </div>
            <div className="option">
              <input
                type="radio"
                id="selenium"
                name="framework"
                value="Selenium"
                checked={selectedFramework === 'Selenium'}
                onChange={(e) => setSelectedFramework(e.target.value)}
                required
              />
              <label htmlFor="selenium">Selenium</label>
            </div>
            <div className="option">
              <input
                type="radio"
                id="cypress"
                name="framework"
                value="Cypress"
                checked={selectedFramework === 'Cypress'}
                onChange={(e) => setSelectedFramework(e.target.value)}
                required
              />
              <label htmlFor="cypress">Cypress</label>
            </div>
            <div className="option">
              <input
                type="radio"
                id="playwright"
                name="framework"
                value="Playwright"
                checked={selectedFramework === 'Playwright'}
                onChange={(e) => setSelectedFramework(e.target.value)}
                required
              />
              <label htmlFor="playwright">Playwright</label>
            </div>

            <button type="submit">Enviar</button>
          </form>

          {thankYouVisible && (
            <div className="thank-you-message">
              <p>Obrigado por participar da enquete!</p>
            </div>
          )}

          {loading && <div id="loading">Carregando...</div>}
        </div>

        <div className="container">
        <img src={hqaImage} alt="HQA" />
          <h2>Resultados</h2>
          <ul id="results-list">
            {results.length === 0 ? (
              <li>Sem resultados ainda...</li>
            ) : (
              results.map((result) => (
                <li key={result.framework}>
                  {result.framework}: {result.votos} votos
                </li>
              ))
            )}
          </ul>
          <div className="total-votes">
            Total de votos: {results.reduce((total, result) => total + result.votos, 0)}
          </div>
        </div>
      </div>
      {/* Adicionando as imagens em movimento */}
      {/* <img src={robotFrameworkImg} alt="Robot Framework" className="moving-image" />
      <img src={seleniumImg} alt="Selenium" className="moving-image" />
      <img src={cypressImg} alt="Cypress" className="moving-image" />
      <img src={playwrightImg} alt="Playwright" className="moving-image" /> */}
    </div>
  );
}

export default App;
