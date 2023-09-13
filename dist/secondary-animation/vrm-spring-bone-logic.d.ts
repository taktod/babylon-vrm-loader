import { Vector3 } from '@babylonjs/core/Maths/math';
import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Nullable } from '@babylonjs/core/types';
import type { ColliderGroup } from './collider-group';
/**
 * Verlet Spring Bone
 */
export declare class VRMSpringBoneLogic {
    readonly center: Nullable<TransformNode>;
    readonly radius: number;
    readonly transform: TransformNode;
    /**
     * initial local transform Marix
     */
    private readonly initialLocalMatrix;
    /**
     * Cloned initial local rotation
     */
    private readonly initialLocalRotation;
    /**
     * Cloned initial local child position
     */
    private readonly initialLocalChildPosition;
    /**
     * Length of the bone in relative space unit.
     */
    private readonly centerSpaceBoneLength;
    /**
     * Position of the bone in relative space unit.
     */
    private readonly centerSpacePosition;
    /**
     * Reference of parent rotation
     */
    private readonly boneAxis;
    private currentTail;
    private prevTail;
    private nextTail;
    /**
     * @param center Center reference of TransformNode
     * @param radius Collision Radius
     * @param transform Base TransformNode
     */
    constructor(center: Nullable<TransformNode>, radius: number, transform: TransformNode);
    /**
     * Update Tail position
     *
     * @param stiffnessForce Current frame stiffness
     * @param dragForce Current frame drag force
     * @param external Current frame external force
     * @param colliderGroups Current frame colliderGroups
     */
    update(stiffnessForce: number, dragForce: number, external: Vector3, colliderGroups: ColliderGroup[]): void;
    /**
     * Create a matrix that converts world space into center space.
     * @param result Target matrix
     */
    private getMatrixWorldToCenter;
    /**
     * Returns the world matrix of its parent object.
     */
    private getParentMatrixWorld;
    /**
     * 衝突判定を行う
     * @param colliderGroups
     * @param tail
     */
    private collide;
}
