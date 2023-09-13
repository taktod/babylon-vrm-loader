import type { Vector3 } from '@babylonjs/core/Maths/math';
import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Collider } from './collider';
/**
 * VRM SpringBone ColliderGroup
 */
export declare class ColliderGroup {
    readonly transform: TransformNode;
    readonly colliders: Collider[];
    /**
     * @param transform The node of the collider group for setting up collision detections.
     */
    constructor(transform: TransformNode);
    /**
     * Add offsetted collider
     *
     * @param offset The local coordinate from the node of the collider group.
     * @param radius The radius of the collider.
     */
    addCollider(offset: Vector3, radius: number): void;
}
