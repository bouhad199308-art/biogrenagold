import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Boutiques.css'

const Boutiques = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const boutiques = [
    // First row: Les Jus, Compléments Bio, Colorants, Fruits Séchés
    {
      id: 1,
      name: "Les Jus",
      subtitle: "Élixirs Thérapeutiques",
      description: "Une gamme de jus thérapeutiques à base d'extrait de grenade et de plantes médicinales. Conçue pour les personnes diabétiques, les problèmes cardiaques, les mères et enfants, les sportifs et pour une peau saine. 100% naturel, sans produits chimiques.",
      image: "/grenagold/Gemini_Generated_Image_9l4ayh9l4ayh9l4a.png",
      accent: "var(--color-primary-light)",
      link: "/les-jus",
    },
    {
      id: 2,
      name: "Compléments Bio",
      subtitle: "Oméga-5 & Punicalagin",
      description: "Complément alimentaire d'oméga-5, le plus rare extrait de grenade : 85% d'oméga-5, 12% d'oméga-6 et oméga-9, 3% d'antioxydants naturels. Favorise la circulation sanguine et un rythme cardiaque régulier. Également disponible : Punicalagin, antibactérien et anti-inflammatoire naturel.",
      image: "/punicalagin-new.jpg (2).png",
      accent: "#4A7C59",
      link: "/complements",
    },
    {
      id: 3,
      name: "Colorants & Additifs",
      subtitle: "Alimentaires Naturels",
      description: "Colorants et additifs alimentaires 100% naturels. Donnez de la couleur et de la saveur à vos créations culinaires avec nos produits extraits de fruits, légumes et plantes, sans aucun produit chimique.",
      image: "/grenagold/Gemini_Generated_Image_af16ecaf16ecaf16.png",
      accent: "#8B4513",
      link: "/colorants-additifs",
    },
    {
      id: 4,
      name: "Fruits Séchés",
      subtitle: "Douceurs Naturelles",
      description: "Large gamme de fruits secs pour les desserts, la consommation quotidienne ou les plats du Ramadan. Différents formats à prix compétitifs pour répondre à tous vos besoins.",
      image: "/grenagold/fruite sechet.png",
      accent: "#C17F59",
      link: "/fruits-secs",
    },
    // Second row: Cosmétiques, Huiles Essentielles, Papier Grenade, Agro Nutrition
    {
      id: 5,
      name: "Cosmétiques",
      subtitle: "Beauté Naturelle",
      description: "Collection de cosmétiques à base de grenade : savons anti-inflammatoires et thérapeutiques, henné naturel d'écorce de grenade, soins de la peau aux extraits de grenade, et teintures capillaires aux nuances naturelles. Pour le bien-être de chaque femme.",
      image: "/grenagold/unnamed.jpg",
      accent: "#D4A5A5",
      link: "/cosmetiques",
    },
    {
      id: 6,
      name: "Huiles Essentielles",
      subtitle: "Pureté & Raffinement",
      description: "Une collection d'huiles essentielles naturelles et rares à usage nutritionnel, cosmétique et médicinal. Nous nous distinguons par la pureté de nos huiles et nos recommandations personnalisées adaptées à vos préférences et besoins.",
      image: "/photo_2025-12-03_19-57-29 (2).jpg",
      accent: "#E8B86D",
      link: "/huiles-essentielles",
    },
    {
      id: 7,
      name: "Papier Grenade",
      subtitle: "Innovation Naturelle",
      description: "Découvrez notre papier de grenade artisanal, une innovation unique alliant tradition et modernité. Un produit écologique et naturel issu de notre expertise en transformation de grenade.",
      image: "/grenagold/Gemini_Generated_Image_p5y8flp5y8flp5y8.png",
      accent: "#6B705C",
      link: "/papier-grenade",
    },
    {
      id: 8,
      name: "Agro Nutrition",
      subtitle: "Nutrition Agricole",
      description: "Solutions nutritionnelles pour l'agriculture basées sur les bienfaits de la grenade. Une approche naturelle et durable pour enrichir vos cultures et améliorer les rendements.",
      image: "/grenagold/Agro Nutrition.png",
      accent: "#2D5016",
      link: null,
    },
    {
      id: 9,
      name: "Bio GrenaGold Nutrition",
      subtitle: "Pain & Pâtisserie Santé",
      description: "Pains et pâtisseries frais et sains pour les personnes malades : diabétiques et allergiques (maladie cœliaque). Sans gluten, sans sucre ajouté et hypoallergéniques, préparés chaque jour avec des ingrédients naturels.",
      image: "/Pain Sans Gluten.jpg",
      accent: "#A91D3A",
      link: "/bio-grenagold-nutrition",
    },
  ]

  return (
    <section
      id="boutiques"
      className={`boutiques ${isVisible ? 'boutiques--visible' : ''}`}
      ref={sectionRef}
    >
      <div className="boutiques__background">
        <div className="boutiques__bg-mesh"></div>
      </div>

      <div className="container">
        <div className="boutiques__header">
          <span className="boutiques__label">Nos Collections</span>
          <h2 className="boutiques__title">
            Explorez Nos <span>Boutiques</span>
          </h2>
          <p className="boutiques__subtitle">
            Chaque collection marie science botanique et raffinement pour régénérer,
            nourrir et sublimer naturellement.
          </p>
        </div>

        <div className="boutiques__grid">
          {boutiques.map((boutique, index) => (
            <article
              key={boutique.id}
              className={`boutique-card ${activeCard === boutique.id ? 'boutique-card--active' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                '--card-accent': boutique.accent
              }}
              onMouseEnter={() => setActiveCard(boutique.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="boutique-card__image-wrapper">
                <img
                  src={boutique.image}
                  alt={boutique.name}
                  className="boutique-card__image"
                  loading="lazy"
                />
                <div className="boutique-card__overlay"></div>
                <div className="boutique-card__shine"></div>
              </div>

              <div className="boutique-card__content">
                <span className="boutique-card__subtitle">{boutique.subtitle}</span>
                <h3 className="boutique-card__title">{boutique.name}</h3>
                <p className="boutique-card__description">{boutique.description}</p>
                {boutique.link ? (
                  <Link to={boutique.link} className="boutique-card__cta">
                    <span>Découvrir</span>
                    <span className="boutique-card__cta-arrow">→</span>
                  </Link>
                ) : (
                  <button className="boutique-card__cta" disabled>
                    <span>Bientôt</span>
                    <span className="boutique-card__cta-arrow">→</span>
                  </button>
                )}
              </div>

              <div className="boutique-card__border"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Boutiques
