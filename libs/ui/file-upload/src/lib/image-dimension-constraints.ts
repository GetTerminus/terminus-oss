
/**
 * An individual size constraint
 */
export interface TsFileImageDimensionConstraint {
  height: {
    min: number;
    max: number;
  };
  width: {
    min: number;
    max: number;
  };
}

/**
 * An array of file size constraints
 */
export type TsFileImageDimensionConstraints = TsFileImageDimensionConstraint[];
