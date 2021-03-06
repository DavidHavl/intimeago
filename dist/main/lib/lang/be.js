"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param f1 - 1
 * @param f - 21, 31, ...
 * @param s - 2-4, 22-24, 32-34 ...
 * @param t - 5-20, 25-30, ...
 * @param n
 * @returns
 */
function formatNum(f1, f, s, t, n) {
    const n10 = n % 10;
    let str = t;
    if (n === 1) {
        str = f1;
    }
    else if (n10 === 1 && n > 20) {
        str = f;
    }
    else if (n10 > 1 && n10 < 5 && (n > 20 || n < 10)) {
        str = s;
    }
    return str;
}
const seconds = formatNum.bind(null, 'секунду', '%s секунду', '%s секунды', '%s секунд'), minutes = formatNum.bind(null, 'хвіліну', '%s хвіліну', '%s хвіліны', '%s хвілін'), hours = formatNum.bind(null, 'гадзіну', '%s гадзіну', '%s гадзіны', '%s гадзін'), days = formatNum.bind(null, 'дзень', '%s дзень', '%s дні', '%s дзён'), weeks = formatNum.bind(null, 'тыдзень', '%s тыдзень', '%s тыдні', '%s тыдняў'), months = formatNum.bind(null, 'месяц', '%s месяц', '%s месяцы', '%s месяцаў'), years = formatNum.bind(null, 'год', '%s год', '%s гады', '%s гадоў');
// @ts-ignore
function default_1(number, index) {
    switch (index) {
        case 0:
            return ['толькі што', 'праз некалькі секунд'];
        case 1:
            return [seconds(number) + ' таму', 'праз ' + seconds(number)];
        case 2:
        case 3:
            return [minutes(number) + ' таму', 'праз ' + minutes(number)];
        case 4:
        case 5:
            return [hours(number) + ' таму', 'праз ' + hours(number)];
        case 6:
        case 7:
            return [days(number) + ' таму', 'праз ' + days(number)];
        case 8:
        case 9:
            return [weeks(number) + ' таму', 'праз ' + weeks(number)];
        case 10:
        case 11:
            return [months(number) + ' таму', 'праз ' + months(number)];
        case 12:
        case 13:
            return [years(number) + ' таму', 'праз ' + years(number)];
        default:
            return ['', ''];
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvYmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7R0FRRztBQUNILFNBQVMsU0FBUyxDQUFDLEVBQVUsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO0lBQ3ZFLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDbEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBRVgsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ1gsR0FBRyxHQUFHLEVBQUUsQ0FBQTtLQUNUO1NBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDOUIsR0FBRyxHQUFHLENBQUMsQ0FBQTtLQUNSO1NBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRTtRQUNuRCxHQUFHLEdBQUcsQ0FBQyxDQUFBO0tBQ1I7SUFFRCxPQUFPLEdBQUcsQ0FBQTtBQUNaLENBQUM7QUFFRCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsRUFDdEYsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxFQUNsRixLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLEVBQ2hGLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFDckUsS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxFQUM5RSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLEVBQzdFLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUV0RSxhQUFhO0FBQ2IsbUJBQXlCLE1BQWMsRUFBRSxLQUFhO0lBQ3BELFFBQVEsS0FBSyxFQUFFO1FBQ2IsS0FBSyxDQUFDO1lBQ0osT0FBTyxDQUFDLFlBQVksRUFBRSxzQkFBc0IsQ0FBQyxDQUFBO1FBQy9DLEtBQUssQ0FBQztZQUNKLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxFQUFFLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMvRCxLQUFLLENBQUMsQ0FBQztRQUNQLEtBQUssQ0FBQztZQUNKLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxFQUFFLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMvRCxLQUFLLENBQUMsQ0FBQztRQUNQLEtBQUssQ0FBQztZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxFQUFFLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMzRCxLQUFLLENBQUMsQ0FBQztRQUNQLEtBQUssQ0FBQztZQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUN6RCxLQUFLLENBQUMsQ0FBQztRQUNQLEtBQUssQ0FBQztZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxFQUFFLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMzRCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRTtZQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxFQUFFLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUM3RCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRTtZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxFQUFFLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMzRDtZQUNFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7S0FDbEI7QUFDSCxDQUFDO0FBM0JELDRCQTJCQyJ9