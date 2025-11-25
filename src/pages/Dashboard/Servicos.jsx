import { useState, useEffect } from 'react';
import './Servicos.css';
import api from '../../services/api';

function Servicos() {
  const [quartos, setQuartos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [quartoForm, setQuartoForm] = useState({
    tipo_sala: '',
    preco: '',
    disponibilidade: true,
  });

  // Carregar dados ao montar o componente
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      setError('');
      
      console.log('🔄 Iniciando carregamento de dados...');
      
      // Teste cada requisição separadamente
      console.log('📋 Buscando quartos...');
      const quartosData = await api.getQuartos();
      console.log('✅ Quartos carregados:', quartosData);
      
      console.log('📋 Buscando clientes...');
      const clientesData = await api.getClientes();
      console.log('✅ Clientes carregados:', clientesData);
      
      setQuartos(quartosData);
      setClientes(clientesData);
      
    } catch (err) {
      console.error('💥 Erro detalhado no loadData:', err);
      setError('Erro ao carregar dados: ' + (err.message || 'Verifique se o servidor está rodando na porta 5001.'));
    } finally {
      setLoading(false);
    }
  };

  // Função para testar a conexão manualmente
  const testarConexao = async () => {
    try {
      setError('🔍 Testando conexão com o backend...');
      
      // Teste direto com fetch
      const response = await fetch('http://localhost:5001/api/quartos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('🔍 Resposta do teste:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries())
      });

      if (response.ok) {
        const data = await response.json();
        setError(`✅ Conexão OK! Backend respondeu com ${data.length} quartos.`);
      } else {
        const errorText = await response.text();
        setError(`❌ Erro HTTP ${response.status}: ${response.statusText}. Detalhes: ${errorText}`);
      }
    } catch (err) {
      setError(`❌ Erro de conexão: ${err.message}. Verifique se o servidor Flask está rodando.`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const novoQuarto = await api.createQuarto({
        tipo_sala: quartoForm.tipo_sala,
        preco: parseFloat(quartoForm.preco),
        disponibilidade: quartoForm.disponibilidade
      });
      
      setQuartos([...quartos, novoQuarto]);
      setQuartoForm({
        tipo_sala: '',
        preco: '',
        disponibilidade: true,
      });
      setError('');
      alert('Sala cadastrada com sucesso!');
    } catch (err) {
      setError('Erro ao criar sala: ' + err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setQuartoForm(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const removerQuarto = async (id) => {
    if (!window.confirm('Deseja realmente remover esta sala?')) return;
    
    try {
      await api.deleteQuarto(id);
      setQuartos(quartos.filter(quarto => quarto.id !== id));
      setError('');
      alert('Sala removida com sucesso!');
    } catch (err) {
      setError('Erro ao remover sala: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="servicos-container">
        <div style={{ textAlign: 'center', padding: '3rem', color: '#60a5fa' }}>
          <h3>Carregando dados...</h3>
          <button 
            onClick={testarConexao}
            style={{ 
              marginTop: '1rem', 
              padding: '0.5rem 1rem',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            🔍 Testar Conexão com Backend
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="servicos-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Cadastrar Salas</h2>
        <button 
          onClick={testarConexao}
          style={{ 
            padding: '0.5rem 1rem',
            background: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          🔍 Testar Conexão
        </button>
      </div>
      
      {error && (
        <div style={{ 
          background: error.includes('✅') ? 'rgba(34, 197, 94, 0.2)' : 'rgba(220, 38, 38, 0.2)', 
          color: error.includes('✅') ? '#166534' : '#dc2626', 
          padding: '1rem', 
          borderRadius: '8px',
          marginBottom: '1rem',
          border: error.includes('✅') ? '1px solid #22c55e' : '1px solid #dc2626',
          fontSize: '0.9rem'
        }}>
          {error}
        </div>
      )}
      
      {/* ... resto do formulário e lista ... */}
      
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        background: '#f8fafc', 
        borderRadius: '8px',
        fontSize: '0.875rem',
        border: '1px solid #e2e8f0'
      }}>
        <h4>🔧 Informações de Debug:</h4>
        <p><strong>Backend URL:</strong> http://localhost:5001</p>
        <p><strong>Frontend URL:</strong> http://localhost:5173</p>
        <p><strong>Quartos carregados:</strong> {quartos.length}</p>
        <p><strong>Clientes carregados:</strong> {clientes.length}</p>
        <button 
          onClick={loadData}
          style={{ 
            marginTop: '0.5rem',
            padding: '0.5rem 1rem',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          🔄 Recarregar Dados
        </button>
      </div>
    </div>
  );
}

export default Servicos;