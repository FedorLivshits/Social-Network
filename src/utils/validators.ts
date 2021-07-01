export const required: (value: string) => string | undefined = (value) => {
    if (value) return undefined

    return "Field is required"
}