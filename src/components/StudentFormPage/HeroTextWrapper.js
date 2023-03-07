const HeroTextWrapper = ({ title, description }) => {
  return (
    <div className="text-wrapper">
        <h1 className="hero-box-title">{title}</h1>
        <p className="hero-box-paragraph">{description}</p>
    </div>
  )
}

export default HeroTextWrapper