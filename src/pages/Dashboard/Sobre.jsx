import './Sobre.css'

function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-hero">
        <h2 className="sobre-title">Sobre Nossa Empresa</h2>
        <p className="sobre-subtitle">
          Transformando ideias em realidade desde 2020
        </p>
      </div>

      <div className="timeline-section">
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>2020 - Fundação</h3>
            <p>Nosso sistema nasceu com a missão de modernizar a gestão hospitalar, conectando profissionais de saúde a espaços de atendimento de forma simples e segura.</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>2021 - Expansão</h3>
            <p>Ampliamos nossa plataforma para incluir o aluguel de salas especializadas, otimizando a utilização de estruturas médicas e facilitando o agendamento para clínicas e consultórios.</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>2023 - Inovação</h3>
            <p>Implementamos novas tecnologias de automação e monitoramento, tornando o processo de reserva mais rápido, transparente e integrado às rotinas hospitalares.</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>2024 - Presente</h3>
            <p>Seguimos evoluindo com foco em eficiência e confiabilidade, oferecendo soluções inteligentes que transformam a forma como hospitais e profissionais gerenciam seus espaços.</p>
          </div>
        </div>
      </div>

      <div className="valores-section">
        <h3 className="section-title">Nossos Valores</h3>
        <div className="valores-grid">
          <div className="valor-card">
            <div className="valor-icon">💎</div>
            <h4>Qualidade</h4>
            <p>Comprometimento com a excelência em cada detalhe dos nossos produtos e serviços.</p>
          </div>
          
          <div className="valor-card">
            <div className="valor-icon">🚀</div>
            <h4>Inovação</h4>
            <p>Sempre na vanguarda da tecnologia, buscando soluções criativas e disruptivas.</p>
          </div>
          
          <div className="valor-card">
            <div className="valor-icon">⭐</div>
            <h4>Satisfação</h4>
            <p>O sucesso dos nossos clientes é nossa maior motivação e objetivo principal.</p>
          </div>
          
          <div className="valor-card">
            <div className="valor-icon">🤝</div>
            <h4>Confiança</h4>
            <p>Construímos relacionamentos duradouros baseados na transparência e integridade.</p>
          </div>
        </div>
      </div>

      <div className="missao-section">
        <div className="missao-grid">
          <div className="missao-item">
            <h4>Nossa Missão</h4>
            <p>Facilitar o acesso a espaços hospitalares modernos e bem equipados, promovendo eficiência e praticidade para profissionais de saúde e instituições que buscam oferecer o melhor atendimento aos pacientes.</p>
          </div>
          
          <div className="missao-item">
            <h4>Nossa Visão</h4>
            <p>Ser referência em gestão e locação de salas hospitalares, impulsionando a digitalização do setor e tornando o uso de espaços médicos mais inteligente, acessível e sustentável.</p>
          </div>
          
          <div className="missao-item">
            <h4>Nosso Compromisso</h4>
            <p>Garantir qualidade, transparência e confiabilidade em cada reserva, com uma plataforma segura, processos ágeis e uma equipe dedicada a aprimorar a experiência de quem cuida da saúde.</p>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h3 className="section-title">Nossa Equipe</h3>
        <div className="team-stats">
          <div className="team-stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Profissionais</span>
          </div>
          <div className="team-stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Especialidades</span>
          </div>
          <div className="team-stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Dedicação</span>
          </div>
        </div>
      </div>

      <div className="cta-sobre">
        <h3>Quer saber mais sobre nós?</h3>
        <p>Entre em contato e descubra como podemos ajudar sua empresa a alcançar novos patamares.</p>
        <button className="btn-contato">Fale Conosco</button>
      </div>
    </div>
  );
}

export default Sobre;