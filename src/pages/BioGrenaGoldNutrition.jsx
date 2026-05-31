import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductPage.css'

const BioGrenaGoldNutrition = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const phoneNumber = '213553666904'

  const handleOrderClick = (productName) => {
    const message = `Bonjour Bio GrenaGold, je souhaite commander: ${productName}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const products = [
    {
      id: 1,
      name: "Pain Sans Gluten",
      description: "Pain artisanal sans gluten, spécialement conçu pour les personnes atteintes de la maladie cœliaque. Élaboré avec des farines alternatives naturelles, sans compromis sur le goût.",
      image: "/Pain Sans Gluten.jpg",
      features: ["Sans gluten", "Cœliaque friendly", "Artisanal"],
      accent: "#A91D3A",
      tag: "Sans Gluten"
    },
    {
      id: 2,
      name: "Pâtisserie Diabétique",
      description: "Pâtisseries sans sucre ajouté, adaptées aux personnes diabétiques. Sucrées naturellement et faibles en glucides, pour se faire plaisir en toute sécurité.",
      image: "/Pâtisserie Diabétique.jpg",
      features: ["Sans sucre ajouté", "Faible IG", "Diabétique friendly"],
      accent: "#C9A962",
      tag: "Diabétique"
    },
    {
      id: 4,
      name: "Pâtisserie Anti-Allergie",
      description: "Pâtisseries hypoallergéniques formulées sans les allergènes courants. Une gourmandise sûre pour les personnes souffrant d'allergies et d'intolérances alimentaires.",
      image: "/Pâtisserie Anti-Allergie.jpg",
      features: ["Hypoallergénique", "Sans allergènes", "Sécurisé"],
      accent: "#D4A5A5",
      tag: "Anti-Allergie"
    }
  ]

  return (
    <div className="product-page">
      <div className="product-page__grain" aria-hidden="true"></div>

      {/* Hero Section */}
      <section className={`product-hero ${isVisible ? 'product-hero--visible' : ''}`}>
        <div className="product-hero__bg">
          <div className="product-hero__mesh"></div>
          <div className="product-hero__glow product-hero__glow--1"></div>
          <div className="product-hero__glow product-hero__glow--2"></div>
        </div>

        <div className="product-hero__content">
          <Link to="/" className="product-hero__back">
            <span className="product-hero__back-arrow">←</span>
            <span>Retour</span>
          </Link>

          <div className="product-hero__text">
            <span className="product-hero__label">Bio GrenaGold Nutrition</span>
            <h1 className="product-hero__title">
              Pain & <span>Pâtisserie</span> Santé
            </h1>
            <p className="product-hero__description">
              Une gamme nutritionnelle pensée pour les personnes malades : diabétiques
              et allergiques (maladie cœliaque). Pains et pâtisseries frais et sains,
              sans gluten, sans sucre ajouté et hypoallergéniques, préparés chaque jour
              avec des ingrédients naturels.
            </p>
            <div className="product-hero__motto">
              <span className="product-hero__motto-line"></span>
              <span className="product-hero__motto-text">Frais, sain, et sans renoncer au plaisir</span>
              <span className="product-hero__motto-line"></span>
            </div>
          </div>
        </div>

        <div className="product-hero__scroll-indicator">
          <span>Découvrir</span>
          <div className="product-hero__scroll-line"></div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="products-section__container">
          <div className="products-grid">
            {products.map((product, index) => (
              <article
                key={product.id}
                className="product-card"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  '--product-accent': product.accent
                }}
              >
                <div className="product-card__image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card__image"
                    loading="lazy"
                  />
                  <div className="product-card__image-overlay"></div>
                  <span className="product-card__tag">{product.tag}</span>
                  <div className="product-card__shine"></div>
                </div>

                <div className="product-card__body">
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>

                  <div className="product-card__features">
                    <span className="product-card__features-title">Caractéristiques</span>
                    <div className="product-card__features-list">
                      {product.features.map((feature, i) => (
                        <span key={i} className="product-card__feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="product-card__footer">
                  <button
                    className="product-card__btn"
                    onClick={() => handleOrderClick(product.name)}
                  >
                    <span>Commander</span>
                    <span className="product-card__btn-arrow">→</span>
                  </button>
                </div>

                <div className="product-card__border-accent"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-section__container">
          <h2 className="benefits-section__title">Notre Engagement</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-card__number">01</div>
              <h3 className="benefit-card__title">Santé</h3>
              <p className="benefit-card__text">Des recettes adaptées aux diabétiques et aux intolérants.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">02</div>
              <h3 className="benefit-card__title">Sécurité</h3>
              <p className="benefit-card__text">Sans gluten, sans sucre ajouté et sans allergènes courants.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">03</div>
              <h3 className="benefit-card__title">Fraîcheur</h3>
              <p className="benefit-card__text">Préparé chaque jour avec des ingrédients naturels.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BioGrenaGoldNutrition
