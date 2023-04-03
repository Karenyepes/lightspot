export const isInt = (value: string) => {
    const intRegex = /^-?[0-9]+$/

    return intRegex.test(value.trim())
}

export const isFloat = (value: string) => {
    const floatRegex = /(^-?\d\d*\.\d\d*$)|(^-?\.\d\d*$)/

    return floatRegex.test(value.trim())
}
    