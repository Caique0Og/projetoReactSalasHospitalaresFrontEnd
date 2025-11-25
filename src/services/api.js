const API_BASE_URL = 'http://localhost:5001';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    console.log('🔧 Fazendo requisição para:', url);
    console.log('🔧 Opções:', options);

    const config = {
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      ...options,
    };

    // Se tiver body, converte para JSON
    if (config.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body);
    }

    try {
      const response = await fetch(url, config);
      
      console.log('📡 Resposta recebida:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        ok: response.ok,
        url: response.url
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Erro na resposta:', errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log('✅ Dados recebidos:', data);
      return data;

    } catch (error) {
      console.error('💥 API Request failed:', error);
      console.error('💥 URL da requisição:', url);
      throw error;
    }
  }

  // ===== CLIENTES =====
  async getClientes() {
    return this.request('/api/clientes');
  }

  async createCliente(clienteData) {
    return this.request('/api/clientes', {
      method: 'POST',
      body: clienteData,
    });
  }

  async updateCliente(id, clienteData) {
    return this.request(`/api/clientes/${id}`, {
      method: 'PUT',
      body: clienteData,
    });
  }

  async deleteCliente(id) {
    return this.request(`/api/clientes/${id}`, {
      method: 'DELETE',
    });
  }

  // ===== QUARTOS =====
  async getQuartos() {
    return this.request('/api/quartos');
  }

  async createQuarto(quartoData) {
    return this.request('/api/quartos', {
      method: 'POST',
      body: quartoData,
    });
  }

  async updateQuarto(id, quartoData) {
    return this.request(`/api/quartos/${id}`, {
      method: 'PUT',
      body: quartoData,
    });
  }

  async deleteQuarto(id) {
    return this.request(`/api/quartos/${id}`, {
      method: 'DELETE',
    });
  }

  // ===== ALUGUEL =====
  async alugarQuarto(aluguelData) {
    return this.request('/api/aluguel', {
      method: 'POST',
      body: aluguelData,
    });
  }

  async pagarAluguel(aluguelId) {
    return this.request('/api/pagamento', {
      method: 'POST',
      body: { aluguel_id: aluguelId },
    });
  }
}

// Instância única
const apiService = new ApiService();
export default apiService;