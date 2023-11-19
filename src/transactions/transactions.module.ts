import { Module } from '@nestjs/common';
import { TransactionWrapper } from './transaction.wrapper';

@Module({
  providers: [TransactionWrapper],
  exports: [TransactionWrapper],
})
export class TransactionsModule {}
