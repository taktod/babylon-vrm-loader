import { Vector3 } from '@babylonjs/core/Maths/math';
import type { Mesh } from '@babylonjs/core/Meshes/mesh';
import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Scene } from '@babylonjs/core/scene';
import type { Nullable } from '@babylonjs/core/types';
import { SpringBoneController } from './secondary-animation/spring-bone-controller';
import { HumanoidBone } from './humanoid-bone';
import type { IVRM } from './vrm-interfaces';
/**
 * Unity Humanoid Bone 名
 */
export declare type HumanBoneName = 'hips' | 'leftUpperLeg' | 'rightUpperLeg' | 'leftLowerLeg' | 'rightLowerLeg' | 'leftFoot' | 'rightFoot' | 'spine' | 'chest' | 'neck' | 'head' | 'leftShoulder' | 'rightShoulder' | 'leftUpperArm' | 'rightUpperArm' | 'leftLowerArm' | 'rightLowerArm' | 'leftHand' | 'rightHand' | 'leftToes' | 'rightToes' | 'leftEye' | 'rightEye' | 'jaw' | 'leftThumbProximal' | 'leftThumbIntermediate' | 'leftThumbDistal' | 'leftIndexProximal' | 'leftIndexIntermediate' | 'leftIndexDistal' | 'leftMiddleProximal' | 'leftMiddleIntermediate' | 'leftMiddleDistal' | 'leftRingProximal' | 'leftRingIntermediate' | 'leftRingDistal' | 'leftLittleProximal' | 'leftLittleIntermediate' | 'leftLittleDistal' | 'rightThumbProximal' | 'rightThumbIntermediate' | 'rightThumbDistal' | 'rightIndexProximal' | 'rightIndexIntermediate' | 'rightIndexDistal' | 'rightMiddleProximal' | 'rightMiddleIntermediate' | 'rightMiddleDistal' | 'rightRingProximal' | 'rightRingIntermediate' | 'rightRingDistal' | 'rightLittleProximal' | 'rightLittleIntermediate' | 'rightLittleDistal' | 'upperChest' | string;
/**
 * VRM キャラクターを動作させるためのマネージャ
 */
export declare class VRMManager {
    readonly ext: IVRM;
    readonly scene: Scene;
    private readonly meshesFrom;
    private readonly transformNodesFrom;
    private readonly materialsNodesFrom;
    private isBinaryMorphMap;
    private morphTargetMap;
    private materialValueBindingMergerMap;
    private presetMorphTargetMap;
    private transformNodeMap;
    private transformNodeCache;
    private meshCache;
    private _humanoidBone;
    private _rootMesh;
    /**
     * Secondary Animation として定義されている VRM Spring Bone のコントローラ
     */
    readonly springBoneController: SpringBoneController;
    /**
     *
     * @param ext glTF.extensions.VRM の中身 json
     * @param scene
     * @param meshesFrom この番号以降のメッシュがこの VRM に該当する
     * @param transformNodesFrom この番号以降の TransformNode がこの VRM に該当する
     * @param materialsNodesFrom この番号以降の Material がこの VRM に該当する
     */
    constructor(ext: IVRM, scene: Scene, meshesFrom: number, transformNodesFrom: number, materialsNodesFrom: number);
    /**
     * Secondary Animation を更新する
     *
     * @param deltaTime 前フレームからの経過秒数(sec)
     */
    update(deltaTime: number): Promise<void>;
    /**
     * 破棄処理
     */
    dispose(): void;
    /**
     * モーフィングを行う
     * @param label モーフ名
     * @param value 値(0〜1)
     */
    morphing(label: string, value: number): void;
    /**
     * プリセットモーフのモーフィングを行う
     * @param label モーフ名
     * @param value 値(0〜1)
     */
    morphingPreset(label: string, value: number): void;
    /**
     * モーフィング用の値を計算する
     * @param label モーフ名
     * @param value 値
     */
    private calcMorphValue;
    /**
     * list morphing name
     */
    getMorphingList(): string[];
    /**
     * 一人称時のカメラ位置を絶対座標として取得する
     *
     * firstPersonBone が未設定の場合は null を返す
     *
     * @returns 一人称時のカメラの現在における絶対座標
     */
    getFirstPersonCameraPosition(): Nullable<Vector3>;
    /**
     * 一人称時に頭とみなす TransformNode を取得する
     */
    getFirstPersonBone(): Nullable<TransformNode>;
    /**
     * ボーン名からそのボーンに該当する TransformNode を取得する
     *
     * @param name HumanBoneName
     * @deprecated Use humanoidBone getter instead. This method will delete at v2.
     */
    getBone(name: HumanBoneName): Nullable<TransformNode>;
    /**
     * Get HumanoidBone Methods
     */
    get humanoidBone(): HumanoidBone;
    /**
     * VRM Root mesh
     *
     * Useful for Model Transformation
     */
    get rootMesh(): Mesh;
    /**
     * node 番号から該当する TransformNode を探す
     * 数が多くなるのでキャッシュに参照を持つ構造にする
     * gltf の node 番号は `metadata.gltf.pointers` に記録されている
     * @param nodeIndex
     */
    findTransformNode(nodeIndex: number): Nullable<TransformNode>;
    /**
     * mesh 番号からメッシュを探す
     * gltf の mesh 番号は `metadata.gltf.pointers` に記録されている
     * @deprecated Use findMeshes instead. This method has broken.
     */
    findMesh(meshIndex: number): Nullable<Mesh>;
    /**
     * mesh 番号からメッシュを探す
     * gltf の mesh 番号は `metadata.gltf.pointers` に記録されている
     */
    findMeshes(meshIndex: number): Nullable<Mesh[]>;
    /**
     * 事前に MorphTarget と isBinary を紐付ける
     */
    private constructIsBinaryMap;
    /**
     * 事前に MorphTarget と BlendShape を紐付ける
     */
    private constructMorphTargetMap;
    /**
     * 事前に MaterialValueBindingMerger とモーフ名を紐付ける
     */
    private constructMaterialValueBindingMergerMap;
    /**
     * 事前に TransformNode と bone 名を紐づける
     */
    private constructTransformNodeMap;
    /**
     * node 番号と TransformNode を紐づける
     */
    private constructTransformNodeCache;
    /**
     * mesh 番号と Mesh を紐づける
     */
    private constructMeshCache;
}
