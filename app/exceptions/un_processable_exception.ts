import BaseException from '#exceptions/base_exception';

export default class UnProcessableException extends BaseException {
    constructor(message: string, code = 'E_UNPROCESSABLE_ENTITY') {
        super(message, 422, code);
    }
}
