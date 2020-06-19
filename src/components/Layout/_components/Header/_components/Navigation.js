import React from 'react';

import Link from '../../Link';

import headerLinks from '../../../../../data/header';

const Navigation = () => (
  <nav>
    {headerLinks.map(({ title, href }) => (
      <Link
        underline
        href={href}
        key={title}
      >
        {title}
      </Link>
    ))}
  </nav>
);

export default Navigation
