"use client";

const whatsapp = "https://wa.me/5521964769172";

export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0, color: "#0f172a" }}>
     <section style={{ background: "#111827", color: "#f9fafb", padding: "70px 25px", textAlign: "center" }}>

  <img 
  src="/logo.jpg" 
  style={{ 
    width: "100%", 
    maxWidth: 500, 
    marginBottom: 20 
  }} 
/>

  <h1 style={{ fontSize: 42, marginBottom: 10, color: "#d4af37" }}>
    EGAD Contabilidade
  </h1>

  <p style={{ fontSize: 20, maxWidth: 700, margin: "0 auto 30px", color: "#e5e7eb" }}>
    Contabilidade com estratégia, segurança e crescimento para sua empresa.
  </p>

  <a href={whatsapp} target="_blank" style={{
    background: "#b91c1c",
    color: "white",
    padding: "14px 26px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: "bold"
  }}>
    Falar no WhatsApp
  </a>
</section>

      <section style={secao}>
        <h2 style={titulo}>Especialidades da EGAD</h2>
        <div style={grid}>
          <Card titulo="Abertura de Empresas" texto="Formalize sua empresa do jeito certo, com orientação completa desde o início." />
          <Card titulo="Legalização de Empresas" texto="Regularização de cadastros, alterações e processos junto aos órgãos competentes." />
          <Card titulo="Regularização" texto="Resolva pendências fiscais, cadastrais e contábeis com segurança." />
        </div>
      </section>

      <section style={{ ...secao, background: "#f8fafc" }}>
        <h2 style={titulo}>Serviços Contábeis</h2>
        <div style={grid}>
          <Card titulo="Contabilidade Mensal" texto="Rotina contábil, fiscal e trabalhista organizada para sua empresa." />
          <Card titulo="Planejamento Tributário" texto="Análise para reduzir riscos e melhorar a gestão dos impostos." />
          <Card titulo="Folha de Pagamento" texto="Admissões, pró-labore, encargos e obrigações trabalhistas." />
          <Card titulo="MEI, ME e EPP" texto="Atendimento para pequenos negócios, profissionais autônomos e empresas em crescimento." />
          <Card titulo="Consultoria" texto="Orientação próxima para decisões mais seguras no dia a dia." />
          <Card titulo="Obrigações Fiscais" texto="Guias, declarações e acompanhamento para manter tudo em dia." />
        </div>
      </section>

      <section style={secao}>
        <h2 style={titulo}>Planos</h2>
        <div style={grid}>
          <Card titulo="Plano MEI" texto="A partir de R$ 250,00. Guias, orientação mensal e suporte pelo WhatsApp." />
          <Card titulo="Plano Básico" texto="Para empresas que precisam de contabilidade mensal e obrigações fiscais." />
          <Card titulo="Plano Completo" texto="Gestão contábil, planejamento tributário, folha e consultoria estratégica." />
        </div>
      </section>

      <section style={{ background: "#022c22", color: "white", padding: "60px 25px", textAlign: "center" }}>
        <h2 style={{ fontSize: 34 }}>Vamos cuidar da contabilidade da sua empresa?</h2>
        <p style={{ fontSize: 18, marginBottom: 25 }}>
          Atendimento pelo WhatsApp: (21) 96476-9172
        </p>
        <a href={whatsapp} target="_blank" style={botao}>Solicitar atendimento</a>
      </section>

      <footer style={{ background: "#020617", color: "white", padding: 20, textAlign: "center" }}>
        © 2026 EGAD Contabilidade. Todos os direitos reservados.
      </footer>
    </main>
  );
}

function Card({ titulo, texto }) {
  return (
    <div style={card}>
      <h3 style={{ fontSize: 22, color: "#d4af37" }}>{titulo}</h3>
      <p style={{ fontSize: 16, lineHeight: 1.6 }}>{texto}</p>
      <a href={whatsapp} target="_blank" style={botaoPequeno}>Quero saber mais</a>
    </div>
  );
}

const secao = {
  padding: "60px 25px",
  maxWidth: 1200,
  margin: "0 auto"
};

const titulo = {
  textAlign: "center",
  fontSize: 34,
  marginBottom: 35
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 22
};

const card = {
  background: "white",
  borderRadius: 18,
  padding: 25,
  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  border: "1px solid #e2e8f0"
};

const botao = {
  display: "inline-block",
  background: "#22c55e",
  color: "white",
  padding: "14px 26px",
  borderRadius: 12,
  textDecoration: "none",
  fontWeight: "bold"
};

const botaoPequeno = {
  display: "inline-block",
  marginTop: 12,
  background: "#b91c1c",
  color: "white",
  padding: "10px 16px",
  borderRadius: 10,
  textDecoration: "none",
  fontWeight: "bold"
};
