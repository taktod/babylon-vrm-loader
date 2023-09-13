import type { Material } from '@babylonjs/core/Materials/material';
import type { Mesh } from '@babylonjs/core/Meshes/mesh';
import type { Nullable } from '@babylonjs/core/types';
import type { IGLTFLoaderExtension, IMaterial } from '@babylonjs/loaders/glTF/2.0';
import { GLTFLoader } from '@babylonjs/loaders/glTF/2.0';
/**
 * VCAST_vci_material_unity 拡張を処理する
 */
export declare class VCAST_vci_material_unity implements IGLTFLoaderExtension {
    private loader;
    /**
     * @inheritdoc
     */
    readonly name = "VCAST_vci_material_unity";
    /**
     * @inheritdoc
     */
    enabled: boolean;
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
    _loadMaterialAsync(context: string, material: IMaterial, mesh: Mesh, babylonDrawMode: number, assign: (babylonMaterial: Material) => void): Nullable<Promise<Material>>;
}
