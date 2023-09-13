/**
 * Throws when mandatory bone could not find
 */
export declare class BoneNotFoundError extends Error {
    readonly boneName: string;
    readonly name = "BoneNotFoundError";
    constructor(boneName: string);
}
