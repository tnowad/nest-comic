import {
  HttpStatus,
  UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common';

export class ValidationInputPipe extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      transform: true,
      exceptionFactory(errors) {
        return new UnprocessableEntityException({
          message: 'Input data validation failed',
          statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: errors.reduce(
            (validationErrors, { property, constraints }) => ({
              ...validationErrors,
              [property]: Object.values(constraints as Record<string, string>),
            }),
            {},
          ),
        });
      },
    });
  }
}
