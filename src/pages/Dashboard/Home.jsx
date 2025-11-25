import './Home.css';
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <div className="hero-section">
        <h2 className="hero-title">Bem-vindo à Nossa Plataforma</h2>
        <p className="hero-subtitle">
           Encontre a sala perfeita para o seu atendimento médico. Reserve espaços modernos e equipados dentro do hospital com apenas alguns cliques.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Performance</h3>
          <p>Sistema otimizado para máxima velocidade e eficiência em todas as operações.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Segurança</h3>
          <p>Seus dados protegidos com as mais avançadas tecnologias de criptografia.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Inovação</h3>
          <p>Recursos modernos e interface intuitiva para uma experiência excepcional.</p>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-item">
          <span className="stat-number">10k+</span>
          <span className="stat-label">Usuários Ativos</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">99.9%</span>
          <span className="stat-label">Disponibilidade</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Suporte</span>
        </div>
      </div>

      <div className="cta-section">
        <h3>Pronto para começar?</h3>
        <p>Explore as funcionalidades disponíveis através do menu de navegação.</p>
        <div className="cta-buttons">
          <button className="cta-primary" onClick={() => navigate("/dashboard/servicos")}>Começar Agora</button>
          <button className="cta-secondary" onClick={() => navigate("/dashboard/sobre")}>Saiba Mais</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;