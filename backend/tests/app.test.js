const request = require('supertest');
const app = require('../server'); // Supondo que você tenha um servidor no arquivo 'server.js'

describe('GET /resultados', () => {
  it('should return the correct results', async () => {
    const response = await request(app).get('/resultados');
    expect(response.status).toBe(200);  // Verifica se a resposta tem status 200
    expect(response.body).toEqual(expect.arrayContaining([
      expect.objectContaining({
        framework: expect.any(String),
        votos: expect.any(Number)
      })
    ]));  // Verifica se o corpo da resposta tem o formato esperado
  });
});
