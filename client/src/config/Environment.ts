const parseBoolean = (value: string) => {
  const normalizedValue = value.toUpperCase();
  if (normalizedValue === 'TRUE') return true;
  if (normalizedValue === 'FALSE') return false;
  return undefined;
};

const ENVIRONMENT = {
  VITE_APP_MODE: (import.meta.env.VITE_APP_MODE.toUpperCase() || 'DEVELOPMENT') as 'DEVELOPMENT' | 'PRODUCTION',
  VITE_APP_HTTPS: parseBoolean(import.meta.env.VITE_APP_HTTPS),
  VITE_APP_DOMAIN: import.meta.env.VITE_APP_DOMAIN || 'localhost',

  VITE_APP_SERVER_PORT: import.meta.env.VITE_APP_SERVER_PORT ? parseInt(import.meta.env.VITE_APP_SERVER_PORT) : null,
  VITE_APP_CLIENT_PORT: import.meta.env.VITE_APP_CLIENT_PORT ? parseInt(import.meta.env.VITE_APP_CLIENT_PORT) : null,

  VITE_APP_SERVER_URL: import.meta.env.VITE_APP_SERVER_URL || 'localhost',
  VITE_APP_CLIENT_URL: import.meta.env.VITE_APP_CLIENT_URL || 'localhost',

  VITE_APP_GA_ID: import.meta.env.VITE_APP_GA_ID, // Google Analytics
};

const validateEnv = () => {
  const errors: string[] = [];

  const validModes = ['DEVELOPMENT', 'PRODUCTION'];
  if (!validModes.includes(ENVIRONMENT.VITE_APP_MODE)) {
    errors.push(
      `Invalid value for VITE_APP_MODE. Expected 'DEVELOPMENT' or 'PRODUCTION', got '${ENVIRONMENT.VITE_APP_MODE}'.`,
    );
  }

  if (typeof ENVIRONMENT.VITE_APP_HTTPS !== 'boolean') {
    errors.push(
      `Invalid value for VITE_APP_HTTPS. Expected 'TRUE' or 'FALSE', got '${import.meta.env.VITE_APP_HTTPS}'.`,
    );
  }

  if (
    ENVIRONMENT.VITE_APP_SERVER_PORT !== null &&
    (isNaN(ENVIRONMENT.VITE_APP_SERVER_PORT) || ENVIRONMENT.VITE_APP_SERVER_PORT <= 0)
  ) {
    errors.push(
      `Invalid value for VITE_APP_SERVER_PORT. Expected a positive integer, got '${
        import.meta.env.VITE_APP_SERVER_PORT
      }'.`,
    );
  }

  if (
    ENVIRONMENT.VITE_APP_CLIENT_PORT !== null &&
    (isNaN(ENVIRONMENT.VITE_APP_CLIENT_PORT) || ENVIRONMENT.VITE_APP_CLIENT_PORT <= 0)
  ) {
    errors.push(
      `Invalid value for VITE_APP_CLIENT_PORT. Expected a positive integer, got '${
        import.meta.env.VITE_APP_CLIENT_PORT
      }'.`,
    );
  }

  if (!ENVIRONMENT.VITE_APP_GA_ID) {
    errors.push(
      `Invalid value for VITE_APP_GA_ID. Expected Google Analytics Id, got '${import.meta.env.VITE_APP_GA_ID}'.`,
    );
  }

  if (errors.length > 0) {
    throw new Error(`Configuration error:\n${errors.join('\n')}`);
  }
};

validateEnv();

export default ENVIRONMENT;
