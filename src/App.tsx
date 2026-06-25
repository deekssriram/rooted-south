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

const TESTIMONIALS = [
  {
    text: 'My skin has never felt this good. The Magnolia Serum is pure magic — I\'m completely obsessed.',
    name: 'Savannah M.',
    location: 'Charleston, SC',
  },
  {
    text: 'Finally a brand that understands where I\'m from. The Clay Mask is part of my weekly ritual now.',
    name: 'Grace T.',
    location: 'Atlanta, GA',
  },
  {
    text: 'The Sweet Tea Cleanser is so gentle yet effective. My eczema-prone skin absolutely loves it.',
    name: 'Lily R.',
    location: 'New Orleans, LA',
  },
]

const INGREDIENTS = [
  {
    name: 'Magnolia Bark',
    benefit: 'Anti-inflammatory · Brightening',
    description:
      'Sourced from wild-harvested magnolia trees native to the Southeast, rich in honokiol and known for calming redness.',
  },
  {
    name: 'Sweet Tea Leaf',
    benefit: 'Antioxidant · Soothing',
    description:
      'Georgia-grown green tea leaves packed with EGCG to calm and protect your skin barrier against daily stressors.',
  },
  {
    name: 'Georgia Red Clay',
    benefit: 'Purifying · Mineralizing',
    description:
      'Mineral-rich clay from the Georgia Piedmont that draws out impurities without stripping the skin of its natural oils.',
  },
]

export default function App() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div style={{ backgroundColor: '#F6EFE2', color: '#1E120A', fontFamily: "'DM Sans', system-ui, sans-serif", minHeight: '100vh' }}>

      {/* ANNOUNCEMENT BAR */}
      <div style={{ backgroundColor: '#2D4A3E', color: '#F6EFE2', textAlign: 'center', padding: '0.6rem 1rem', fontSize: '0.8rem', letterSpacing: '0.04em', fontWeight: 400 }}>
        Free shipping on all orders over $50 &nbsp;·&nbsp; Use code <strong>ROOTS15</strong> for 15% off your first order
      </div>

      {/* NAV */}
      <nav style={{ backgroundColor: '#F6EFE2', borderBottom: '1px solid #E0D4C4', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <a href="/" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.375rem', fontWeight: 700, color: '#1E120A', textDecoration: 'none', letterSpacing: '-0.02em' }}>
            Rooted South
          </a>

          <div className="nav-links">
            {[
              { label: 'Shop', href: '#shop' },
              { label: 'Ingredients', href: '#ingredients' },
              { label: 'Our Story', href: '#our-story' },
              { label: 'Contact', href: '#contact' },
            ].map(link => (
              <a key={link.label} href={link.href} style={{ fontSize: '0.875rem', fontWeight: 500, color: '#1E120A', textDecoration: 'none', letterSpacing: '0.01em', opacity: 0.85 }}>
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1E120A', padding: '4px', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1E120A', padding: '4px', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '88vh', display: 'flex', alignItems: 'center', backgroundColor: '#F6EFE2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }} className="hero-grid">
          {/* Text side */}
          <div className="hero-text">
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', color: '#B85C38', textTransform: 'uppercase' }}>
              South Indian Botanical Acne Care
            </span>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 4.25vw, 4.25rem)', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-0.025em', color: '#1E120A', margin: '1rem 0 1.5rem', padding: 0 }}>
              Rooted in<br />South Indian Sandal.<br />
              <em style={{ fontStyle: 'italic', color: '#2D4A3E' }}>Made for Acne.</em>
            </h1>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#5C4A3A', maxWidth: '380px', margin: '0 0 2.5rem', fontWeight: 300 }}>
              All-natural skincare with less than 7 ingredients per product - completely free from the harsh chemicals that dominate the acne aisle.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#" style={{ backgroundColor: '#B85C38', color: '#F6EFE2', padding: '0.875rem 2.25rem', borderRadius: '4px', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none', letterSpacing: '0.05em', display: 'inline-block' }}>
                Shop now
              </a>
              <a href="#" style={{ color: '#1E120A', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none', borderBottom: '1px solid #1E120A', paddingBottom: '2px', letterSpacing: '0.03em' }}>
                Our story →
              </a>
            </div>
          </div>

          {/* Visual side */}
          <div className="hero-visual">
            {/* Background blob */}
            <div style={{ position: 'absolute', inset: 0, borderRadius: '60% 40% 55% 45% / 55% 45% 55% 45%', background: 'linear-gradient(145deg, #EDE0D0 0%, #C9A87C 50%, rgba(184,92,56,0.4) 100%)', opacity: 0.45 }} />
            {/* Product card */}
            <div style={{ position: 'absolute', inset: '8%', borderRadius: '20px', background: 'linear-gradient(160deg, #F0E4D4 0%, #DBBF96 50%, #C9A87C 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: '2rem', boxShadow: '0 32px 64px rgba(30,18,10,0.18)' }}>
              {/* Bottle mockup */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -62%)', width: '72px', height: '148px', borderRadius: '36px 36px 18px 18px', background: 'linear-gradient(180deg, #FAF6EF 0%, #EDE0D0 100%)', boxShadow: '0 16px 36px rgba(30,18,10,0.22), inset 0 1px 2px rgba(255,255,255,0.9)' }}>
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', width: '22px', height: '22px', borderRadius: '50%', background: '#2D4A3E' }} />
                <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px', textAlign: 'center', fontSize: '7px', fontWeight: 600, color: '#5C4A3A', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.4 }}>
                  Rooted<br />South
                </div>
              </div>
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.125rem', fontWeight: 600, color: '#1E120A', marginBottom: '0.25rem' }}>Chandan No. 5</p>
                <p style={{ fontSize: '0.8rem', color: '#5C4A3A', fontWeight: 300 }}>Healing, anti-inflammatory face wash. $20</p>
              </div>
            </div>
            {/* Floating badges */}
            <div style={{ position: 'absolute', top: '12%', right: '2%', backgroundColor: '#2D4A3E', color: '#F6EFE2', padding: '0.45rem 1rem', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
              ★ Bestseller
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
              <span>7 ingredients. That's it.</span><span style={{ opacity: 0.4 }}>✦</span>
              <span>For acne, scarring, and discoloration</span><span style={{ opacity: 0.4 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section id="shop" style={{ backgroundColor: '#F6EFE2', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', color: '#B85C38', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Shop</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', fontWeight: 700, color: '#1E120A', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0, padding: 0 }}>
              Our bestsellers
            </h2>
          </div>

          <div className="products-grid">
            {PRODUCTS.map(product => (
              <div key={product.id} style={{ cursor: 'pointer' }}>
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
              7 ingredients. That's it.
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
