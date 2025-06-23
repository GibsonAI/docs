'use client';

import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';

const ActiveLabelContext = createContext();

const ActiveLabelProvider = ({ children }) => {
  const [activeLabel, setActiveLabel] = useState('');
  const value = useMemo(() => ({ activeLabel, setActiveLabel }), [activeLabel, setActiveLabel]);

  return <ActiveLabelContext.Provider value={value}>{children}</ActiveLabelContext.Provider>;
};

ActiveLabelProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

export { ActiveLabelContext, ActiveLabelProvider };
