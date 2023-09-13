import type { Material } from '@babylonjs/core';
import type { IVRMBlendShapeMaterialBind } from './vrm-interfaces';
/**
 * @see https://github.com/vrm-c/UniVRM/blob/4ffd97c2e9339683ce9bf21e73f510bd90c2a5b2/Assets/VRM/Runtime/BlendShape/MaterialValueBindingMerger.cs
 */
export declare class MaterialValueBindingMerger {
    private readonly materialValues;
    private readonly m_materialMap;
    private readonly m_materialSetterMap;
    private m_materialValueMap;
    private m_used;
    private readonly baseValueCache;
    private materialValuesToApply;
    /**
     * @param materials VRMの全 Material
     * @param materialValues
     */
    constructor(materials: Material[], materialValues: IVRMBlendShapeMaterialBind[]);
    /**
     * UniVRM では Dictionary のキー用のクラスを定義しているが、文字列で代用する
     * MaterialValueBinding.BaseValue は対応するプロパティの初期値なので無視できる
     */
    private makeBindingKey;
    /**
     * UniVRM では Dictionary のキー用のクラスを定義しているが、文字列で代用する
     */
    private makeTargetKey;
    /**
     * モーフィングを行う
     * @param value 値(0〜1)
     */
    morphing(value: number): void;
    /**
     * materialValue ごとに重みを計算する
     */
    private accumulateValue;
    /**
     * Material のプロパティを更新する
     */
    private apply;
    /**
     * マテリアルのテクスチャか色に対応する Vector4 を取得する
     */
    private getMaterialProperty;
    /**
     * Texture を Vector4 に変換する
     */
    private convertTextureIntoVector4WhenNotNull;
    /**
     * Color3 に alpha を加えて Vector4 に変換する
     */
    private convertColorIntoVector4;
    /**
     * マテリアルのテクスチャか色を更新する
     */
    private updateMaterialProperty;
    /**
     * Texture を Vector4 で更新する
     */
    private updateTextureWhenNotNull;
    /**
     * Color3 を Vector4 で更新する
     */
    private updateColor;
}
