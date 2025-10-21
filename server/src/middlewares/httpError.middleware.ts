import { NextFunction, Request, Response } from 'express';

import { ClientError } from '../config/errors/classes/ClientErrors';
import { errorResponse } from '../helpers/responseHelpers';

const httpErrorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error);

  if (error instanceof ClientError) {
    res.status(error.status).json(errorResponse(error.name, error.message));
    return next();
  }

  // In case error is not instance of ClientError (displayable ones), throw a generic one
  res.status(403).json(errorResponse('GenericError', 'ERR_GENERIC'));
  return next();
};

export default httpErrorMiddleware;
