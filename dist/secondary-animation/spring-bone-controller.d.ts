import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Nullable } from '@babylonjs/core/types';
import type { IVRMSecondaryAnimation } from '../vrm-interfaces';
/**
 * function to get bone from nodeIndex
 */
declare type getBone = (nodeIndex: number) => Nullable<TransformNode>;
/**
 * VRM SpringBone Controller
 */
export declare class SpringBoneController {
    readonly ext: IVRMSecondaryAnimation;
    /**
     * Spring Bone List
     */
    private springs;
    /**
     * @param ext SecondaryAnimation Object
     * @param getBone
     */
    constructor(ext: IVRMSecondaryAnimation, getBone: getBone);
    dispose(): void;
    /**
     * Update all SpringBones
     *
     * @param deltaTime Elapsed sec from previous frame
     * @see https://docs.unity3d.com/ScriptReference/Time-deltaTime.html
     */
    update(deltaTime: number): Promise<void>;
    private constructColliderGroups;
    private constructSprings;
}
export {};
