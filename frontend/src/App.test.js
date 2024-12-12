import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('should render the voting form correctly', () => {
  render(<App />);

  // Verifica se as opções de frameworks estão presentes
  expect(screen.getByLabelText(/Robot Framework/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Selenium/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Cypress/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Playwright/i)).toBeInTheDocument();
});

test('should submit the form and show thank you message', () => {
  render(<App />);

  // Simula a seleção de uma opção e o envio do formulário
  fireEvent.click(screen.getByLabelText(/Selenium/i));
  fireEvent.click(screen.getByText(/Enviar/i));

  // Verifica se a mensagem de agradecimento aparece após o envio
  expect(screen.getByText(/Obrigado por participar da enquete!/i)).toBeInTheDocument();
});
