import type { Material } from '@babylonjs/core/Materials/material';
import type { Mesh } from '@babylonjs/core/Meshes/mesh';
import type { Nullable } from '@babylonjs/core/types';
import type { IGLTFLoaderExtension, IMaterial, IMeshPrimitive } from '@babylonjs/loaders/glTF/2.0';
import { GLTFLoader } from '@babylonjs/loaders/glTF/2.0';
/**
 * VRM 拡張を処理する
 * [Specification](https://github.com/vrm-c/vrm-specification/tree/master/specification/0.0)
 */
export declare class VRM implements IGLTFLoaderExtension {
    private loader;
    /**
     * @inheritdoc
     */
    readonly name = "VRM";
    /**
     * @inheritdoc
     */
    enabled: boolean;
    /**
     * この Mesh index 以降が読み込み対象
     */
    private meshesFrom;
    /**
     * この TransformNode index 以降が読み込み対象
     */
    private transformNodesFrom;
    /**
     * この Material index 以降が読み込み対象
     */
    private materialsFrom;
    /**
     * @inheritdoc
     */
    constructor(loader: GLTFLoader);
    /**
     * @inheritdoc
     */
    dispose(): void;
    /**
     * @inheritdoc
     */
    onReady(): void;
    /**
     * @inheritdoc
     */
    _loadVertexDataAsync(context: string, primitive: IMeshPrimitive, babylonMesh: Mesh): null;
    /**
     * @inheritdoc
     */
    _loadMaterialAsync(context: string, material: IMaterial, mesh: Mesh, babylonDrawMode: number, assign: (babylonMaterial: Material) => void): Nullable<Promise<Material>>;
}
