import logger from './logger';
import { Response } from 'express';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { API_RESPONSE_STATUS, API_RESPONSE_MESSAGE } from './constants';
import { ApplicationResponseException } from './applicationReponseErrror';

export default function (error: any, responseWriter: Response) {
	if (error instanceof ApplicationResponseException) {
		if (error.actualError) console.log(error.actualError);
		return responseWriter.status(error.statusCode ? error.statusCode : 500).json({
			message: error.message ? error.message : '',
			status: API_RESPONSE_STATUS.ERROR,
			code: error.errorCode ? error.errorCode : undefined,
		});
	}

	if (error instanceof TokenExpiredError) {
		return responseWriter.status(401).json({
			message: 'Token expired',
			status: API_RESPONSE_STATUS.ERROR,
			code: 'TOKEN_EXPIRED',
		});
	}

	if (error instanceof JsonWebTokenError) {
		if (error.message === 'invalid token' || error.message === "invalid signature")
			return responseWriter.status(401).json({
				message: 'unauthenticated',
				status: API_RESPONSE_STATUS.ERROR,
				code: 'INVALID_TOKEN',
			});
	}

	if (error?.name === 'ValidationError') {
		let err;
		for (let field in error?.errors) {
			err = error?.errors[field]?.message;
			break;
		}
		return responseWriter
			.status(400)
			.json({ message: err, status: API_RESPONSE_STATUS.ERROR, code: 'VALIDATION_ERROR' });
	}

	if (error?.name === 'MongoError' || error?.name === "MongoServerError") {
		if (error?.code === 11000) {
			return responseWriter.status(409).json({
				message: API_RESPONSE_MESSAGE.RESOURCE_EXISTS,
				status: API_RESPONSE_STATUS.ERROR,
				code: 'RESOURCE_ALREADY_EXISTS',
			});
		}
	}
	logger.error(error);
	return responseWriter
		.status(500)
		.json({ status: API_RESPONSE_STATUS.ERROR, message: 'Internal Server Error', code: 'INTERNAL_SERVER_ERROR' });
}
