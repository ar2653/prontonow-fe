import React from 'react';
import DocumentMeta from 'react-document-meta';

const MetaWrapper = ({ children }) => {
  const meta = {
    meta: {
      httpEquiv: {
        'Content-Security-Policy': 'upgrade-insecure-requests'
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
      {children}
    </DocumentMeta>
  );
};

export default MetaWrapper;
