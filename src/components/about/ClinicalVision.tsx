import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';

export function ClinicalVision() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="clinical-vision-heading" className="bg-ivory">
      <div className="mx-auto max-w-3xl px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-14 lg:py-16">
        <SectionLabel>{t('about.visionEyebrow', { defaultValue: 'Our clinical vision' })}</SectionLabel>
        <RevealText
          as="h2"
          id="clinical-vision-heading"
          text={t('about.visionHeading', { defaultValue: 'A shared commitment to thoughtful care' })}
          className="mt-4 font-display text-[2rem] font-light leading-[1.1] text-ink sm:text-[2.6rem]"
        />
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink/65">
            {t('about.visionP1', { defaultValue: 'One Wellness Clinic & Research Center brings together personalised guidance, compassionate care and a holistic view of wellbeing. We listen first, then consider each person’s needs, preferences and everyday life.' })}
          </p>
        </Reveal>
        <Reveal delay={0.14} className="mt-5 border-t border-ink/12 pt-5">
          <p className="text-sm leading-relaxed text-ink/60 sm:text-base">
            {t('about.visionP2', { defaultValue: 'Our shared vision is to make space for informed choices and respectful care—drawing on traditional Ayurvedic perspectives while recognising that every wellness journey is individual.' })}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
