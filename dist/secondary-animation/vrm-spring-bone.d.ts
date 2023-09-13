import { Vector3 } from '@babylonjs/core/Maths/math';
import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Nullable } from '@babylonjs/core/types';
import type { ColliderGroup } from './collider-group';
import { VRMSpringBoneLogic } from './vrm-spring-bone-logic';
/**
 * @see https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/UniVRM/Scripts/SpringBone/VRMSpringBone.cs
 */
export declare class VRMSpringBone {
    readonly comment: string;
    readonly stiffness: number;
    readonly gravityPower: number;
    readonly gravityDir: Vector3;
    readonly dragForce: number;
    readonly center: Nullable<TransformNode>;
    readonly hitRadius: number;
    readonly bones: Array<Nullable<TransformNode>>;
    readonly colliderGroups: ColliderGroup[];
    verlets: VRMSpringBoneLogic[];
    private activeBones;
    /** @hidden */
    private drawGizmo;
    /**
     * @see https://github.com/vrm-c/vrm-specification/tree/master/specification/0.0
     * @param comment Annotation comment
     * @param stiffness The resilience of the swaying object (the power of returning to the initial pose).
     * @param gravityPower The strength of gravity.
     * @param gravityDir The direction of gravity. Set (0, -1, 0) for simulating the gravity. Set (1, 0, 0) for simulating the wind.
     * @param dragForce The resistance (deceleration) of automatic animation.
     * @param center The reference point of a swaying object can be set at any location except the origin.
     *               When implementing UI moving with warp,
     *               the parent node to move with warp can be specified if you don't want to make the object swaying with warp movement.
     * @param hitRadius The radius of the sphere used for the collision detection with colliders.
     * @param bones Specify the node index of the root bone of the swaying object.
     * @param colliderGroups Specify the index of the collider group for collisions with swaying objects.
     */
    constructor(comment: string, stiffness: number, gravityPower: number, gravityDir: Vector3, dragForce: number, center: Nullable<TransformNode>, hitRadius: number, bones: Array<Nullable<TransformNode>>, colliderGroups: ColliderGroup[]);
    private setupGizmo;
    /**
     * Update bones
     *
     * @param deltaTime
     */
    update(deltaTime: number): Promise<void>;
}
