export const ConvertToTitleCase = ( text ) => {
    return text?.replace(
        /\w\S*/g,
        str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
    )
}
