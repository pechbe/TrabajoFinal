export const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase()
    return array.filter(value => {
        return value.name.toLowerCase().match(new RegExp(searchTerm, 'id')) ||
        value.mainCategory.toLowerCase().match(new RegExp(searchTerm, 'id')) ||
        value.secondaryCategory.toLowerCase().match(new RegExp(searchTerm, 'id'))
        
    })
}