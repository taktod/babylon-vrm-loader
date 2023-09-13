import type { Mesh } from '@babylonjs/core';
import type { Vector3 } from '@babylonjs/core/Maths/math';
/**
 * Collider
 */
export declare class Collider {
    readonly offset: Vector3;
    readonly radius: number;
    readonly sphere: Mesh;
    /**
     * @param offset The local coordinate from the node of the collider group.
     * @param radius The radius of the collider.
     * @param sphere The spehere mesh for worldMatrix and gizmo.
     */
    constructor(offset: Vector3, radius: number, sphere: Mesh);
}
