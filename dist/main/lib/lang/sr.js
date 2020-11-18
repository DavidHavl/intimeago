"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatNum(single, one, few, other, n) {
    const rem10 = n % 10;
    const rem100 = n % 100;
    if (n == 1) {
        return single;
    }
    else if (rem10 == 1 && rem100 != 11) {
        return one;
    }
    else if (rem10 >= 2 && rem10 <= 4 && !(rem100 >= 12 && rem100 <= 14)) {
        return few;
    }
    else {
        return other;
    }
}
const seconds = formatNum.bind(null, '1 секунд', '%s секунд', '%s секунде', '%s секунди'), minutes = formatNum.bind(null, '1 минут', '%s минут', '%s минуте', '%s минута'), hours = formatNum.bind(null, 'сат времена', '%s сат', '%s сата', '%s сати'), days = formatNum.bind(null, '1 дан', '%s дан', '%s дана', '%s дана'), weeks = formatNum.bind(null, 'недељу дана', '%s недељу', '%s недеље', '%s недеља'), months = formatNum.bind(null, 'месец дана', '%s месец', '%s месеца', '%s месеци'), years = formatNum.bind(null, 'годину дана', '%s годину', '%s године', '%s година');
// @ts-ignore
function default_1(number, index) {
    switch (index) {
        case 0:
            return ['малопре', 'управо сад'];
        case 1:
            return ['пре ' + seconds(number), 'за ' + seconds(number)];
        case 2:
        case 3:
            return ['пре ' + minutes(number), 'за ' + minutes(number)];
        case 4:
        case 5:
            return ['пре ' + hours(number), 'за ' + hours(number)];
        case 6:
        case 7:
            return ['пре ' + days(number), 'за ' + days(number)];
        case 8:
        case 9:
            return ['пре ' + weeks(number), 'за ' + weeks(number)];
        case 10:
        case 11:
            return ['пре ' + months(number), 'за ' + months(number)];
        case 12:
        case 13:
            return ['пре ' + years(number), 'за ' + years(number)];
        default:
            return ['', ''];
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvc3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTLFNBQVMsQ0FBQyxNQUFjLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBRSxLQUFhLEVBQUUsQ0FBUztJQUNuRixNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ3BCLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7SUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ1YsT0FBTyxNQUFNLENBQUE7S0FDZDtTQUFNLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksRUFBRSxFQUFFO1FBQ3JDLE9BQU8sR0FBRyxDQUFBO0tBQ1g7U0FBTSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxNQUFNLElBQUksRUFBRSxDQUFDLEVBQUU7UUFDdEUsT0FBTyxHQUFHLENBQUE7S0FDWDtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUE7S0FDYjtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsRUFDdkYsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUMvRSxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQzNFLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFDcEUsS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUNsRixNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQ2pGLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUVwRixhQUFhO0FBQ2IsbUJBQXlCLE1BQWMsRUFBRSxLQUFhO0lBQ3BELFFBQVEsS0FBSyxFQUFFO1FBQ2IsS0FBSyxDQUFDO1lBQ0osT0FBTyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQTtRQUNsQyxLQUFLLENBQUM7WUFDSixPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDNUQsS0FBSyxDQUFDLENBQUM7UUFDUCxLQUFLLENBQUM7WUFDSixPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDNUQsS0FBSyxDQUFDLENBQUM7UUFDUCxLQUFLLENBQUM7WUFDSixPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDeEQsS0FBSyxDQUFDLENBQUM7UUFDUCxLQUFLLENBQUM7WUFDSixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDdEQsS0FBSyxDQUFDLENBQUM7UUFDUCxLQUFLLENBQUM7WUFDSixPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDeEQsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUU7WUFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDMUQsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUU7WUFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDeEQ7WUFDRSxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0tBQ2xCO0FBQ0gsQ0FBQztBQTNCRCw0QkEyQkMifQ==