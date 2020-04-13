export const quarticIn = (t: number): number => {
  return t * t * t * t
}

export const quarticOut = (t: number): number => {
  const f = t - 1.0

  return f * f * f * (1.0 - t) + 1.0
}

export const quarticInOut = (t: number): number => {
  if (t < 0.5) {
    return 8.0 * t * t * t * t
  } else {
    const f = t - 1.0

    return 8.0 * f * f * f * f + 1.0
  }
}
