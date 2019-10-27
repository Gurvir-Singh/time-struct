
// Will take the old object and replace the values of the keys with the updated properties.
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}