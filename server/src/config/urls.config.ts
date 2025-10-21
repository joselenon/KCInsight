import ENVIRONMENT from './environment.config';

const PROTOCOL = ENVIRONMENT.HTTPS ? 'https://' : 'http://';
const DOMAIN = ENVIRONMENT.DOMAIN;

const SERVER_URL_WITH_PROTOCOL = `${PROTOCOL}${ENVIRONMENT.SERVER_URL}`;
const CLIENT_URL_WITH_PROTOCOL = `${PROTOCOL}${ENVIRONMENT.CLIENT_URL}`;

const SERVER_PORT = ENVIRONMENT.SERVER_PORT;
const CLIENT_PORT = ENVIRONMENT.CLIENT_PORT;

const SERVER_FULL_URL =
  ENVIRONMENT.MODE.toUpperCase() === 'DEVELOPMENT'
    ? `${SERVER_URL_WITH_PROTOCOL}:${SERVER_PORT}`
    : SERVER_URL_WITH_PROTOCOL;
export const CLIENT_FULL_URL =
  ENVIRONMENT.MODE.toUpperCase() === 'PRODUCTION'
    ? CLIENT_URL_WITH_PROTOCOL
    : `${CLIENT_URL_WITH_PROTOCOL}:${CLIENT_PORT}`;

export const API_BASE = '';
export const API_URL = `${SERVER_FULL_URL}${API_BASE}`;

const ENDPOINTS = {
  STUDY_MAP: '/studymap',
};

const API_ENDPOINTS = {
  STUDY_MAP: {
    GET_PROGRESS: `${ENDPOINTS.STUDY_MAP}/progress/get`,
    MARK_AS_LEARNT: `${ENDPOINTS.STUDY_MAP}/progress/markaslearnt`,
    MARK_AS_LEARNING: `${ENDPOINTS.STUDY_MAP}/progress/markaslearning`,

    KNOWLEDGE_CHECK: {
      GET_ACTIVE_SESSIONS: `${ENDPOINTS.STUDY_MAP}/progress/knowledgecheck/activesessions`,
      GET_TOPIC_KC_SESSIONS: `${ENDPOINTS.STUDY_MAP}/progress/knowledgecheck/gettopicsessions`,
      CREATE: `${ENDPOINTS.STUDY_MAP}/progress/knowledgecheck/create`,
      FINISH: `${ENDPOINTS.STUDY_MAP}/progress/knowledgecheck/finish`,
      ANSWER: `${ENDPOINTS.STUDY_MAP}/progress/knowledgecheck/answer`,
      REPLACE_ACTIVITY: `${ENDPOINTS.STUDY_MAP}/progress/knowledgecheck/replaceactivity`,
      GENERATE_REPORT: `${ENDPOINTS.STUDY_MAP}/progress/knowledgecheck/generatereport`,
    },
  },
};

const URLS = {
  MAIN_URLS: {
    CLIENT_PORT,
    CLIENT_URL_WITH_PROTOCOL,
    SERVER_PORT,
    SERVER_URL_WITH_PROTOCOL,
    API_URL,
    CLIENT_FULL_URL,
    SERVER_FULL_URL,
    DOMAIN,
  },
  ENDPOINTS: API_ENDPOINTS,
};

export default URLS;
