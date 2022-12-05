export const USER_RESPONSE_MESSAGE = {
    ALREADY_EXISTS: "User already exists",
    CREATED: "User created successfully",
    ALL_USERS: "Users data fetched successfully", 
}

export const API_RESPONSE_STATUS = {
	ERROR: 'error',
	SUCCESS: 'success',
};

export const API_RESPONSE_MESSAGE = {
	RESOURCE_EXISTS: 'Resource already exists',
	RESOURCE_NOT_FOUND: 'Resource not found',
	INTERNAL_SERVER_ERROR: 'Internal server error, try again later',
	INVALID_CREDENTIALS: 'Invalid credentials',
};

export const CODE_TYPES = {
	VERIFICATION: 'verification',
	PASSWORD_RESET: 'password_reset',
};

export const INDUSTRY_TYPE = {
	COMPANY: 'company',
};

export const EMPLOYEE_RANGE = {
	RANGE_A: 'range_a',
	RANGE_B: 'range_b',
	RANGE_C: 'range_c',
	RANGE_D: 'range_d',
};

export const PRODUCT_REQUIRED = {
	NO_PRODUCT_IMAGES: 'Please upload at least one product image',
};

export const USER_IMAGE_REQUIRED = {
	NO_LOGO: 'Please upload Business Logo',
	NO_ID_CARD: 'Please upload ID Card',
	NO_NATIONAL_ID: 'Please upload National ID',
}

export const FILE_TYPES = {
	ARTICLE: 'application/pdf',
	AUDIO: 'audio',
	VIDEO: 'video',
	IMAGE: 'image',
};

export const FILE_SIZE = {
	// in mb
	ARTICLE: 2,
	AUDIO: 10,
	VIDEO: 50,
	IMAGE: 2,
};

export const ERROR_CODES = { NOT_BUSINESS_EMAIL: '32009', VALIDATION_FAILED: '4001' };

export const ERROR_MESSAGES = {
	NOT_BUSINESS_EMAIL: 'Email is not a valid business email',
	VALIDATION_FAILED: 'Validation failed',
};

export const USER_ROLE = {
	ADMIN: 'admin',
	CUSTOMER: 'customer',
	VENDOR: 'vendor',
	ARTISAN: 'artisan',
	DELIVERY_PERSON: 'delivery_person',
	AFFILIATE: 'affiliate',
};

export const GENDER = {
	MALE: 'male',
	FEMALE: 'female',
};

export const ORDER_STATUS = {
	PENDING_PAYMENT: 'pending_payment',
	PROCESSING: 'processing',
	COMPLETED: 'completed',
	CANCELLED: 'cancelled',
	REFUNDED: 'refunded',
	FAILED: 'failed',
};

export const CATEGORY_NAME = {
	STUDENT_OWNED: 'UMFOODS',
	OUTSIDE_SCHOOL_SERVICE: 'outside_school_service',
	INSIDE_SCHOOL_SERVICE: 'inside_school_service',
};

export const PRODUCT_STATUS = {
	DELETED: 'deleted',
};

export const CART_REQUIRED_FIELDS = {
	NOT_LESS_THAN_ONE: 'Quantity must be greater than 0',
};
