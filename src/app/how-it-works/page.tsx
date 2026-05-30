'use client'

import { motion } from 'framer-motion'
import { Database, Zap, FileText, Send, Server, Code, Globe, Check } from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTAStrip from '@/components/CTAStrip'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const steps = [
  {
    number: '01',
    icon: Database,
    title: 'Verbinden',
    subtitle: 'Wij integreren met uw data',
    description:
      'Duneslab verbindt direct met uw productdatabase, ERP-systeem of prijslijst. Geen herstructurering nodig — wij werken met uw bestaande datastructuur, of dat nu een cloud ERP is, een lokale SQL-server of een gedeeld spreadsheet.',
    details: [
      'Compatibel met alle gangbare ERP- en databasesystemen',
      'Beveiligde alleen-lezen verbinding — wij wijzigen uw data nooit',
      'Live synchronisatie: prijs- en voorraadwijzigingen worden direct verwerkt',
      'Doorgaans afgerond in de eerste implementatieweek',
    ],
  },
  {
    number: '02',
    icon: Zap,
    title: 'Configureren',
    subtitle: 'Uw regels, uw huisstijl',
    description:
      'Na de verbinding configureren wij de intelligentielaag. Dit omvat uw prijsregels, margelogica, kortingsstructuren en PDF-templateontwerp. Alles wordt eenmalig ingesteld en werkt daarna automatisch voor elke offerte.',
    details: [
      'Meervoudige prijsregels (volumekortingen, klanttiers, marges)',
      'Eigen PDF-templates die precies aansluiten bij uw huisstijl',
      'Meerdere templates voor verschillende productcategorieën of klanttypes',
      'Logica getest en gevalideerd vóór livegang',
    ],
  },
  {
    number: '03',
    icon: FileText,
    title: 'Genereren',
    subtitle: 'Offertes in minder dan 10 seconden',
    description:
      'Uw salesteam opent de Duneslab interface, selecteert producten en aantallen en klikt op genereren. De AI-engine past alle geconfigureerde regels toe en produceert een complete, accurate, klantklare offerte — in minder dan 10 seconden.',
    details: [
      'Overzichtelijke, intuïtieve productselectie-interface',
      'Live prijsvalidatie bij het selecteren van producten',
      'Ondersteuning voor meerdere valuta en talen',
      'Voorbeeldmodus vóór het genereren van de definitieve PDF',
    ],
  },
  {
    number: '04',
    icon: Send,
    title: 'Afsluiten',
    subtitle: 'Van offerte naar deal',
    description:
      'Verstuur de PDF direct vanuit het platform met één klik, of download hem en voeg hem toe aan uw bestaande e-mailworkflow. Volg de offertetstatus, follow-ups en deals vanuit een centraal dashboard.',
    details: [
      'Directe e-mailbezorging met uw eigen afzenderadres',
      'Offertetstatus bijhouden (verzonden, geopend, geaccepteerd, afgewezen)',
      'Herinneringen voor opvolging en dealprogress-dashboard',
      'Offertegeschiedenis en versiebeheer per klant',
    ],
  },
]

const integrations = [
  {
    category: 'ERP Systemen',
    icon: Server,
    items: ['Exact Online', 'AFAS Profit', 'SAP Business One', 'Microsoft Dynamics 365'],
  },
  {
    category: 'E-commerce',
    icon: Globe,
    items: ['WooCommerce', 'Shopify (via API)', 'Magento', 'Maatwerk webshops'],
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['MySQL / MariaDB', 'PostgreSQL', 'Microsoft SQL Server', 'SQLite'],
  },
  {
    category: 'Maatwerk & Overig',
    icon: Code,
    items: ['REST API integratie', 'CSV / Excel import', 'Google Sheets sync', 'Maatwerk connectoren'],
  },
]

const timeline = [
  {
    week: 'Week 1',
    title: 'Kennismaking & integratie',
    tasks: [
      'Kick-off gesprek om vereisten en toegang te bespreken',
      'Systeemtoegang instellen (alleen-lezen rechten)',
      'Databasestructuur beoordelen en mappen',
      'Eerste integratiebouw en verbindingstest',
    ],
  },
  {
    week: 'Week 2',
    title: 'Configuratie',
    tasks: [
      'PDF-templateontwerp (op basis van uw huisstijlgids)',
      'Prijsregels en margelogica configureren',
      'Meervoudige kortingen en klanttiers instellen',
      'Eerste end-to-end test met voorbeelddata',
    ],
  },
  {
    week: 'Week 3',
    title: 'Testen & QA',
    tasks: [
      'Intern testen met echte productdata',
      'Feedbackronde met uw salesteam',
      'Randgevallen verwerken (geen voorraad, gestopte producten)',
      'Prestatie- en nauwkeurigheidsvalidatie',
    ],
  },
  {
    week: 'Week 4',
    title: 'Livegang & training',
    tasks: [
      'Teamtraining (60–90 min, opgenomen)',
      'Volledige systeemactivatie',
      'Bewakingsperiode met ondersteuning op dezelfde dag',
      'Overdrachts­documentatie en gebruikersgids',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        label="Hoe het werkt"
        heading="Van Database Naar Deal. In Seconden."
        subtext="Vier heldere stappen van integratie tot uw eerste AI-gegenereerde offerte."
      />

      <section
        className="py-24 lg:py-32 border-b border-edge"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-5"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 p-8 lg:p-10 border border-edge bg-surface group hover:border-gold transition-colors duration-300"
              >
                <div className="lg:col-span-4 flex flex-col justify-start">
                  <div className="font-display font-bold text-5xl text-gold opacity-30 group-hover:opacity-80 transition-opacity duration-300 leading-none mb-4">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon size={18} className="text-gold" strokeWidth={1.5} />
                    <span className="font-display font-bold text-xs tracking-[0.2em] uppercase text-gold">
                      {step.subtitle}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl text-ink">
                    {step.title}
                  </h2>
                </div>

                <div className="hidden lg:block lg:col-span-1 border-l border-edge mx-auto h-full" />

                <div className="lg:col-span-7 lg:pl-8">
                  <p className="text-ink-dim text-base leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <Check size={13} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span className="text-ink-dim text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="py-24 lg:py-32 border-b border-edge"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
            className="max-w-xl mb-14"
          >
            <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
              De flow
            </p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight">
              Wat er achter de schermen gebeurt.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 }}
            className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-0"
          >
            {[
              { icon: Database, label: 'UW DATABASE', desc: 'Live product- & prijsdata' },
              { icon: Zap, label: 'AI ENGINE', desc: 'Regels, templates & huisstijl', featured: true },
              { icon: FileText, label: 'PDF OUTPUT', desc: 'Klantklaar in <10 seconden' },
              { icon: Send, label: 'KLANT', desc: 'Bezorgd met één klik' },
            ].map((node, i, arr) => (
              <div key={node.label} className="flex flex-col lg:flex-row items-center">
                <div
                  className={`relative p-6 border w-full lg:w-56 bg-surface text-center ${
                    node.featured ? 'border-gold' : 'border-edge'
                  }`}
                  style={node.featured ? { boxShadow: '0 0 24px rgba(231,208,95,0.12)' } : undefined}
                >
                  {node.featured && <div className="absolute top-0 left-0 right-0 h-px bg-gold" />}
                  <node.icon
                    size={20}
                    className={`mx-auto mb-3 ${node.featured ? 'text-gold' : 'text-ink-dim'}`}
                    strokeWidth={1.5}
                  />
                  <p className={`font-display font-bold text-[10px] tracking-[0.22em] uppercase mb-1 ${node.featured ? 'text-gold' : 'text-ink-faint'}`}>
                    {node.label}
                  </p>
                  <p className="text-ink-dim text-xs">{node.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <>
                    <div className="hidden lg:flex items-center px-3 shrink-0">
                      <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                        <line x1="0" y1="8" x2="28" y2="8" stroke="#E7D05F" strokeWidth="1" />
                        <polygon points="28,3 40,8 28,13" fill="#E7D05F" />
                      </svg>
                    </div>
                    <div className="flex lg:hidden justify-center py-2">
                      <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
                        <line x1="8" y1="0" x2="8" y2="20" stroke="#E7D05F" strokeWidth="1" />
                        <polygon points="3,18 8,28 13,18" fill="#E7D05F" />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="py-24 lg:py-32 border-b border-edge"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="max-w-xl mb-14">
              <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
                Integraties
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight mb-4">
                Wij koppelen aan de systemen die u al gebruikt.
              </h2>
              <p className="text-ink-dim text-base leading-relaxed">
                Staat uw systeem er niet bij? Wij verzorgen maatwerk integraties per geval.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {integrations.map(({ category, icon: Icon, items }) => (
                <motion.div
                  key={category}
                  variants={fadeUp}
                  className="p-6 border border-edge bg-surface"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <Icon size={16} className="text-gold" strokeWidth={1.5} />
                    <span className="font-display font-bold text-xs tracking-[0.2em] uppercase text-gold">
                      {category}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {items.map((item) => (
                      <li key={item} className="text-ink-dim text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold-muted shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="py-24 lg:py-32"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="max-w-xl mb-14">
              <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
                Implementatie
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight mb-4">
                Live in 4 weken. Wij regelen alles.
              </h2>
              <p className="text-ink-dim text-base leading-relaxed">
                Van eerste gesprek tot livegang: een gestructureerd, voorspelbaar proces zonder verrassingen.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-edge">
              {timeline.map((phase) => (
                <motion.div
                  key={phase.week}
                  variants={fadeUp}
                  className="bg-void p-8 group"
                >
                  <p className="text-gold text-xs tracking-[0.22em] uppercase font-display mb-3">
                    {phase.week}
                  </p>
                  <h3 className="font-display font-bold text-lg text-ink mb-5">
                    {phase.title}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2.5">
                        <Check size={12} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span className="text-ink-dim text-xs leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTAStrip
        heading="Klaar om het live te zien?"
        subtext="Plan een gratis demo van 30 minuten. Wij laten u de volledige flow zien met uw type producten."
        buttonLabel="Plan een demo →"
        buttonHref="/contact"
        secondaryLabel="Bekijk prijzen"
        secondaryHref="/pricing"
      />
    </>
  )
}
