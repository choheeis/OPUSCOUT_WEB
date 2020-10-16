/* External Dependencies */
import React, { useReducer, createContext, useContext } from 'react';
import { GetCategoryStateData } from '../contextData/GetCategoryStateData';

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
        minSeller: 0,
        maxSeller: 0,
        minOpportunity: 0,
        maxOpportunity: 0,
        mustKeword: ''
    },
    category: {
        minSales: 0,
        maxSales: 0,
        minPrice: 0,
        maxPrice: 0,
        minRevenue: 0,
        maxRevenue: 0,
        minSeller: 0,
        maxSeller: 0,
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

const initServerResponseValue = []
const initSortingInfoValue = {
    sort_by: "opportunity_score",
    order_by: "asc",
    page: 0
}
const initHotItem = {
    year: 0,
    month: 0,
    week_1: [{ranking: 1, item : "" }],
    week_2: [{ranking: 1, item : "" }],
    week_3: [{ranking: 1, item : "" }],
    week_4: [{ranking: 1, item : "" }],
    week_5: [{ranking: 1, item : "" }]
}
const initAccess = {
    login : {
        id : "",
        password : ""
    },
    signUp : {
        name : "",
        id : "",
        email : "",
        code : "",
        password : ""
    },
    check : {
        id : false,
        code : false
    }
}

/* 카테고리 상태값 업데이트 리듀서 */
function CategoryCheckReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE' : 
            return state.map(
                checkbox => checkbox.map( box =>
                    box.id === action.id ? { ...box, check: !box.check } : box
                )
            )
        case 'RESET' :
            state = GetCategoryStateData('large');
            return state;
        default:
            throw new Error('Unhandled action type');
    }
}

/* 중 카테고리 상태값 업데이트 리듀서 */
function MiddleCategoryCheckReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE' : 
            const fashionState = state.fashion.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const beautyState = state.beauty.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const childState = state.child.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const foodState = state.food.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const kitchenState = state.kitchen.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const lifeGoodsState = state.life_goods.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const interiorState = state.interior.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const digitalState = state.digital.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const sportState = state.sport.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const carState = state.car.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const bookState = state.book.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const toyState = state.toy.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const officeState = state.office.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const petState = state.pet.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            const healthState = state.health.map(box => box.id === action.id ? { ...box, check: !box.check } : box);
            return {
                fashion : fashionState,
                beauty : beautyState,
                child : childState,
                food : foodState,
                kitchen : kitchenState,
                life_goods : lifeGoodsState,
                interior : interiorState,
                digital : digitalState,
                sport : sportState,
                car : carState,
                book : bookState,
                toy : toyState,
                office : officeState,
                pet : petState,
                health : healthState
              };
        case 'RESET' :
            state = GetCategoryStateData('middle');
            return state
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
            if (action.id === "9") {
                state.item.minInvest = action.value;
            }
            if (action.id === "10") {
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
            if (action.id === "7") {
                state.category.minSeller = action.value;
            }
            if (action.id === "8") {
                state.category.maxSeller = action.value;
            }
            if (action.id === "9") {
                state.category.minOpportunity = action.value.min;
                state.category.maxOpportunity = action.value.max;
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
                state.keyword.minSeller = action.value;
            }
            if (action.id === "10") {
                state.keyword.maxSeller = action.value;
            }
            if (action.id === "11") {
                state.keyword.minOpportunity = action.value.min;
                state.keyword.maxOpportunity = action.value.max;
            }
            if (action.id === "13") {
                state.keyword.mustKeword = action.value;
            }
            return state;
        default:
            throw new Error('Unhandled action type');
    }
}

// 서버에서 응답받은 리스트 상태 업데이트 리듀서
function ServerResponseStateReducer(state, action) {
    switch (action.type) {
        case 'SET_ITEM_RESPONSE_DATA' : 
            return state = action.value;
        case 'SET_KEYWORD_RESPONSE_DATA' :
            return state = action.value;
        case 'SET_CATEGORY_RESPONSE_DATA' :
            return state = action.value;
        case 'SET_HOT_RESPONSE_DATA' : 
            return state = action.value;
        case 'RESET' : 
            return state = initServerResponseValue;
        // case 'RESET_HOT_ITEM' : 
        //     return state = initHotItem;
        default :
            throw new Error('Unhandled action type');
    }
}

// 정렬 Info 상태 업데이트 리듀서
function SortingStateReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_SORTING_INFO' :
            return {
                ...state,
                sort_by : action.sort_by,
                order_by : action.order_by
              };
        case 'UPDATE_PAGE_INFO' :
            return {
                ...state,
                page : action.page
              };
        default :
            throw new Error('Unhandled action type');
    }
}

// login, signup 상태값 업데이트
function AccessReducer(state, action) {
    switch(action.type) {
        case 'SEND_CODE' :
            return state;
        case 'INPUT_CHANGE' :
            if(action.id === "name") {
                state.signUp.name = action.value;
            }
            if(action.id === "id") {
                state.signUp.id = action.value;
            }
            if(action.id === "email") {
                state.signUp.email = action.value;
            }
            if(action.id === "code") {
                state.signUp.code = action.value;
            }
            if(action.id === "password") {
                state.signUp.password = action.value;
            }
            return state;
        case 'CHECK' :
            if(action.id === "code") {
                state.check.code = true
            }
        case 'RESET' :
            return state = initAccess;
        default :
            throw new Error('Unhandled action type')
    }
}

/* context 선언 */
const CategoryStateContext = createContext();
const CategoryDispatchContext = createContext();
const RightItemStateContext = createContext();
const RightItemDispatchContext = createContext();
const ServerResponseStateContext = createContext();
const ServerResponseDispatchContext = createContext();
const SortingStateContext = createContext();
const SortingDispatchContext = createContext();
const MiddleCategoryStateContext = createContext();
const MiddleCategoryDispatchContext = createContext();
const AccessStateContext = createContext();
const AccessDispatchContext = createContext();

export function MainProvider({ children }) {
    const [categoryState, categoryDispatch] = useReducer(CategoryCheckReducer, GetCategoryStateData('large'));
    const [rightItemState, rightItemDispatch] = useReducer(RightItemReducer, initRightFilterValue);
    const [serverResponseState, serverResponseDispatch] = useReducer(ServerResponseStateReducer, initServerResponseValue);
    const [sortingInfoState, sortingInfoDispatch] = useReducer(SortingStateReducer, initSortingInfoValue);
    const [middleCategoryState, middleCategoryDispatch] = useReducer(MiddleCategoryCheckReducer, GetCategoryStateData('middle'));
    const [accessState, accessDispatch] = useReducer(AccessReducer, initAccess)

    return(
        <CategoryStateContext.Provider value={categoryState}>
            <CategoryDispatchContext.Provider value={categoryDispatch}>
                <RightItemStateContext.Provider value={rightItemState}>
                    <RightItemDispatchContext.Provider value={rightItemDispatch}>
                        <ServerResponseStateContext.Provider value={serverResponseState}>
                            <ServerResponseDispatchContext.Provider value={serverResponseDispatch}>
                                <SortingStateContext.Provider value={sortingInfoState}>
                                    <SortingDispatchContext.Provider value={sortingInfoDispatch}>
                                        <MiddleCategoryStateContext.Provider value={middleCategoryState}>
                                            <MiddleCategoryDispatchContext.Provider value={middleCategoryDispatch}>
                                                <AccessStateContext.Provider value={accessState}>
                                                    <AccessDispatchContext.Provider value={accessDispatch}>
                                                        {children}
                                                    </AccessDispatchContext.Provider>
                                                </AccessStateContext.Provider>
                                            </MiddleCategoryDispatchContext.Provider>
                                        </MiddleCategoryStateContext.Provider>
                                    </SortingDispatchContext.Provider>
                                </SortingStateContext.Provider>
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

export function useSortingInfoState() {
    const context = useContext(SortingStateContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

export function useSortingInfoDispatch() {
    const context = useContext(SortingDispatchContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

export function useMiddleCategoryState() {
    const context = useContext(MiddleCategoryStateContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

export function useMiddleCategoryDispatch() {
    const context = useContext(MiddleCategoryDispatchContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

export function useAccessState() {
    const context = useContext(AccessStateContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

export function useAccessDispatch() {
    const context = useContext(AccessDispatchContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}