type NameMapPeer<V> = [V, string];
export function makeNameMap<V>(specs: Array<NameMapPeer<V>>) {
  return specs.reduce((cur, [key, desc]: NameMapPeer<V>) => {
    cur.set(key, desc);
    return cur;
  }, new Map<V, string>());
}

/**
 * px => vw
 * @param px
 */
export const _s = (px: number, maxWidthPx = 375) => (px / maxWidthPx) * 100 + 'vw';
