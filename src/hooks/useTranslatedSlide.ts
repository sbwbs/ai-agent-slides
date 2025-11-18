import { useLanguage } from '../contexts/LanguageContext';
import { Slide } from '../types/slides';
import { koreanSlideMap } from '../data/translations';

export const useTranslatedSlide = (originalSlide: Slide): Slide => {
  const { language } = useLanguage();

  if (language === 'ko') {
    const koreanSlide = koreanSlideMap.get(originalSlide.id);
    if (koreanSlide) {
      return koreanSlide as Slide;
    }
  }

  return originalSlide;
};
