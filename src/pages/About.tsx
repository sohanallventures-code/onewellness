import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { ClinicalVision } from '../components/about/ClinicalVision';
import { ClinicalTeam } from '../components/about/ClinicalTeam';
import { ImmersiveCta } from '../components/sections/ImmersiveCta';
import { useSeo } from '../utils/seo';
import { img } from '../data/images';

export function About() {
  const { t } = useTranslation();

  useSeo({
    title: t('about.seoTitle', { defaultValue: 'About One Wellness | Ayurvedic Clinic & Research Center, Nashik' }),
    description: t('about.seoDescription', {
      defaultValue:
        'Discover the story, philosophy and team behind One Wellness Clinic & Research Center, a personalised Ayurvedic wellness clinic in Nashik.'
    }),
    path: '/about',
    image: img.clinicEnvironment
  });

  return (
    <>
      <PageHero
        eyebrow={t('about.heroEyebrow', { defaultValue: 'About' })}
        title={t('about.heroTitle', { defaultValue: 'One Wellness Clinic & Research Center' })}
        lede={t('about.heroLede', { defaultValue: 'A Contemporary Space Inspired by Traditional Wellness Wisdom.' })}
        image={img.retreat}
        alt="A calm wellness centre exterior in warm evening light"
      />

      <section aria-labelledby="about-intro" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>{t('about.introEyebrow', { defaultValue: 'Who we are' })}</SectionLabel>
              <RevealText
                as="h2"
                id="about-intro"
                text={t('about.storyHeading', { defaultValue: 'Rooted in Care. Growing Towards Wellness.' })}
                className="mt-3 font-display text-[2rem] font-light leading-[1.08] text-ink sm:text-[2.8rem]"
              />
              <div className="mx-auto mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-ink/65 sm:text-base">
                <Reveal delay={0.06}>
                  <p>
                    {t('about.storyP1', { defaultValue: 'One Wellness is a collective space for thoughtful, personalised care—where traditional Ayurvedic wisdom meets the realities of modern life.' })}
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    {t('about.storyP2', { defaultValue: 'We see wellbeing as an ongoing conversation between body, mind and daily habits. Through attentive listening, appropriate guidance and considered therapies, our team helps each person shape a journey that feels relevant to them.' })}
                  </p>
                </Reveal>
              </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="philosophy-heading" className="bg-forest">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <SectionLabel tone="light">{t('about.philosophyEyebrow', { defaultValue: 'Philosophy' })}</SectionLabel>
          <h2 id="philosophy-heading" className="mt-3 font-display text-[2rem] font-light leading-tight text-ivory sm:text-[2.6rem]">
            {t('about.philosophyHeading', { defaultValue: 'Care shaped around the whole person' })}
          </h2>
          <div className="mt-4 max-w-2xl text-sm leading-relaxed text-ivory/70 sm:text-base">
            {t('about.philosophyIntro', { defaultValue: 'Our approach brings together mindful listening, traditional knowledge and practical guidance, with care adapted to each person and their circumstances.' })}
          </div>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(t('about.philosophyItems', { returnObjects: true }) as string[]).map((line, i) => (
              <Reveal
                as="li"
                key={line || i}
                delay={i * 0.04}
                className="flex items-baseline gap-3 border border-ivory/15 bg-ivory/5 px-4 py-4 sm:px-5 sm:py-5"
              >
                <span className="font-display text-xs italic text-[#D3B67C]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-base font-light leading-tight text-ivory sm:text-lg">
                  {line}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ClinicalVision />
      <section aria-labelledby="journey-heading" className="bg-cream">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div className="max-w-2xl">
            <SectionLabel>{t('about.journeyEyebrow', { defaultValue: 'Your wellness journey' })}</SectionLabel>
            <h2 id="journey-heading" className="mt-3 font-display text-[2rem] font-light leading-tight text-ink sm:text-[2.6rem]">
              {t('about.journeyHeading', { defaultValue: 'A considered process, at your pace' })}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65 sm:text-base">
              {t('about.journeyIntro', { defaultValue: 'Every journey begins with a conversation and unfolds through shared understanding, personalised guidance and thoughtful follow-up.' })}
            </p>
          </div>
          <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(t('about.journeySteps', { returnObjects: true }) as { title: string; description: string }[]).map((step, i) => (
              <li key={step.title} className="border-t border-moss/25 pt-4">
                <span className="font-display text-sm italic text-moss">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-display text-xl font-light text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="environment-heading" className="bg-ivory">
        <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div className="mb-6 max-w-2xl">
            <SectionLabel>{t('about.environmentEyebrow', { defaultValue: 'Our space' })}</SectionLabel>
            <h2 id="environment-heading" className="mt-3 font-display text-[2rem] font-light leading-tight text-ink sm:text-[2.6rem]">
              {t('about.environmentHeading', { defaultValue: 'A calm setting for care and reflection' })}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65 sm:text-base">
              {t('about.environmentText', { defaultValue: 'Our clinic brings together dedicated spaces for consultation, traditional therapies and quiet moments of restoration.' })}
            </p>
          </div>
          <img
            src={img.clinicEnvironment}
            alt={t('about.environmentAlt', { defaultValue: 'Clinic treatment rooms, a meditation space, reception and consultation room' })}
            className="max-h-[34rem] w-full border border-ink/10 object-cover object-center shadow-sm"
            loading="lazy"
          />
        </div>
      </section>

      <ClinicalTeam />
      <ImmersiveCta
        eyebrow={t('about.ctaEyebrow', { defaultValue: 'Visit us' })}
        heading={t('about.ctaHeading', { defaultValue: 'Come and See\nthe Space.' })}
        text={t('about.ctaText', { defaultValue: 'Consultations are by appointment so that the room, therapists and preparations can be readied for you.' })}
        image={img.nature}
        alt={t('about.ctaImageAlt', { defaultValue: 'A quiet, green landscape surrounding a wellness retreat' })}
        secondary={{
          label: t('about.contactBtn', { defaultValue: 'Contact One Wellness' }),
          to: '/contact'
        }}
      />
    </>
  );
}