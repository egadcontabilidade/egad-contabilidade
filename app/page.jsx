"use client";

import React from "react";

import { Calculator, CheckCircle, MessageCircle, ShieldCheck, Users, FileText, TrendingUp, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const WHATSAPP_NUMBER = "5521964769172";
const PHONE_DISPLAY = "(21) 96476-9172";
const FACEBOOK = "https://www.facebook.com/egadcontabilidade?locale=pt_BR";
const INSTAGRAM = "https://www.instagram.com/egadcontabilidade/";
const LINKEDIN = "https://www.linkedin.com/in/egad-contabilidade-4377b41a2/";

const plans = [
  {
    title: "Plano MEI",
    price: "R$ 250,00",
    description: "Ideal para microempreendedores que precisam manter tudo em dia.",
    items: ["Emissão de guias de impostos", "Orientação mensal", "Regularização e acompanhamento", "Suporte pelo WhatsApp"],
  },
  {
    title: "Plano Básico",
    price: "Sob consulta",
    description: "Para empresas em crescimento que precisam de rotina contábil organizada.",
    items: ["Contabilidade mensal", "Obrigações fiscais", "Folha de pagamento", "Atendimento personalizado"],
  },
  {
    title: "Plano Completo",
    price: "Sob consulta",
    description: "Solução completa para empresas que desejam segurança e estratégia.",
    items: ["Gestão contábil completa", "Planejamento tributário", "Relatórios gerenciais", "Consultoria estratégica"],
  },
];

const services = [
  { icon: FileText, title: "Abertura de empresas", text: "Cuidamos da formalização da sua empresa com orientação desde o início." },
  { icon: FileText, title: "Legalização de empresas", text: "Processos de enquadramento, alterações contratuais e adequações legais." },
  { icon: ShieldCheck, title: "Regularização", text: "Apoio para deixar pendências, guias e obrigações em dia." },
  { icon: Calculator, title: "Contabilidade mensal", text: "Rotina contábil, fiscal e trabalhista com organização e transparência." },
  { icon: TrendingUp, title: "Planejamento tributário", text: "Análise para reduzir riscos e buscar a melhor estrutura tributária." },
  { icon: Users, title: "Folha de pagamento", text: "Admissões, pró-labore, encargos e rotinas trabalhistas." },
  { icon: MessageCircle, title: "Atendimento consultivo", text: "Suporte próximo para você tomar decisões com mais segurança." },
];

function WhatsAppButton({ children, className = "" }) {
  const message = encodeURIComponent("Olá! Vim pelo site da EGAD Contabilidade e gostaria de conhecer os serviços.");
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700 ${className}`}
    >
      <MessageCircle size={20} />
      {children}
    </a>
  );
}

export default function EgadContabilidadeSite() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-md">
              <Calculator size={23} />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight">EGAD</p>
              <p className="-mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Contabilidade</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a href="#servicos" className="hover:text-emerald-700">Serviços</a>
            <a href="#planos" className="hover:text-emerald-700">Planos</a>
            <a href="#sobre" className="hover:text-emerald-700">Sobre</a>
            <a href="#contato" className="hover:text-emerald-700">Contato</a>
          </nav>

          <WhatsAppButton className="hidden px-4 py-2 text-sm md:inline-flex">Falar no WhatsApp</WhatsAppButton>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-emerald-300 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              Contabilidade com cuidado, estratégia e confiança
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Sua empresa mais organizada, regularizada e pronta para crescer.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50">
              A EGAD Contabilidade oferece soluções contábeis, fiscais, trabalhistas e consultivas para MEIs, pequenas empresas e negócios em expansão.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton>Solicitar atendimento</WhatsAppButton>
              <a href="#planos" className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Ver planos
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-emerald-50">
              <span className="flex items-center gap-2"><CheckCircle size={18} /> Atendimento personalizado</span>
              <span className="flex items-center gap-2"><CheckCircle size={18} /> Suporte pelo WhatsApp</span>
              <span className="flex items-center gap-2"><CheckCircle size={18} /> Segurança fiscal</span>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-900 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Diagnóstico contábil</p>
              <h2 className="mt-3 text-2xl font-black">Sua empresa está pagando impostos corretamente?</h2>
              <p className="mt-3 text-slate-600">Receba uma análise inicial e entenda qual plano combina melhor com o momento do seu negócio.</p>
              <div className="mt-6 space-y-3">
                {["Abertura e regularização", "Guias e obrigações fiscais", "Folha de pagamento", "Consultoria para decisões"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                    <CheckCircle className="text-emerald-600" size={20} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <WhatsAppButton className="mt-6 w-full">Quero uma análise</WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-bold uppercase tracking-[0.2em] text-emerald-700">Especialidades</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Serviços que mais geram resultado para nossos clientes</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Abertura de Empresas", text: "Comece seu negócio do jeito certo, sem dor de cabeça." },
              { title: "Legalização", text: "Deixe sua empresa totalmente regular perante os órgãos." },
              { title: "Regularização", text: "Resolva pendências e evite problemas fiscais." }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-6 shadow-md border border-emerald-200">
                <CheckCircle className="text-emerald-600" size={32} />
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.text}</p>
                <WhatsAppButton className="mt-5 w-full px-4 py-2 text-sm">Quero saber mais</WhatsAppButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-bold uppercase tracking-[0.2em] text-emerald-700">Serviços</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Tudo que sua empresa precisa em um só lugar.</h2>
          <p className="mt-4 text-slate-600">Atuação completa para manter seu negócio em conformidade e com informações claras para crescer.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="planos" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-bold uppercase tracking-[0.2em] text-emerald-700">Planos</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Escolha o plano ideal para você.</h2>
            <p className="mt-4 text-slate-600">Planos pensados para diferentes fases do seu negócio.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div key={plan.title} className={`rounded-3xl border p-6 shadow-sm ${index === 1 ? "border-emerald-600 bg-emerald-50" : "border-slate-200 bg-white"}`}>
                {index === 1 && <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">Mais procurado</span>}
                <h3 className="mt-4 text-2xl font-black">{plan.title}</h3>
                <p className="mt-2 text-slate-600">{plan.description}</p>
                <p className="mt-6 text-3xl font-black text-emerald-700">{plan.price}</p>
                <ul className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-700">
                      <CheckCircle className="mt-0.5 shrink-0 text-emerald-600" size={19} />
                      {item}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton className="mt-7 w-full">Tenho interesse</WhatsAppButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[2rem] bg-emerald-900 p-8 text-white shadow-xl">
          <p className="font-bold uppercase tracking-[0.2em] text-emerald-200">Sobre a EGAD</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Tradição, cuidado e compromisso com cada cliente.</h2>
          <p className="mt-5 leading-8 text-emerald-50">
            A EGAD Contabilidade atua com atendimento próximo, linguagem simples e foco em soluções que protegem e fortalecem empresas. Nosso compromisso é cuidar da parte burocrática para que você tenha mais tranquilidade para vender, gerir e crescer.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {["Atendimento humanizado", "Organização fiscal", "Experiência contábil", "Orientação estratégica"].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle className="text-emerald-600" size={28} />
              <h3 className="mt-4 text-xl font-black">{item}</h3>
              <p className="mt-2 text-slate-600">Mais clareza para tomar decisões e manter sua empresa em dia.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-emerald-300">Contato</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Vamos conversar sobre a contabilidade da sua empresa?</h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-300">Clique no botão abaixo e fale com a EGAD Contabilidade pelo WhatsApp.</p>
            <div className="mt-8 flex flex-col gap-4 text-slate-200">
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-3 hover:text-emerald-300"><Phone size={20} /> {PHONE_DISPLAY}</a>
              <a href="mailto:contato@egadcontabilidade.com.br" className="flex items-center gap-3 hover:text-emerald-300"><Mail size={20} /> contato@egadcontabilidade.com.br</a>
            </div>
            <div className="mt-7 flex gap-3">
              <a href={FACEBOOK} target="_blank" rel="noreferrer" className="rounded-2xl bg-white/10 p-3 transition hover:bg-white/20" aria-label="Facebook"><Facebook /></a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="rounded-2xl bg-white/10 p-3 transition hover:bg-white/20" aria-label="Instagram"><Instagram /></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-2xl bg-white/10 p-3 transition hover:bg-white/20" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-black">Atendimento rápido</h3>
            <p className="mt-2 text-slate-600">Envie uma mensagem e informe seu tipo de empresa, faturamento aproximado e principal necessidade.</p>
            <div className="mt-6 rounded-3xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-700">Mensagem sugerida:</p>
              <p className="mt-3 leading-7 text-slate-600">Olá! Gostaria de conhecer os serviços da EGAD Contabilidade. Minha empresa é MEI/ME/EPP e preciso de orientação contábil.</p>
            </div>
            <WhatsAppButton className="mt-6 w-full">Chamar no WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} EGAD Contabilidade. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
