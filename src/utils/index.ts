/**
 * 将设计稿尺寸，转换为自适应尺寸
 * px => vw
 * @param px
 */
export const _s = (px: number, maxWidthPx = 375) => (px / maxWidthPx) * 100 + 'vw';
