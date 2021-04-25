import React from 'react';
import PropTypes from 'prop-types';
import { ReactCusdis } from 'react-cusdis';

function getGlobalEnv(env, defaultValue = '') {
  if (typeof env === 'undefined') {
    return defaultValue;
  }
  return env;
}

function Cusdis({ attrs }) {
  const appId = getGlobalEnv(GATSBY_CUSDIS_APP_ID);
  const host = getGlobalEnv(GATSBY_CUSDIS_HOST, 'https://cusdis.com/');

  return (
    <div>
      <ReactCusdis
        attrs={{
          host,
          appId,
          ...attrs,
        }}
      />
    </div>
  );
}

Cusdis.propTypes = {
  attrs: PropTypes.shape({
    pageId: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    pageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cusdis;
