const request = require('supertest');
const app = require('../server'); // O arquivo onde você exporta o app do Express

beforeAll(() => {
  // Iniciar o servidor antes dos testes
  server = app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
  });
});

afterAll(() => {
  // Fechar o servidor após os testes
  server.close();
});

describe('GET /resultados', () => {
  it('should return the correct results', async () => {
    const response = await request(app).get('/resultados');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([ // Verifique se o corpo da resposta é um array contendo objetos com os resultados esperados
      expect.objectContaining({
        framework: expect.any(String),
        votos: expect.any(Number),
      })
    ]));
  });
});
