import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../ui/SectionLabel';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { img } from '../../data/images';
import shubhamPortrait from '../../assets/dr_shubham_mahajan.jpg';

interface TeamMember {
  name: string;
  title: string;
  credentials: string[];
  introduction: string;
}

const portraits = [shubhamPortrait, img.sohanlalPortrait, img.priteePortrait];

export function ClinicalTeam() {
  const { t } = useTranslation();
  const members = t('about.teamProfiles', { returnObjects: true }) as TeamMember[];

  return (
    <section aria-labelledby="team-heading" className="bg-cream">
      <div className="mx-auto max-w-edge px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t('about.clinicalTeamEyebrow', { defaultValue: 'Our people' })}</SectionLabel>
          <RevealText
            as="h2"
            id="team-heading"
            text={t('about.clinicalTeamHeading', { defaultValue: 'Meet Our Team' })}
            className="mt-3 font-display text-[2rem] font-light leading-[1.1] text-ink sm:text-[2.7rem]"
          />
          <Reveal delay={0.08}>
            <p className="mt-4 text-sm leading-relaxed text-ink/65 sm:text-base">
              {t('about.clinicalTeamDesc', { defaultValue: 'A team bringing complementary experience and perspectives to the One Wellness approach.' })}
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {members.map((member, index) => (
            <Reveal
              as="article"
              key={member.name}
              delay={index * 0.06}
              className="overflow-hidden border border-ink/10 bg-ivory shadow-xs"
            >
              <div className="aspect-[4/3] overflow-hidden bg-sand">
                <img
                  src={portraits[index]}
                  alt={member.name}
                  className="h-full w-full object-cover object-[center_30%]"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-[1.45rem] font-light leading-snug text-ink">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-xs font-medium leading-relaxed text-moss sm:text-sm">
                  {member.title}
                </p>
                {member.credentials.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {member.credentials.map((credential) => (
                      <li
                        key={credential}
                        className="border border-moss/20 bg-moss/5 px-2.5 py-1 text-[11px] leading-relaxed text-ink/70"
                      >
                        {credential}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {member.introduction}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
