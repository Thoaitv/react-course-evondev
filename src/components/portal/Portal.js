import React from 'react';
import { useEffect } from 'react';

const createPortalWrapper = () => {
  const element = document.createElement('div');
  element.id = 'portal-element';
  return element;
};

const portalElement = createPortalWrapper();

const Portal = () => {
  useEffect(() => {
    document.body.appendChild(portalElement);
  }, []);
  return <div>asd</div>;
};

export default Portal;
