import { Controller, Get, Param } from '@nestjs/common';

@Controller('balance')
export class BalanceController {

    @Get(':id')
    findBalance(@Param('id') id: string) {
        return { id }
    }
}
