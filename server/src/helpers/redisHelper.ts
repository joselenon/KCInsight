interface IRedisKeys {
  last_balance_att: string; // :userDocId
  blacklistedTokens: string;
  refreshToken: string;
  lastChatMessages: string;
  chatMessageCooldown: string;
  usernameUpdate: string;
  redeemCodeUses: string;
  userCredentialsUpdate: string;
  userGoalUpdate: string;
  kcSession: string;
  kcSessionKeys: string;
  enemProgress: string;
  decks: string;
}

function getRedisKeyHelper(key: keyof IRedisKeys, value?: string) {
  if (value) return `${key}:${value}`;
  return `${key}`;
}

export default getRedisKeyHelper;
