import { Test } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
describe('test AppController', () => {
    let appController;
    beforeEach(async () => {
        const app = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();
        appController = app.get(AppController);
    });
    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});
//# sourceMappingURL=app.controller.test.js.map