// Errors occurred because of unauthorized or invalid requests by the user (shared with client)

export abstract class ClientError extends Error {
  status: number;
  name: string;
  type: string;

  constructor(message: string, name: string, status: number) {
    super(message);

    this.type = `Client Error`;
    this.name = name;
    this.status = status;
  }
}

export class GenericError extends ClientError {
  constructor(message: string = 'ERR_GENERIC') {
    super(message, 'GenericError', 404);
  }
}

export class UserNotFoundError extends ClientError {
  constructor(message: string = 'ERR_USER_NOT_FOUND') {
    super(message, 'UserNotFoundError', 403);
  }
}

export class AuthError extends ClientError {
  constructor(message: string = 'ERR_UNAUTHORIZED') {
    super(message, 'AuthError', 401);
  }
}

export class RefreshTokenNotReceivedError extends ClientError {
  constructor(message: string = 'Refresh token not received') {
    super(message, 'RefreshTokenNotReceivedError', 401);
  }
}

export class InvalidUsernameError extends ClientError {
  constructor(message: string = 'ERR_INVALID_CREDENTIALS') {
    super(message, 'InvalidUsernameError', 403);
  }
}

export class InvalidPasswordError extends ClientError {
  constructor(message: string = 'ERR_INVALID_CREDENTIALS') {
    super(message, 'InvalidPasswordError', 403);
  }
}

export class InvalidLoginMethodError extends ClientError {
  constructor(message: string = 'ERR_INVALID_LOGIN_METHOD') {
    super(message, 'InvalidLoginMethodError', 403);
  }
}

export class JWTExpiredError extends ClientError {
  constructor(message: string = 'ERR_JWT_EXPIRED') {
    super(message, 'JWTExpiredError', 401);
  }
}

export class UsernameAlreadyExistsError extends ClientError {
  constructor(message: string = 'ERR_USERNAME_ALREADY_EXISTS') {
    super(message, 'UsernameAlreadyExistsError', 403);
  }
}

export class EmailAlreadyExistsError extends ClientError {
  constructor(message: string = 'ERR_EMAIL_EXISTS') {
    super(message, 'EmailAlreadyExistsError', 403);
  }
}

export class UserUpdateInfoError extends ClientError {
  constructor(message: string = '') {
    super(message, 'UserUpdateInfoError', 403);
  }
}

export class CodeNotFoundError extends ClientError {
  constructor(message: string = 'ERR_CODE_NOT_FOUND') {
    super(message, 'CodeNotFoundError', 403);
  }
}

export class CodeAlreadyUsedError extends ClientError {
  constructor(message: string = 'ERR_CODE_ALREADY_USED') {
    super(message, 'CodeAlreadyUsedError', 403);
  }
}

export class CodeAlreadyExistsError extends ClientError {
  constructor(message: string = 'ERR_CODE_ALREADY_EXISTS') {
    super(message, 'CodeAlreadyExistsError', 403);
  }
}

export class ChatCooldownError extends ClientError {
  constructor(message: string = 'ERR_CHAT_COOLDOWN') {
    super(message, 'ChatCooldownError', 403);
  }
}

export class UserCredentialsUpdateCooldown extends ClientError {
  constructor(message: string = 'ERR_USER_CREDENTIALS_UPDATE_COOLDOWN') {
    super(message, 'UserCredentialsUpdateCooldown', 403);
  }
}

export class RoleAuthError extends ClientError {
  constructor(message: string = 'ERR_UNAUTHORIZED') {
    super(message, 'RoleAuthError', 401);
  }
}

export class CodeUsageLimitError extends ClientError {
  constructor(message: string = 'ERR_CODE_USAGE_LIMIT') {
    super(message, 'CodeUsageLimitError', 403);
  }
}

export class CardOwnershipMismatchError extends ClientError {
  constructor(message: string = 'ERR_UNAUTHORIZED') {
    super(message, 'CardOwnershipMismatchError', 403);
  }
}

export class OwnershipMismatchError extends ClientError {
  constructor(message: string = 'ERR_UNAUTHORIZED') {
    super(message, 'OwnershipMismatchError', 403);
  }
}

export class KnowledgeCheckUnavailableForThisSubtopic extends ClientError {
  constructor(message: string = 'ERR_KNOWLEDGE_CHECK_UNAVAILABLE_FOR_THIS_SUBTOPIC') {
    super(message, 'KnowledgeCheckUnavailableForThisSubtopic', 403);
  }
}

export class QuestionNotFoundError extends ClientError {
  constructor(message: string = 'ERR_QUESTION_NOT_FOUND') {
    super(message, 'QuestionNotFound', 403);
  }
}

export class CardInCooldownError extends ClientError {
  constructor(message: string = 'ERR_CARD_IN_COOLDOWN') {
    super(message, 'CardInCooldownError', 403);
  }
}

export class TopicInCooldownError extends ClientError {
  constructor(message: string = 'ERR_TOPIC_IN_COOLDOWN') {
    super(message, 'TopicInCooldownError', 403);
  }
}

export class KCSessionExpired extends ClientError {
  constructor(message: string = 'ERR_KCSESSION_EXPIRED') {
    super(message, 'KCSessionExpired', 403);
  }
}

export class DailyFreeLimitExceededError extends ClientError {
  constructor(message: string = 'ERR_DAILY_FREE_LIMIT_EXCEEDED') {
    super(message, 'DailyFreeLimitExceededError', 403);
  }
}

export class DailyPROLimitExceededError extends ClientError {
  constructor(message: string = 'ERR_DAILY_PRO_LIMIT_EXCEEDED') {
    super(message, 'DailyPROLimitExceededError', 403);
  }
}

export class InactiveChatError extends ClientError {
  constructor(message: string = 'ERR_INACTIVE_CHAT') {
    super(message, 'InactiveChatError', 403);
  }
}

export class DeckIsNotPublic extends ClientError {
  constructor(message: string = 'ERR_DECK_IS_NOT_PUBLIC') {
    super(message, 'DeckIsNotPublicError', 403);
  }
}

export class UserIsNotPRO extends ClientError {
  constructor(message: string = 'ERR_USER_IS_NOT_PRO') {
    super(message, 'UserIsNotPROError', 403);
  }
}

export const ClientErrorMap: { [key: string]: new (...args: any[]) => ClientError } = {
  GenericError: GenericError,
  UserNotFoundError: UserNotFoundError,
  AuthError: AuthError,
  InvalidUsernameError: InvalidUsernameError,
  InvalidPasswordError: InvalidPasswordError,
  InvalidLoginMethodError: InvalidLoginMethodError,
  JWTExpiredError: JWTExpiredError,
  UsernameAlreadyExistsError: UsernameAlreadyExistsError,
  EmailAlreadyExistsError: EmailAlreadyExistsError,
  UserUpdateInfoError: UserUpdateInfoError,
  CodeNotFoundError: CodeNotFoundError,
  CodeAlreadyUsedError: CodeAlreadyUsedError,
  CodeUsageLimitError: CodeUsageLimitError,
  KnowledgeCheckUnavailableForThisSubtopic: KnowledgeCheckUnavailableForThisSubtopic,
  TopicInCooldownError: TopicInCooldownError,
  KCSessionExpired: KCSessionExpired,
  DailyFreeLimitExceededError: DailyFreeLimitExceededError,
};

// Created because RabbitMQUtilsService.checkForErrorsAfterRPC doesn't receive a payload for the error
export const ErrorsToIgnoreAtRabbitMQErrorsCheck = [];
