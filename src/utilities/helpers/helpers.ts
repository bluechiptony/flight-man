export class InvalidDataTypeError extends Error {
  constructor(msg: string) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidDataTypeError);
    }
  }
}

export class ApplicationProcessError extends Error {
  constructor(msg: string) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApplicationProcessError);
    }
  }
}

export class AuthenticationError extends Error {
  constructor(msg: string) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthenticationError);
    }
  }
}

export class AuthorizationError extends Error {
  constructor(msg: string) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthorizationError);
    }
  }
}

export class DatabaseError extends Error {
  constructor(msg: string) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DatabaseError);
    }
  }
}

export class RequiredPropertyError extends Error {
  constructor(msg: string) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequiredPropertyError);
    }
  }
}

export const getMessageFromException = (exception: Error, message?: string): string => {
  message = exception.message;
  if (message !== null || message !== undefined) {
    message = message;
  } else {
    message = "somethong went wrong, please contact the administrator";
  }
  return message;
};

export const getStatusCodeFromException = (e: Error): number => {
  let statusCode = 500;

  if (e instanceof DatabaseError) {
    statusCode = 500;
  } else if (e instanceof InvalidDataTypeError) {
    statusCode = 400;
  } else if (e instanceof AuthorizationError) {
    statusCode = 403;
  } else if (e instanceof AuthenticationError) {
    statusCode = 401;
  } else if (e instanceof ApplicationProcessError) {
    statusCode = 500;
  } else if (e instanceof InvalidDataTypeError || e instanceof RequiredPropertyError) {
    statusCode = 400;
  }

  return statusCode;
};
