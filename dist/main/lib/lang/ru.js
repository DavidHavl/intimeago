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
const seconds = formatNum.bind(null, 'секунду', '%s секунду', '%s секунды', '%s секунд'), minutes = formatNum.bind(null, 'минуту', '%s минуту', '%s минуты', '%s минут'), hours = formatNum.bind(null, 'час', '%s час', '%s часа', '%s часов'), days = formatNum.bind(null, 'день', '%s день', '%s дня', '%s дней'), weeks = formatNum.bind(null, 'неделю', '%s неделю', '%s недели', '%s недель'), months = formatNum.bind(null, 'месяц', '%s месяц', '%s месяца', '%s месяцев'), years = formatNum.bind(null, 'год', '%s год', '%s года', '%s лет');
// @ts-ignore
function default_1(number, index) {
    switch (index) {
        case 0:
            return ['только что', 'через несколько секунд'];
        case 1:
            return [seconds(number) + ' назад', 'через ' + seconds(number)];
        case 2: // ['минуту назад', 'через минуту'];
        case 3:
            return [minutes(number) + ' назад', 'через ' + minutes(number)];
        case 4: // ['час назад', 'через час'];
        case 5:
            return [hours(number) + ' назад', 'через ' + hours(number)];
        case 6:
            return ['вчера', 'завтра'];
        case 7:
            return [days(number) + ' назад', 'через ' + days(number)];
        case 8: // ['неделю назад', 'через неделю'];
        case 9:
            return [weeks(number) + ' назад', 'через ' + weeks(number)];
        case 10: // ['месяц назад', 'через месяц'];
        case 11:
            return [months(number) + ' назад', 'через ' + months(number)];
        case 12: // ['год назад', 'через год'];
        case 13:
            return [years(number) + ' назад', 'через ' + years(number)];
        default:
            return ['', ''];
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvcnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7R0FRRztBQUNILFNBQVMsU0FBUyxDQUFDLEVBQVUsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO0lBQ3ZFLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDbEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBRVgsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ1gsR0FBRyxHQUFHLEVBQUUsQ0FBQTtLQUNUO1NBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDOUIsR0FBRyxHQUFHLENBQUMsQ0FBQTtLQUNSO1NBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRTtRQUNuRCxHQUFHLEdBQUcsQ0FBQyxDQUFBO0tBQ1I7SUFFRCxPQUFPLEdBQUcsQ0FBQTtBQUNaLENBQUM7QUFFRCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsRUFDdEYsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUM5RSxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLEVBQ3BFLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFDbkUsS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUM3RSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLEVBQzdFLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUVwRSxhQUFhO0FBQ2IsbUJBQXlCLE1BQWMsRUFBRSxLQUFhO0lBQ3BELFFBQVEsS0FBSyxFQUFFO1FBQ2IsS0FBSyxDQUFDO1lBQ0osT0FBTyxDQUFDLFlBQVksRUFBRSx3QkFBd0IsQ0FBQyxDQUFBO1FBQ2pELEtBQUssQ0FBQztZQUNKLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxFQUFFLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUNqRSxLQUFLLENBQUMsQ0FBQyxDQUFDLG9DQUFvQztRQUM1QyxLQUFLLENBQUM7WUFDSixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsRUFBRSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDakUsS0FBSyxDQUFDLENBQUMsQ0FBQyw4QkFBOEI7UUFDdEMsS0FBSyxDQUFDO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQzdELEtBQUssQ0FBQztZQUNKLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDNUIsS0FBSyxDQUFDO1lBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQzNELEtBQUssQ0FBQyxDQUFDLENBQUMsb0NBQW9DO1FBQzVDLEtBQUssQ0FBQztZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxFQUFFLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUM3RCxLQUFLLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztRQUMzQyxLQUFLLEVBQUU7WUFDTCxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDL0QsS0FBSyxFQUFFLENBQUMsQ0FBQyw4QkFBOEI7UUFDdkMsS0FBSyxFQUFFO1lBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQzdEO1lBQ0UsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtLQUNsQjtBQUNILENBQUM7QUE1QkQsNEJBNEJDIn0=