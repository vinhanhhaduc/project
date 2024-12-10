import React from 'react';

export const SocialIcon = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 aspect-[0.95] w-[76px]"
  />
);