import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor() { }

    handleError(e: any): void {
        const title = 'PROVISIONAL';
        const message = 'PROVISIONAL';
        console.error(e);
    }
}