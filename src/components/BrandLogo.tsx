import React from 'react';
import wfmyLogo from '../assets/images/regenerated_image_1779992563689.png';
import wxiiLogo from '../assets/images/regenerated_image_1779992563479.png';
import wghpLogo from '../assets/images/regenerated_image_1779992563048.png';
import journalLogo from '../assets/images/regenerated_image_1779992563267.png';

const BRAND_URLS: Record<string, string> = {
  wfmy: wfmyLogo,
  wxii: wxiiLogo,
  wghp: wghpLogo,
  journal: journalLogo,
  spectrum: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spectrum_News_logo.svg/640px-Spectrum_News_logo.svg.png',
  cbs: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/CBS_logo.svg/640px-CBS_logo.svg.png',
  nbc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/NBC_logo_2013-present.svg/640px-NBC_logo_2013-present.svg.png'
};

interface BrandLogoProps {
  name: string;
  className?: string;
}

export function BrandLogo({ name, className = "h-8 md:h-10 w-auto" }: BrandLogoProps) {
  // Normalize brand name for match
  const n = name.toLowerCase().trim();

  let src = '';
  let alt = name;

  if (n.includes('wfmy')) {
    src = BRAND_URLS.wfmy;
  } else if (n.includes('wxii')) {
    src = BRAND_URLS.wxii;
  } else if (n.includes('wghp') || n.includes('fox 8')) {
    src = BRAND_URLS.wghp;
  } else if (n.includes('journal') || n.includes('winston-salem')) {
    src = BRAND_URLS.journal;
  } else if (n.includes('spectrum')) {
    src = BRAND_URLS.spectrum;
  } else if (n.includes('cbs')) {
    src = BRAND_URLS.cbs;
  } else if (n.includes('nbc')) {
    src = BRAND_URLS.nbc;
  }

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} object-contain`}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Fallback beautiful badge if we can't match
  return (
    <div className={`${className} flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 font-black tracking-widest text-[11px] uppercase border border-slate-250 transition-colors duration-300 min-w-[120px]`}>
      <span>{name}</span>
    </div>
  );
}
