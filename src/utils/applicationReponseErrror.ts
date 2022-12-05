export class ApplicationResponseException extends Error {
    statusCode: number | undefined;
    errorCode: number | undefined;
    actualError: string | undefined;
	constructor(message: string, statusCode: number, errorCode: number | null = null, actualError: string | null = null) {
		super(message);
		this.name = 'ApplicationResponseException';
		if (statusCode) this.statusCode = statusCode;
		if (errorCode) this.errorCode = errorCode;
		if (actualError) this.actualError = actualError;
	}
}
