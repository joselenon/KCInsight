import Environment from './Environment';

const PROTOCOL = Environment.VITE_APP_HTTPS ? 'https://' : 'http://';

const SERVER_URL_WITH_PROTOCOL = `${PROTOCOL}${Environment.VITE_APP_SERVER_URL}`;
const SERVER_PORT = Environment.VITE_APP_SERVER_PORT;

const SERVER_FULL_URL =
  Environment.VITE_APP_MODE === 'DEVELOPMENT' ? `${SERVER_URL_WITH_PROTOCOL}:${SERVER_PORT}` : SERVER_URL_WITH_PROTOCOL;

export const API_BASE = '';
export const API_URL = `${SERVER_FULL_URL}${API_BASE}`;

const CLIENT_URL_WITH_PROTOCOL = `${PROTOCOL}${Environment.VITE_APP_CLIENT_URL}`;
const CLIENT_PORT = Environment.VITE_APP_CLIENT_PORT;
export const CLIENT_FULL_URL =
  Environment.VITE_APP_MODE === 'PRODUCTION' ? CLIENT_URL_WITH_PROTOCOL : `${CLIENT_URL_WITH_PROTOCOL}:${CLIENT_PORT}`;

export const WS_PROTOCOL = Environment.VITE_APP_HTTPS ? 'wss://' : 'ws://';
const WS_API_URL_WITH_PROTOCOl = `${WS_PROTOCOL}${Environment.VITE_APP_SERVER_URL}:${
  Environment.VITE_APP_MODE === 'PRODUCTION' ? '' : SERVER_PORT
}${API_BASE}`;

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

const ASSETS_URL = `${SERVER_FULL_URL}/assets`;
const ACTIVITY_ASSETS_URL = `${SERVER_FULL_URL}/activities/subjects`;

const URLS = {
  MAIN_URLS: {
    CLIENT_PORT,
    CLIENT_URL_WITH_PROTOCOL,
    SERVER_PORT,
    SERVER_URL_WITH_PROTOCOL,
    API_URL,
    CLIENT_FULL_URL,
    SERVER_FULL_URL,
    WS_API_URL_WITH_PROTOCOl,
    ASSETS_URL,
    ACTIVITY_ASSETS_URL,
  },
  ENDPOINTS: API_ENDPOINTS,
};

export default URLS;
