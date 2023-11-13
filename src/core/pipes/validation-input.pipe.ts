import { ValidationPipe } from '@nestjs/common';

export class ValidationInputPipe extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      transform: true,
      exceptionFactory(errors) {
        return {
          message: 'Input data validation failed',
          errors: errors.reduce(
            (acc, { property, constraints }) => ({
              ...acc,
              [property]: Object.values(constraints as Record<string, string>),
            }),
            {},
          ),
        };
      },
    });
  }
}
