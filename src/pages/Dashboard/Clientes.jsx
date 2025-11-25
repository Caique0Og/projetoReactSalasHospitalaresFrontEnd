import { useState, useEffect } from 'react';
import api from '../../services/api';
import './Clientes.css';

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [clienteForm, setClienteForm] = useState({
    nome: '',
    tipo_pagamento: ''
  });

  useEffect(() => {
    loadClientes();
  }, []);

  const loadClientes = async () => {
    try {
      setLoading(true);
      const data = await api.getClientes();
      setClientes(data);
      setError('');
    } catch (err) {
      setError('Erro ao carregar clientes: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const novoCliente = await api.createCliente(clienteForm);
      setClientes([...clientes, novoCliente]);
      setClienteForm({ nome: '', tipo_pagamento: '' });
      alert('Cliente cadastrado com sucesso!');
    } catch (err) {
      setError('Erro ao criar cliente: ' + err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClienteForm(prev => ({ ...prev, [name]: value }));
  };

  const removerCliente = async (id) => {
    if (!window.confirm('Deseja realmente remover este cliente?')) return;
    
    try {
      await api.deleteCliente(id);
      setClientes(clientes.filter(cliente => cliente.id !== id));
      alert('Cliente removido com sucesso!');
    } catch (err) {
      setError('Erro ao remover cliente: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="clientes-container">
        <div style={{ textAlign: 'center', padding: '3rem', color: '#60a5fa' }}>
          <h3>Carregando clientes...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="clientes-container">
      <h2>Gerenciar Clientes</h2>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="cliente-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Nome do Cliente</label>
            <input
              type="text"
              name="nome"
              value={clienteForm.nome}
              onChange={handleChange}
              placeholder="Digite o nome completo"
              required
            />
          </div>

          <div className="form-group">
            <label>Tipo de Pagamento</label>
            <select
              name="tipo_pagamento"
              value={clienteForm.tipo_pagamento}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Cartão de Débito">Cartão de Débito</option>
              <option value="PIX">PIX</option>
              <option value="Boleto">Boleto</option>
              <option value="Dinheiro">Dinheiro</option>
            </select>
          </div>
        </div>

        <button type="submit" className="add-cliente-btn">
          ➕ Adicionar Cliente
        </button>
      </form>

      <div className="clientes-list">
        <h3>Clientes Cadastrados ({clientes.length})</h3>
        
        {clientes.length === 0 ? (
          <p className="empty-message">Nenhum cliente cadastrado ainda.</p>
        ) : (
          <div className="clientes-grid">
            {clientes.map(cliente => (
              <div key={cliente.id} className="cliente-card">
                <div className="cliente-header">
                  <div className="cliente-icon">👤</div>
                  <h4>{cliente.nome}</h4>
                </div>
                
                <div className="cliente-info">
                  <p><strong>ID:</strong> {cliente.id}</p>
                  <p><strong>Pagamento:</strong> {cliente.tipo_pagamento}</p>
                </div>

                <button 
                  onClick={() => removerCliente(cliente.id)}
                  className="remove-cliente-btn"
                >
                  🗑️ Remover
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Clientes;