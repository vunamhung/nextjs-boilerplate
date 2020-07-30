import { useEffect } from "react";
import PropTypes from "prop-types";
import Glide from "@glidejs/glide";
import { classNames } from "@/lib";

export default function GlideCarousel({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  bullets,
  numberOfBullets,
  carouselSelector,
}) {
  // Load glide
  useEffect(() => {
    const glide = new Glide(carouselSelector ? `#${carouselSelector}` : "#glide", { ...options });
    glide.mount();
  });

  // number of bullets loop
  const totalBullets = [];
  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  }

  const Controls = (
    <div className="glide__controls flex" data-glide-el="controls">
      <div className="glide__prev--area" data-glide-dir="<">
        {prevButton ? prevButton : <button>Prev</button>}
      </div>
      <div className="glide__next--area" data-glide-dir=">">
        {nextButton ? nextButton : <button>Next</button>}
      </div>
    </div>
  );

  const Bullets = (
    <div className="glide__bullets" data-glide-el="controls[nav]">
      <>
        {totalBullets.map((index) => (
          <div key={index} className="glide__bullet" data-glide-dir={`=${index}`} />
        ))}
      </>
    </div>
  );

  return (
    <div className={classNames("glide", className)} id={carouselSelector ?? "glide"}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{children}</ul>
      </div>
      {controls && <Controls />}
      {bullets && <Bullets />}
    </div>
  );
}

GlideCarousel.propTypes = {
  className: PropTypes.string,
  options: PropTypes.object,
  controls: PropTypes.bool,
  bullets: PropTypes.bool,
  numberOfBullets: PropTypes.number,
  prevButton: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  nextButton: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

GlideCarousel.defaultProps = {
  controls: true,
  bullets: false,
};
