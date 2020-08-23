import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Glide from '@glidejs/glide';
import classNames from 'classnames';

export default function GlideCarousel({
  className,
  children,
  options,
  prevButton,
  nextButton,
  numberOfBullets,
  bullets = false,
  controls = true,
  selector = 'glide',
}) {
  // Load glide
  useEffect(() => {
    const glide = new Glide(`#${selector}`, { ...options });
    glide.mount();
  });

  // number of bullets loop
  const totalBullets = [];
  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  }

  return (
    <div className={classNames('glide', className)} id={selector}>
      <div className='glide__track' data-glide-el='track'>
        <ul className='glide__slides'>{children}</ul>
      </div>
      {controls && (
        <div className='glide__controls flex' data-glide-el='controls'>
          <div className='glide__prev--area' data-glide-dir='<'>
            {prevButton ? prevButton : <button>Prev</button>}
          </div>
          <div className='glide__next--area' data-glide-dir='>'>
            {nextButton ? nextButton : <button>Next</button>}
          </div>
        </div>
      )}

      {bullets && (
        <div className='glide__bullets' data-glide-el='controls[nav]'>
          <>
            {totalBullets.map((index) => (
              <div key={index} className='glide__bullet' data-glide-dir={`=${index}`} />
            ))}
          </>
        </div>
      )}
    </div>
  );
}

GlideCarousel.propTypes = {
  className: PropTypes.string,
  options: PropTypes.object.isRequired,
  controls: PropTypes.bool,
  bullets: PropTypes.bool,
  numberOfBullets: PropTypes.number,
  prevButton: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  nextButton: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
