import { SHOW_SEARCH_RESULTS,SORT_ALPHABETS_ASC,SORT_ALPHABETS_DESC,SORT_BY_DATE_ASC,SORT_BY_DATE_DESC,SORT_BY_QUALITY_ASC,SORT_BY_QUALITY_DESC,FILTER_EXPLICIT } from "./actionTypes"

const init = {
    result:[]
}

const sortAplhabet1 = (data)=>{
    let array = data.sort((a,b)=>{ 
        return a.title > b.title ? 1: a.title < b.title ? -1 : 0
    })
    return array
}

const sortAplhabet2 = (data)=>{
    let array = data.sort((a,b)=>{
        return a.title < b.title ? 1: a.title > b.title ? -1 : 0
    })
    return array
}

const sortDate1 = (data)=>{
    let array = data.sort((a,b)=>{
        return a.creation_date > b.creation_date ? 1: a.creation_date < b.creation_date ? -1 : 0
    })
    return array
}

const sortDate2 = (data)=>{
    let array = data.sort((a,b)=>{
        return a.creation_date < b.creation_date ? 1: a.creation_date > b.creation_date ? -1 : 0
    })
    return array
}

const sortQuality1 = (data)=>{
    let array = data.sort((a,b)=>{
        return a.quality - b.quality 
    })
    return array
}

const sortQuality2 = (data)=>{
    let array = data.sort((a,b)=>{
        return b.quality - a.quality 
    })
    return array
}

const explicit = (data)=>{
    let array = data.filter((item)=> item.explicit === true )
    return array
}


export const SearchReducer = (store = init,{type,payload})=>{
    switch(type){
        
        case SHOW_SEARCH_RESULTS:
            return {...store,result:payload}

        case SORT_ALPHABETS_ASC:
          return {...store,result:[...sortAplhabet1(store.result)]}
        
        case SORT_ALPHABETS_DESC:
            return {...store,result:[...sortAplhabet2(store.result)]}

        case SORT_BY_DATE_ASC:
        return {...store,result:[...sortDate1(store.result)]}

        case SORT_BY_DATE_DESC:
        return {...store,result:[...sortDate2(store.result)]}

        case SORT_BY_QUALITY_ASC:
        return {...store,result:[...sortQuality1(store.result)]}

        case SORT_BY_QUALITY_DESC:
        return {...store,result:[...sortQuality2(store.result)]}
   
        
        case FILTER_EXPLICIT:
            return {...store,result:[...explicit(store.result)]}


        default:
          return store    
    }
}