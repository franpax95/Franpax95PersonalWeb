export const addOpacityToColor = (color, opacity) => {
    const opacityHex = Math.round(opacity * 255).toString(16);
    return `${color}${opacityHex}`;
}

export const isStateValue = (state, value) => {
    return Object.values(state).includes(value);
}
