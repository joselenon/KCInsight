export type TGQLResponsesTypes =
  | 'UPDATE_STUDY_TIME'
  | 'GET_DECKS'
  | 'GET_SELF_USER_METRICS'
  | 'ANSWER_CARD'
  | 'REMOVE_CARD'
  | 'GET_SUCCESS'
  | 'EDIT_SUCCESS'
  | 'POST_SUCCESS'
  | 'CREATE_SUCCESS'
  | 'REMOVE_SUCCESS'
  | 'EDIT_CARD'
  | 'CREATE_CARD'
  | 'REMOVE_DECK'
  | 'CREATE_DECK'
  | 'EDIT_DECK'
  | 'SEND_CHAT_MESSAGE' // Used by Chat Messages
  | 'GET_LIVE_MESSAGES' // Used by Chat Messages
  | 'GET_LAST_CHAT_MESSAGES' // Used by Chat Messages
  | 'GET_USER_INFO' // Used by AuthController
  | 'LOG_USER' // Used by GoogleController
  | 'GET_USER_TRANSACTIONS'
  | 'REFRESH_ACCESS_TOKEN'
  | 'WEBHOOK_RECEIVED';

export interface IGQLResponses<D> {
  id?: string; // Important to identify easily a specific message
  success: boolean;
  type: TGQLResponsesTypes;
  message: string;
  data?: D;
}

export const responseBody = <D>({ success, type, message, data, id }: IGQLResponses<D>) => {
  return {
    success,
    type,
    id,
    message,
    data,
  };
};

// Used at HTTP errors treatment middleware
export const errorResponse = (name: string, message: string) => ({
  success: false,
  name,
  message,
});
