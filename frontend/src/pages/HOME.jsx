import React from 'react'

const features = [
  {
    title: 'Personalized scheme matching',
    description:
      'Matches your age, gender, state, income, occupation, and category to central and state programs.',
  },
  {
    title: 'Direct action links',
    description: 'Take users straight to applications, forms, and official portals.',
  },
  {
    title: 'Deadline-aware guidance',
    description: 'Highlights current deadlines and avoids missed opportunities.',
  },
  {
    title: 'Clear next steps',
    description: 'Explains exactly what to do after identifying an eligible scheme.',
  },
]

const steps = [
  'Fill in a short 2-minute profile.',
  'Let the system cross-reference central and state schemes.',
  'Review your eligible benefits with links and deadlines.',
  'Follow the step-by-step application guide.',
]

function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f8fafc',
        color: '#111827',
        padding: '2rem 1rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1180, display: 'grid', gap: '2rem' }}>
        <header
          style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'minmax(0, 1.5fr) 1fr',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1rem',
                borderRadius: 9999,
                background: '#eef2ff',
                color: '#4338ca',
                fontWeight: 600,
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
              }}
            >
              2-minute profile  Eligibility made simple
            </div>
            <h1 style={{ fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', margin: 0, lineHeight: 1.05 }}>
              Discover the exact government schemes you qualify for.
            </h1>
            <p style={{ margin: '1.5rem 0', maxWidth: 680, fontSize: '1.05rem', lineHeight: 1.8, color: '#4b5563' }}>
              SchemaScouters turns your basic profile into a curated list of central and state schemes, with direct application links, deadlines, and step-by-step guidance.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href='#profile'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem 1.75rem',
                  borderRadius: 9999,
                  background: '#4338ca',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                Start your profile
              </a>
              <a
                href='#how-it-works'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem 1.75rem',
                  borderRadius: 9999,
                  background: '#fff',
                  color: '#4338ca',
                  border: '1px solid #c7d2fe',
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                How it works
              </a>
            </div>
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: '32px',
              padding: '2rem',
              boxShadow: '0 30px 80px rgba(15, 23, 42, 0.12)',
            }}
          >
            <p style={{ margin: 0, color: '#6b7280', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
              What you share
            </p>
            <ul style={{ marginTop: '1rem', padding: 0, listStyle: 'none', display: 'grid', gap: '0.9rem' }}>
              {['Age', 'Gender', 'State', 'Occupation', 'Annual income', 'Category (SC/ST/OBC/General)'].map((item) => (
                <li
                  key={item}
                  style={{
                    padding: '1rem 1.2rem',
                    borderRadius: '18px',
                    background: '#f8fafc',
                    border: '1px solid #e5e7eb',
                    fontWeight: 600,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <section id='how-it-works'>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <h2 style={{ margin: '0 0 0.75rem 0' }}>How it works</h2>
              <p style={{ margin: 0, maxWidth: 740, color: '#4b5563', lineHeight: 1.8 }}>
                Fill in a quick profile and get an instant shortlist of schemes you actually qualify for. Each match includes direct links, deadlines, and the next action you need to take.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {steps.map((step, index) => (
                <div
                  key={step}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1.35rem 1.25rem',
                    borderRadius: '24px',
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: '#4338ca',
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      fontWeight: 700,
                    }}
                  >
                    {index + 1}
                  </div>
                  <p style={{ margin: 0, color: '#374151' }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ margin: '0 0 1rem 0' }}>Why it matters</h2>
          <p style={{ margin: 0, maxWidth: 740, color: '#4b5563', lineHeight: 1.8 }}>
            Many eligible citizens miss out on government benefits because schemes are hard to find, rules are confusing, and application information is scattered. SchemaScouters makes the entire process easier and more transparent.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              marginTop: '1.5rem',
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  padding: '1.5rem',
                  borderRadius: '24px',
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  minHeight: '160px',
                }}
              >
                <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.1rem' }}>{feature.title}</h3>
                <p style={{ margin: 0, color: '#6b7280', lineHeight: 1.75 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
