import { CookieOptions } from 'express';

import ENVIRONMENT from './environment.config';

const ACCESS_TOKEN = {
  secret: ENVIRONMENT.JWT_SECRET,
  expirationInSec: 15 * 60, // 15 minutes in seconds
};

const REFRESH_TOKEN = {
  expirationInSec: 7 * 24 * 60 * 60, // 7 days in seconds,
};

const RefreshTokenCookie = {
  key: 'refreshToken',
  config: {
    maxAge: REFRESH_TOKEN.expirationInSec * 1000 /* 30 days in milisseconds */,
    secure: ENVIRONMENT.MODE === 'PRODUCTION',
    sameSite: ENVIRONMENT.MODE === 'PRODUCTION' ? 'strict' : 'lax',
    domain: `.${ENVIRONMENT.DOMAIN}`,
    httpOnly: true,
  } as CookieOptions,
};

/* accessToken */
const AccessTokenCookie = {
  key: 'accessToken',
  config: {
    secure: true,
    domain: `.${ENVIRONMENT.DOMAIN}`,
  } as CookieOptions,
};

export default { ACCESS_TOKEN, REFRESH_TOKEN, RefreshTokenCookie, AccessTokenCookie };
