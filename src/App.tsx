import { useState } from 'react'
import './App.css'

const PRODUCTS = [
  {
    id: 1,
    name: 'Chandan No. 5',
    tagline: 'Healing, anti-inflammatory face wash.',
    price: '$20',
    gradient: 'linear-gradient(145deg, #EDE0D0 0%, #D4B488 100%)',
    badge: 'Bestseller',
  },
]

const CONCERNS = [
  {
    id: 'dark-spots',
    label: 'Dark Spots',
    description:
      'Our Chandan No. 5 face wash is formulated with Mysore Sandalwood Oil, clinically shown to inhibit melanin production and fade hyperpigmentation with regular use. Unlike harsh brightening acids, sandalwood works gently without disrupting your moisture barrier.',
    benefit:
      'Mysore Sandalwood Oil works at the cellular level to reduce melanin deposits and restore even skin tone over 4–6 weeks of consistent use.',
    product: PRODUCTS[0],
  },
  {
    id: 'scarring',
    label: 'Scarring',
    description:
      'Acne scars meet their match in our Chandan No. 5 formula. Sandalwood\'s natural anti-inflammatory compounds calm residual redness, while vegetable glycerin supports skin regeneration — no retinols or peels required.',
    benefit:
      'Sandalwood\'s active compounds accelerate skin cell turnover, softening the texture and color of acne scars without sensitizing the skin.',
    product: PRODUCTS[0],
  },
  {
    id: 'discoloration',
    label: 'Discoloration',
    description:
      'Uneven skin tone is one of the hardest concerns to address. Chandan No. 5 pairs brightening sandalwood with Jojoba Oil to restore clarity and balance your natural complexion — without stripping the skin.',
    benefit:
      'Jojoba Oil mimics your skin\'s natural sebum to restore balance, while sandalwood targets the underlying pigment causing discoloration.',
    product: PRODUCTS[0],
  },
]

const TESTIMONIALS = [
  {
    text: 'I\'ve struggled with dark spots for years and nothing worked until Chandan No. 5. After six weeks my skin tone is the most even it\'s ever been. I keep telling everyone about it.',
    name: 'Priya S.',
    location: 'Chicago, IL',
  },
  {
    text: 'As someone with sensitive, acne-prone skin I\'m always nervous trying new products. This face wash is so gentle — no irritation, no dryness, just clearer skin. The ingredient list alone sold me.',
    name: 'Aisha K.',
    location: 'Houston, TX',
  },
  {
    text: 'I love that it\'s rooted in something real. My grandmother used sandalwood her whole life and seeing it formulated this thoughtfully — for modern acne care — genuinely moved me.',
    name: 'Meera R.',
    location: 'San Francisco, CA',
  },
]

const INGREDIENTS = [
  {
    name: 'Mysore Sandalwood Oil',
    benefit: 'Anti-inflammatory · Brightening · Antibacterial',
    description:
      'Sourced from family farms in Mysore, Karnataka, this rare botanical has been used in Ayurvedic skincare for centuries. Clinically shown to inhibit melanin production, calm inflammation, and kill acne-causing bacteria — without disrupting your moisture barrier.',
  },
  {
    name: 'Jojoba Oil',
    benefit: 'Balancing · Moisturizing · Non-comedogenic',
    description:
      'Chemically similar to your skin\'s natural sebum, jojoba oil regulates oil production and deeply moisturizes without clogging pores. It works alongside sandalwood to restore your skin\'s natural balance and support an even complexion.',
  },
  {
    name: 'Vegetable Glycerin',
    benefit: 'Hydrating · Skin-regenerating · Soothing',
    description:
      'A gentle humectant that draws moisture into the skin and supports its natural regeneration process. It calms post-acne redness and creates the smooth, supple base that lets our other botanicals penetrate effectively.',
  },
]

export default function App() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [activeConcern, setActiveConcern] = useState<string | null>(null)

  const selectedConcern = CONCERNS.find(c => c.id === activeConcern) ?? null

  return (
    <div style={{ backgroundColor: '#F6EFE2', color: '#1E120A', fontFamily: "'DM Sans', system-ui, sans-serif", minHeight: '100vh' }}>

      {/* ANNOUNCEMENT BAR */}
      <div style={{ backgroundColor: '#2D4A3E', color: '#F6EFE2', textAlign: 'center', padding: '0.6rem 1rem', fontSize: '0.8rem', letterSpacing: '0.04em', fontWeight: 400 }}>
        Free shipping on all orders over $50 &nbsp;·&nbsp; Use code <strong>ROOTS15</strong> for 15% off your first order
      </div>

      {/* NAV */}
      <nav style={{ backgroundColor: 'transparent', borderBottom: '1px solid rgba(246,239,226,0.15)', position: 'absolute', top: '36px', left: 0, right: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <a href="/" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.375rem', fontWeight: 700, color: '#F6EFE2', textDecoration: 'none', letterSpacing: '-0.02em' }}>
            Rooted South
          </a>

          <div className="nav-links">
            {[
              { label: 'Shop', href: '#shop' },
              { label: 'Ingredients', href: '#ingredients' },
              { label: 'Our Story', href: '#our-story' },
              { label: 'Contact', href: '#contact' },
            ].map(link => (
              <a key={link.label} href={link.href} style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(246,239,226,0.88)', textDecoration: 'none', letterSpacing: '0.01em' }}>
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F6EFE2', padding: '4px', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F6EFE2', padding: '4px', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO — video background */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', backgroundColor: '#1E120A' }}>
        {/* Background video — replace src with any clear-skin stock video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55, filter: 'saturate(0.7) brightness(0.85)' }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Warm tinted overlay — matches brand palette and improves legibility */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(30,18,10,0.25) 0%, rgba(45,30,18,0.15) 40%, rgba(30,18,10,0.58) 100%)' }} />
        {/* Warm cream tint layer */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(45,20,10,0.12)' }} />

        {/* Hero content — top: eyebrow / middle: headline / bottom: copy + CTAs */}
        <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: '7rem 1.5rem 5rem' }}>

          {/* TOP: eyebrow */}
          <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', color: 'rgba(246,239,226,0.72)', textTransform: 'uppercase' }}>
            South Indian Botanical Acne Care
          </span>

          {/* MIDDLE: headline */}
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.025em', color: '#F6EFE2', margin: 0, padding: 0, textShadow: '0 2px 28px rgba(30,18,10,0.6)', maxWidth: '740px' }}>
            Rooted in South Indian Sandal.<br />
            <em style={{ fontStyle: 'italic', color: '#C9A87C', fontSize: '0.9em' }}>Made for Dark Spots.</em>
          </h1>

          {/* BOTTOM: sub-copy + CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'rgba(246,239,226,0.85)', maxWidth: '360px', margin: 0, fontWeight: 300 }}>
              All-natural skincare. Less than 10 ingredients.<br />None of the harsh chemicals.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#shop" style={{ backgroundColor: '#B85C38', color: '#F6EFE2', padding: '0.875rem 2.25rem', borderRadius: '4px', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none', letterSpacing: '0.05em', display: 'inline-block' }}>
                Shop now
              </a>
              <a href="#our-story" style={{ color: '#F6EFE2', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none', borderBottom: '1px solid rgba(246,239,226,0.5)', paddingBottom: '2px', letterSpacing: '0.03em' }}>
                Our story →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ backgroundColor: '#2D4A3E', overflow: 'hidden', padding: '0.7rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="ticker">
          {[...Array(4)].map((_, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem', paddingRight: '2rem', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(246,239,226,0.85)', whiteSpace: 'nowrap' }}>
              <span>Dermatologist-tested</span><span style={{ opacity: 0.4 }}>✦</span>
              <span>NO harsh chemicals</span><span style={{ opacity: 0.4 }}>✦</span>
              <span>Plant-based</span><span style={{ opacity: 0.4 }}>✦</span>
              <span>10 ingredients. That's it.</span><span style={{ opacity: 0.4 }}>✦</span>
              <span>For acne, scarring, and discoloration</span><span style={{ opacity: 0.4 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* COMMON CONCERNS */}
      <section style={{ backgroundColor: '#F6EFE2', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', color: '#B85C38', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Common Concerns</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', fontWeight: 700, color: '#1E120A', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0, padding: 0 }}>
              What are you dealing with?
            </h2>
          </div>

          {/* Concern chips */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {CONCERNS.map(concern => (
              <button
                key={concern.id}
                onClick={() => setActiveConcern(activeConcern === concern.id ? null : concern.id)}
                style={{
                  padding: '0.7rem 1.75rem',
                  borderRadius: '4px',
                  border: activeConcern === concern.id ? '1px solid #1E120A' : '1px solid #C9B9A8',
                  backgroundColor: activeConcern === concern.id ? '#1E120A' : 'transparent',
                  color: activeConcern === concern.id ? '#F6EFE2' : '#1E120A',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {concern.label}
              </button>
            ))}
          </div>

          {/* Active concern panel */}
          {selectedConcern && (
            <div className="concern-panel" style={{ paddingTop: '2.5rem', borderTop: '1px solid #E4D8CA' }}>
              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', color: '#B85C38', textTransform: 'uppercase', marginBottom: '1rem' }}>How we help</p>
                <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: '#5C4A3A', fontWeight: 300, marginBottom: '1.75rem' }}>
                  {selectedConcern.description}
                </p>
                <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1.25rem 1.5rem', border: '1px solid #EAE0D4', boxShadow: '0 2px 8px rgba(30,18,10,0.04)' }}>
                  <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A7060', marginBottom: '0.5rem' }}>Key mechanism</p>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#5C4A3A', fontWeight: 400 }}>{selectedConcern.benefit}</p>
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '2rem', border: '1px solid #EAE0D4', boxShadow: '0 2px 12px rgba(30,18,10,0.06)', alignSelf: 'start' }}>
                <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', color: '#8A7060', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  Recommended for {selectedConcern.label.toLowerCase()}
                </p>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '8px', background: selectedConcern.product.gradient, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '22px', height: '44px', borderRadius: '11px 11px 6px 6px', background: 'rgba(246,239,226,0.85)', boxShadow: '0 4px 8px rgba(30,18,10,0.15)' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.125rem', fontWeight: 600, color: '#1E120A', marginBottom: '0.25rem' }}>
                      {selectedConcern.product.name}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: '#8A7060', fontWeight: 300, marginBottom: '0.5rem' }}>
                      {selectedConcern.product.tagline}
                    </p>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E120A' }}>{selectedConcern.product.price}</span>
                    {selectedConcern.product.badge && (
                      <span style={{ marginLeft: '0.75rem', fontSize: '0.68rem', fontWeight: 600, color: '#2D4A3E', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        ✦ {selectedConcern.product.badge}
                      </span>
                    )}
                  </div>
                </div>
                <a href="#shop" style={{ display: 'block', backgroundColor: '#B85C38', color: '#F6EFE2', padding: '0.8rem 1.5rem', borderRadius: '4px', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none', textAlign: 'center', letterSpacing: '0.04em' }}>
                  Shop now
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="shop" style={{ backgroundColor: '#EDE4D8', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', color: '#B85C38', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Shop</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', fontWeight: 700, color: '#1E120A', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0, padding: 0 }}>
              Our product
            </h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {PRODUCTS.map(product => (
              <div key={product.id} style={{ cursor: 'pointer', textAlign: 'center', width: '300px' }}>
                <div style={{ borderRadius: '12px', height: '300px', background: product.gradient, position: 'relative', overflow: 'hidden', marginBottom: '1rem', boxShadow: '0 2px 16px rgba(30,18,10,0.08)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(30,18,10,0.14)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px rgba(30,18,10,0.08)' }}>
                  {product.badge && (
                    <span style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: '#1E120A', color: '#F6EFE2', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em' }}>
                      {product.badge}
                    </span>
                  )}
                  <div style={{ position: 'absolute', bottom: '1.75rem', left: '50%', transform: 'translateX(-50%)', width: '48px', height: '96px', borderRadius: '24px 24px 12px 12px', background: 'rgba(246,239,226,0.82)', boxShadow: '0 8px 20px rgba(30,18,10,0.18)' }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 600, color: '#1E120A', marginBottom: '0.3rem', padding: 0 }}>{product.name}</h3>
                <p style={{ fontSize: '0.78rem', color: '#8A7060', marginBottom: '0.75rem', fontWeight: 300 }}>{product.tagline}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#1E120A' }}>{product.price}</span>
                  <button style={{ fontSize: '0.72rem', fontWeight: 500, color: '#B85C38', background: 'none', border: '1px solid #B85C38', padding: '0.35rem 0.85rem', borderRadius: '4px', cursor: 'pointer', letterSpacing: '0.04em' }}>
                    Add to bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section id="our-story" style={{ backgroundColor: '#2D4A3E', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }} className="story-grid">
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', color: '#C9A87C', textTransform: 'uppercase', marginBottom: '1rem' }}>Our story</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', fontWeight: 700, color: '#F6EFE2', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '1.75rem', padding: 0 }}>
              Born in Mysore.<br />
              <em style={{ fontStyle: 'italic', color: '#C9A87C' }}>Brewed with My Struggle.</em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(246,239,226,0.72)', fontWeight: 300, marginBottom: '1.25rem' }}>
              After spending countless tears, tens of thousands of dollars, and over a decade on acne care that didn't work AND hurt our skin, we decided to do something about it.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(246,239,226,0.72)', fontWeight: 300, marginBottom: '1.25rem' }}>
              Our products soothe acne and it's after-effects with no harsh chemicals - just the power of Mysore Sandal - a rare botanical that kills bacteria, reduces inflammation, and regenerates skin cells naturally without disrupting the moisture barrier.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(246,239,226,0.72)', fontWeight: 300, marginBottom: '1.25rem' }}>
              Rooted South is a woman-owned, dermatologist-backed brand based in Chicago, IL. We partner with family farms across South India to source Mysore Sandal.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(246,239,226,0.72)', fontWeight: 300, marginBottom: '2.5rem' }}>
              10 ingredients. That's it.
            </p>
            <a href="#" style={{ backgroundColor: '#C9A87C', color: '#1E120A', padding: '0.875rem 2.25rem', borderRadius: '4px', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none', letterSpacing: '0.05em', display: 'inline-block' }}>
              Read our story
            </a>
          </div>

          <div style={{ position: 'relative', height: '500px' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '16px', background: 'linear-gradient(145deg, #3D5E50 0%, #2D4A3E 60%, #1E3228 100%)', border: '1px solid rgba(246,239,226,0.08)' }} />
            <div style={{ position: 'absolute', inset: '2.5rem', borderRadius: '10px', background: 'rgba(201,168,124,0.08)', border: '1px solid rgba(201,168,124,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '1.25rem', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.85rem', fontWeight: 400, color: 'rgba(246,239,226,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Key botanicals</p>
              {['Mysore Sandalwood Oil', 'Distilled Water', 'Vegetable Glycerin', 'Jojoba Oil', 'Castille Soap', 'Saliguard'].map(ingredient => (
                <div key={ingredient} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C9A87C', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.375rem', color: '#F6EFE2', fontWeight: 400, fontStyle: 'italic' }}>{ingredient}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section id="ingredients" style={{ backgroundColor: '#F6EFE2', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', color: '#B85C38', textTransform: 'uppercase', marginBottom: '0.5rem' }}>What's inside</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', fontWeight: 700, color: '#1E120A', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0, padding: 0 }}>
              Key ingredients
            </h2>
          </div>
          <div className="ingredients-grid">
            {INGREDIENTS.map(ing => (
              <div key={ing.name} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '2.5rem', border: '1px solid #EAE0D4', boxShadow: '0 2px 12px rgba(30,18,10,0.04)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#F6EFE2', border: '1px solid #EAE0D4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1rem', color: '#B85C38', fontWeight: 700 }}>
                  ✦
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.375rem', fontWeight: 600, color: '#1E120A', marginBottom: '0.5rem', padding: 0 }}>{ing.name}</h3>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, color: '#B85C38', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{ing.benefit}</p>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#5C4A3A', fontWeight: 300 }}>{ing.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ backgroundColor: '#EDE4D8', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', color: '#B85C38', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Reviews</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', fontWeight: 700, color: '#1E120A', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0, padding: 0 }}>
              From the community
            </h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ backgroundColor: '#F6EFE2', borderRadius: '12px', padding: '2rem', border: '1px solid #E4D8CA', boxShadow: '0 2px 8px rgba(30,18,10,0.04)' }}>
                <div style={{ color: '#B85C38', fontSize: '0.9rem', marginBottom: '1.25rem', letterSpacing: '0.1em' }}>★★★★★</div>
                <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#1E120A', fontWeight: 300, marginBottom: '1.75rem', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
                  "{t.text}"
                </p>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.875rem', color: '#1E120A', marginBottom: '0.15rem' }}>{t.name}</p>
                  <p style={{ fontSize: '0.8rem', color: '#8A7060', fontWeight: 300 }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="contact" style={{ backgroundColor: '#1E120A', padding: '6rem 0' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', color: '#C9A87C', textTransform: 'uppercase', marginBottom: '1rem' }}>Stay connected</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#F6EFE2', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '1rem', padding: 0 }}>
            Join the garden
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(246,239,226,0.58)', fontWeight: 300, marginBottom: '2.5rem', lineHeight: 1.75 }}>
            Subscribe for seasonal drops, botanical deep dives, and 15% off your first order.
          </p>
          {subscribed ? (
            <p style={{ color: '#C9A87C', fontSize: '1rem', fontWeight: 500 }}>Welcome to the garden. ✦</p>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); if (email) setSubscribed(true) }}
              style={{ display: 'flex', gap: '0.75rem' }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{ flex: 1, padding: '0.875rem 1.25rem', borderRadius: '4px', border: '1px solid rgba(246,239,226,0.18)', backgroundColor: 'rgba(246,239,226,0.07)', color: '#F6EFE2', fontSize: '0.9rem', outline: 'none', fontFamily: "'DM Sans', sans-serif" }}
              />
              <button
                type="submit"
                style={{ backgroundColor: '#B85C38', color: '#F6EFE2', padding: '0.875rem 1.75rem', borderRadius: '4px', fontWeight: 500, fontSize: '0.875rem', border: 'none', cursor: 'pointer', letterSpacing: '0.04em', whiteSpace: 'nowrap', fontFamily: "'DM Sans', sans-serif" }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#1E120A', borderTop: '1px solid rgba(246,239,226,0.08)', padding: '3.5rem 0 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="footer-grid">
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 700, color: '#F6EFE2', marginBottom: '0.75rem' }}>Rooted South</p>
              <p style={{ fontSize: '0.85rem', color: 'rgba(246,239,226,0.45)', fontWeight: 300, lineHeight: 1.75, maxWidth: '220px' }}>
                South Indian botanical skincare, made with intention in Chicago, Illinois.
              </p>
            </div>
            {[
              { title: 'Shop', links: ['All Products', 'Mists'] },
              { title: 'Company', links: ['Our Story', 'Ingredients', 'Sustainability'] },
              { title: 'Help', links: ['FAQ', 'Shipping & Returns', 'Contact Us'] },
            ].map(col => (
              <div key={col.title}>
                <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A87C', marginBottom: '1.25rem' }}>{col.title}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" style={{ fontSize: '0.875rem', color: 'rgba(246,239,226,0.55)', textDecoration: 'none', fontWeight: 300 }}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(246,239,226,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <p style={{ fontSize: '0.78rem', color: 'rgba(246,239,226,0.35)', fontWeight: 300 }}>© 2026 Rooted South. All rights reserved.</p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(246,239,226,0.35)', fontWeight: 300 }}>Chicago, IL &nbsp;·&nbsp; Woman-owned &nbsp;·&nbsp; Dermatologist-backed</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
