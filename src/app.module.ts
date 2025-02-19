import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BalanceModule } from './balance/balance.module';
import { MoneyModule } from './money/money.module';

@Module({
  imports: [BalanceModule, MoneyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
