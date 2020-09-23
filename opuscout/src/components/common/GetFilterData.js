import { useCategoryState, useRightItemState } from "../../provider/MainProvider";

export function GetFilterData() {
    const categoryState = useCategoryState();
    const rightItemState = useRightItemState();

    const checkedCategories = [];
    categoryState.map( section => 
        section.map( category =>{
            if(category.check === true) {
                checkedCategories.push(category.en_name);
            }
        })
    );

    // 서버 호출시 같이 보낼 바디 데이터
    const itemFilterBodyData = {
        "category" : checkedCategories,
        "sales" : {
            "min" : rightItemState.item.minSales,
            "max" : rightItemState.item.maxSales
        },
        "revenue" : {
            "min" : rightItemState.item.minRevenue,
            "max" : rightItemState.item.maxRevenue
        },
        "price" : {
            "min" : rightItemState.item.minPrice,
            "max" : rightItemState.item.maxPrice
        },
        "review" : {
            "min" : rightItemState.item.minReview,
            "max" : rightItemState.item.maxReview
        },
        "invest" : {
            "min" : rightItemState.item.minInvest,
            "max" : rightItemState.item.maxInvest
        }
    }

    return itemFilterBodyData;
}