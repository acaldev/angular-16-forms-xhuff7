import { HashMap } from "@ngneat/transloco";

interface ValidationError {
    key: string,
    message: string;
    variable?: HashMap
}

export { ValidationError };
