import { SHOW_SEARCH_RESULTS,SORT_ALPHABETS_ASC,SORT_ALPHABETS_DESC,SORT_BY_DATE_ASC,SORT_BY_DATE_DESC,SORT_BY_QUALITY_ASC,SORT_BY_QUALITY_DESC,FILTER_EXPLICIT } from "./actionTypes"


export const showSearchResults = (payload)=>({
    type: SHOW_SEARCH_RESULTS,
    payload,
})

export const sortAplhabetsAsc = ()=>({
    type: SORT_ALPHABETS_ASC
})

export const sortAplhabetsDesc = ()=>({
    type: SORT_ALPHABETS_DESC
})

export const sortByDateAsc = ()=>({
    type: SORT_BY_DATE_ASC
})

export const sortByDateDesc = ()=>({
    type: SORT_BY_DATE_DESC
})

export const sortQualityAsc = ()=>({
    type: SORT_BY_QUALITY_ASC
})

export const sortQualityDesc = ()=>({
    type: SORT_BY_QUALITY_DESC
})

export const filterExplicit = ()=>({
    type: FILTER_EXPLICIT
})


