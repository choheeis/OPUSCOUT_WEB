/* External Dependencies */
import React, { useReducer, createContext, useContext } from 'react';

const initCategory = [
    [
        {
            id: 1,
            name: '패션의류/잡화',
            en_name: 'fashion',
            check: false
        },
        {
            id: 2,
            name: '뷰티',
            en_name: 'beauty',
            check: false
        },
        {
            id: 3,
            name: '출산/유아동',
            en_name: '',
            check: false
        },
        {
            id: 4,
            name: '식품',
            en_name: 'food',
            check: false
        },
        {
            id: 5,
            name: '주방용품',
            en_name: '',
            check: false
        },
        {
            id: 6,
            name: '생활용품',
            en_name: '',
            check: false
        }
    ],
    [
        {
            id: 7,
            name: '홈인테리어',
            en_name: '',
            check: false
        },
        {
            id: 8,
            name: '가전디지털',
            en_name: '',
            check: false
        },
        {
            id: 9,
            name: '스포츠/레저',
            en_name: '',
            check: false
        },
        {
            id: 10,
            name: '자동차용품',
            en_name: '',
            check: false
        },
        {
            id: 11,
            name: '도서/음반/DVD',
            en_name: '',
            check: false
        },
        {
            id: 12,
            name: '완구/취미',
            en_name: '',
            check: false
        }
    ],
    [
        {
            id: 13,
            name: '문구/오피스',
            en_name: '',
            check: false
        },
        {
            id: 14,
            name: '반려동물용품',
            en_name: '',
            check: false
        },
        {
            id: 15,
            name: '헬스/건강식품',
            en_name: '',
            check: false
        }
    ],
]

const initRightFilterValue = {
    item: {
        minSales: 0,
        maxSales: 0,
        minRevenue: 0,
        maxRevenue: 0,
        minPrice: 0,
        maxPrice: 0,
        minReview: 0,
        maxReview: 0,
        minInvest: 0,
        maxInvest: 0
    },
    keyword: {
        minSales: 0,
        maxSales: 0,
        minRevenue: 0,
        maxRevenue: 0,
        minPrice: 0,
        maxPrice: 0,
        minReview: 0,
        maxReview: 0,
        mustKeword: ''
    },
    category: {
        minSales: 0,
        maxSales: 0,
        minPrice: 0,
        maxPrice: 0,
        minRevenue: 0,
        maxRevenue: 0,
        minOpportunity: 0,
        maxOpportunity: 0
    },
    hot:{
        first: [],
        second: [],
        third: [],
        fourth: [],
        fifth: []
    }
}

const initServerResponseValue = {
    item: {
        minSales: 0,
        maxSales: 0,
        minRevenue: 0,
        maxRevenue: 0,
        minPrice: 0,
        maxPrice: 0,
        minReview: 0,
        maxReview: 0,
        minInvest: 0,
        maxInvest: 0
    },
    keyword: {
        minSales: 0,
        maxSales: 0,
        minRevenue: 0,
        maxRevenue: 0,
        minPrice: 0,
        maxPrice: 0,
        minReview: 0,
        maxReview: 0,
        mustKeword: ''
    },
    category: {
        minSales: 0,
        maxSales: 0,
        minPrice: 0,
        maxPrice: 0,
        minRevenue: 0,
        maxRevenue: 0,
        minOpportunity: 0,
        maxOpportunity: 0
    },
    hot:{
        first: [],
        second: [],
        third: [],
        fourth: [],
        fifth: []
    }
}

const initLogin = {
    id: '',
    password: ''
}

/* 카테고리 상태값 업데이트 리듀서 */
function CategoryCheckReducer(state, action) {
    switch (action.type) {
        // 카테고리 체크 박스 토글될 때 check 상태 업데이트 액션
        case 'TOGGLE' : 
            return state.map(
                checkbox => checkbox.map( box =>
                    box.id === action.id ? { ...box, check: !box.check } : box
                )
            )
        // 카테고리 체크 박스 상태 리셋 액션
        case 'RESET' :
            state = initCategory;
            return state;
        default:
            throw new Error('Unhandled action type');
    }
}

/* 오른쪽 필터 상태값 업데이트 리듀서 */
function RightItemReducer(state, action) {
    switch (action.type) {
        case 'ITEM_INPUT_CHANGE' :
            if (action.id === "1") {
                state.item.minSales = action.value;
            }
            if (action.id === "2") {
                state.item.maxSales = action.value;
            }
            if (action.id === "3") {
                state.item.minRevenue = action.value;
            }
            if (action.id === "4") {
                state.item.maxRevenue = action.value;
            }
            if (action.id === "5") {
                state.item.minPrice = action.value;
            }
            if (action.id === "6") {
                state.item.maxPrice = action.value;
            }
            if (action.id === "7") {
                state.item.minReview = action.value;
            }
            if (action.id === "8") {
                state.item.maxReview = action.value;
            }
            if (action.id === "8") {
                state.item.minInvest = action.value;
            }
            if (action.id === "8") {
                state.item.maxInvest = action.value;
            }
            return state;
        case 'CATEGORY_INPUT_CHANGE' :
            if (action.id === "1") {
                state.category.minSales = action.value;
            }
            if (action.id === "2") {
                state.category.maxSales = action.value;
            }
            if (action.id === "3") {
                state.category.minRevenue = action.value;
            }
            if (action.id === "4") {
                state.category.maxRevenue = action.value;
            }
            if (action.id === "5") {
                state.category.minPrice = action.value;
            }
            if (action.id === "6") {
                state.category.maxPrice = action.value;
            }
            return state;
        case 'KEYWORD_INPUT_CHANGE' :
            if (action.id === "1") {
                state.keyword.minSales = action.value;
            }
            if (action.id === "2") {
                state.keyword.maxSales = action.value;
            }
            if (action.id === "3") {
                state.keyword.minRevenue = action.value;
            }
            if (action.id === "4") {
                state.keyword.maxRevenue = action.value;
            }
            if (action.id === "5") {
                state.keyword.minPrice = action.value;
            }
            if (action.id === "6") {
                state.keyword.maxPrice = action.value;
            }
            if (action.id === "7") {
                state.keyword.minReview = action.value;
            }
            if (action.id === "8") {
                state.keyword.maxReview = action.value;
            }
            if (action.id === "9") {
                state.keyword.mustKeword = action.value;
            }
            return state;
        default:
            throw new Error('Unhandled action type');
    }
}

function ServerResponseStateReducer(state, action) {
    switch (action.type) {
        case 'SET_ITEM_RESPONSE_DATA' : 
            console.log('리듀서 들어옴');
            state = action.value
        return state;
        default :
            throw new Error('Unhandled action type');
    }
}

/* context 선언 */
const CategoryStateContext = createContext();
const CategoryDispatchContext = createContext();
const RightItemStateContext = createContext();
const RightItemDispatchContext = createContext();
const ServerResponseStateContext = createContext();
const ServerResponseDispatchContext = createContext();

export function MainProvider({ children }) {
    const [categoryState, categoryDispatch] = useReducer(CategoryCheckReducer, initCategory);
    const [rightItemState, rightItemDispatch] = useReducer(RightItemReducer, initRightFilterValue);
    const [serverResponseState, serverResponseDispatch] = useReducer(ServerResponseStateReducer, initServerResponseValue);

    return(
        <CategoryStateContext.Provider value={categoryState}>
            <CategoryDispatchContext.Provider value={categoryDispatch}>
                <RightItemStateContext.Provider value={rightItemState}>
                    <RightItemDispatchContext.Provider value={rightItemDispatch}>
                        <ServerResponseStateContext.Provider value={serverResponseState}>
                            <ServerResponseDispatchContext.Provider value={serverResponseDispatch}>
                                {children}
                            </ServerResponseDispatchContext.Provider>
                        </ServerResponseStateContext.Provider>
                    </RightItemDispatchContext.Provider>
                </RightItemStateContext.Provider>
            </CategoryDispatchContext.Provider>
        </CategoryStateContext.Provider>
    )
}

export function useCategoryState() {
    const context = useContext(CategoryStateContext);
    if(!context) {
        // 예외 처리
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

export function useCategoryDispatch() {
    const context = useContext(CategoryDispatchContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

export function useRightItemState() {
    const context = useContext(RightItemStateContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

export function useRightItemDispatch() {
    const context = useContext(RightItemDispatchContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

export function useServerResponseState() {
    const context = useContext(ServerResponseStateContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

export function useServerResponseDispatch() {
    const context = useContext(ServerResponseDispatchContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}