import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Response } from "express";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const isHttpException = exception instanceof HttpException;
    const status = isHttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse = isHttpException ? exception.getResponse() : null;

    const message = isHttpException
      ? typeof exceptionResponse === "string"
        ? exceptionResponse
        : (exceptionResponse as any)?.message || "An error occurred"
      : "Internal server error";

    const errors =
      isHttpException && typeof exceptionResponse === "object"
        ? (exceptionResponse as any)?.message
        : undefined;

    // Never leak stack traces or internal details to the client (Section 36 of the spec)
    if (!isHttpException) {
      console.error("Unhandled exception:", exception);
    }

    response.status(status).json({
      success: false,
      message: Array.isArray(message) ? "Validation failed" : message,
      errors: Array.isArray(errors)
        ? errors
        : Array.isArray(message)
          ? message
          : undefined,
    });
  }
}
