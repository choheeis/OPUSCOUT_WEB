// 현재 월의 최대 주차 수 구하기
export function getMaxWeeks(year, month) {
    var nowDate = new Date(year, month-1, 1)
    var lastDate = new Date(year, month, 0).getDate()
    var monthSWeek = nowDate.getDay()
    var weekSeq = parseInt((parseInt(lastDate) + monthSWeek - 1)/7) + 1
    return weekSeq
}