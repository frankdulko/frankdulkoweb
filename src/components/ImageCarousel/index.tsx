'use client';
import useEmblaCarousel from 'embla-carousel-react';
import './style.css';
import { Project } from '@/sanity/sanity.types';
import { urlFor } from '@/sanity/functions';
import { useCallback } from 'react';
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselArrowButtons';
import { DotButton, useDotButton } from './CarouselDotButton';

export default function ImageCarousel({ images }: { images: Pick<Project, 'images'> }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const renderSlides = () => {
    return (
      images.images &&
      images.images.map((image) => {
        const imageUrl = image && urlFor(image)?.url();
        return (
          imageUrl && (
            <div className="embla__slide">
              <a href={imageUrl} target="_blank" rel="noreferrer">
                <img className="image-item" src={imageUrl} />
              </a>
            </div>
          )
        );
      })
    );
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{renderSlides()}</div>
      </div>
      {(images.images?.length ?? 0) > 1 && (
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
