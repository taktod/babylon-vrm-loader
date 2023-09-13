import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Nullable } from '@babylonjs/core/types';
interface TransformNodeMap {
    [name: string]: TransformNode;
}
/**
 * HumanoidBone を取得するメソッド群
 * @see https://docs.unity3d.com/ja/2018.3/ScriptReference/HumanBodyBones.html
 */
export declare class HumanoidBone {
    private nodeMap;
    constructor(nodeMap: TransformNodeMap);
    dispose(): void;
    /**
     * 尻
     */
    get hips(): TransformNode;
    /**
     * 左太もも
     */
    get leftUpperLeg(): TransformNode;
    /**
     * 右太もも
     */
    get rightUpperLeg(): TransformNode;
    /**
     * 左ひざ
     */
    get leftLowerLeg(): TransformNode;
    /**
     * 右ひざ
     */
    get rightLowerLeg(): TransformNode;
    /**
     * 左足首
     */
    get leftFoot(): TransformNode;
    /**
     * 右足首
     */
    get rightFoot(): TransformNode;
    /**
     * 脊椎の第一
     */
    get spine(): TransformNode;
    /**
     * 胸
     */
    get chest(): TransformNode;
    /**
     * 首
     */
    get neck(): TransformNode;
    /**
     * 頭
     */
    get head(): TransformNode;
    /**
     * 左肩
     */
    get leftShoulder(): TransformNode;
    /**
     * 右肩
     */
    get rightShoulder(): TransformNode;
    /**
     * 左上腕
     */
    get leftUpperArm(): TransformNode;
    /**
     * 右上腕
     */
    get rightUpperArm(): TransformNode;
    /**
     * 左ひじ
     */
    get leftLowerArm(): TransformNode;
    /**
     * 右ひじ
     */
    get rightLowerArm(): TransformNode;
    /**
     * 左手首
     */
    get leftHand(): TransformNode;
    /**
     * 右手首
     */
    get rightHand(): TransformNode;
    /**
     * 左つま先(Optional)
     */
    get leftToes(): Nullable<TransformNode>;
    /**
     * 右つま先(Optional)
     */
    get rightToes(): Nullable<TransformNode>;
    /**
     * 左目(Optional)
     */
    get leftEye(): Nullable<TransformNode>;
    /**
     * 右目(Optional)
     */
    get rightEye(): Nullable<TransformNode>;
    /**
     * 顎(Optional)
     */
    get jaw(): Nullable<TransformNode>;
    /**
     * 左親指第一指骨(Optional)
     */
    get leftThumbProximal(): Nullable<TransformNode>;
    /**
     * 左親指第二指骨(Optional)
     */
    get leftThumbIntermediate(): Nullable<TransformNode>;
    /**
     * 左親指第三指骨(Optional)
     */
    get leftThumbDistal(): Nullable<TransformNode>;
    /**
     * 左人差し指第一指骨(Optional)
     */
    get leftIndexProximal(): Nullable<TransformNode>;
    /**
     * 左人差し指第二指骨(Optional)
     */
    get leftIndexIntermediate(): Nullable<TransformNode>;
    /**
     * 左人差し指第三指骨(Optional)
     */
    get leftIndexDistal(): Nullable<TransformNode>;
    /**
     * 左中指第一指骨(Optional)
     */
    get leftMiddleProximal(): Nullable<TransformNode>;
    /**
     * 左中指第二指骨(Optional)
     */
    get leftMiddleIntermediate(): Nullable<TransformNode>;
    /**
     * 左中指第三指骨(Optional)
     */
    get leftMiddleDistal(): Nullable<TransformNode>;
    /**
     * 左薬指第一指骨(Optional)
     */
    get leftRingProximal(): Nullable<TransformNode>;
    /**
     * 左薬指第二指骨(Optional)
     */
    get leftRingIntermediate(): Nullable<TransformNode>;
    /**
     * 左薬指第三指骨(Optional)
     */
    get leftRingDistal(): Nullable<TransformNode>;
    /**
     * 左小指第一指骨(Optional)
     */
    get leftLittleProximal(): Nullable<TransformNode>;
    /**
     * 左小指第二指骨(Optional)
     */
    get leftLittleIntermediate(): Nullable<TransformNode>;
    /**
     * 左小指第三指骨(Optional)
     */
    get leftLittleDistal(): Nullable<TransformNode>;
    /**
     * 右親指第一指骨(Optional)
     */
    get rightThumbProximal(): Nullable<TransformNode>;
    /**
     * 右親指第二指骨(Optional)
     */
    get rightThumbIntermediate(): Nullable<TransformNode>;
    /**
     * 右親指第三指骨(Optional)
     */
    get rightThumbDistal(): Nullable<TransformNode>;
    /**
     * 右人差し指第一指骨(Optional)
     */
    get rightIndexProximal(): Nullable<TransformNode>;
    /**
     * 右人差し指第二指骨(Optional)
     */
    get rightIndexIntermediate(): Nullable<TransformNode>;
    /**
     * 右人差し指第三指骨(Optional)
     */
    get rightIndexDistal(): Nullable<TransformNode>;
    /**
     * 右中指第一指骨(Optional)
     */
    get rightMiddleProximal(): Nullable<TransformNode>;
    /**
     * 右中指第二指骨(Optional)
     */
    get rightMiddleIntermediate(): Nullable<TransformNode>;
    /**
     * 右中指第三指骨(Optional)
     */
    get rightMiddleDistal(): Nullable<TransformNode>;
    /**
     * 右薬指第一指骨(Optional)
     */
    get rightRingProximal(): Nullable<TransformNode>;
    /**
     * 右薬指第二指骨(Optional)
     */
    get rightRingIntermediate(): Nullable<TransformNode>;
    /**
     * 右薬指第三指骨(Optional)
     */
    get rightRingDistal(): Nullable<TransformNode>;
    /**
     * 右小指第一指骨(Optional)
     */
    get rightLittleProximal(): Nullable<TransformNode>;
    /**
     * 右小指第二指骨(Optional)
     */
    get rightLittleIntermediate(): Nullable<TransformNode>;
    /**
     * 右小指第三指骨(Optional)
     */
    get rightLittleDistal(): Nullable<TransformNode>;
    /**
     * 上胸(Optional)
     */
    get upperChest(): Nullable<TransformNode>;
    /**
     * 必須ボーンを取得する。取得出来ない場合は例外を発生する
     *
     * @throws BoneNotFoundError
     * @param name HumanoidBoneName
     */
    private getMandatoryBone;
    /**
     * オプショナルボーンを取得する
     *
     * @param name HumanoidBoneName
     */
    private getOptionalBone;
}
export {};
