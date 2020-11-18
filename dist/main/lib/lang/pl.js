"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 0-13 alternately: single unit of time,
// genitive plural form for all other numbers excluding cases below:
// 14-20: nominative plural form for the numbers 2,3,4
// and all other numbers higher than 21 which end in 2,3,4
const l = [
    ['w tej chwili', 'za chwilę'],
    ['%s sekund temu', 'za %s sekund'],
    ['1 minutę temu', 'za 1 minutę'],
    ['%s minut temu', 'za %s minut'],
    ['1 godzinę temu', 'za 1 godzinę'],
    ['%s godzin temu', 'za %s godzin'],
    ['1 dzień temu', 'za 1 dzień'],
    ['%s dni temu', 'za %s dni'],
    ['1 tydzień temu', 'za 1 tydzień'],
    ['%s tygodni temu', 'za %s tygodni'],
    ['1 miesiąc temu', 'za 1 miesiąc'],
    ['%s miesięcy temu', 'za %s miesięcy'],
    ['1 rok temu', 'za 1 rok'],
    ['%s lat temu', 'za %s lat'],
    ['%s sekundy temu', 'za %s sekundy'],
    ['%s minuty temu', 'za %s minuty'],
    ['%s godziny temu', 'za %s godziny'],
    ['%s dni temu', 'za %s dni'],
    ['%s tygodnie temu', 'za %s tygodnie'],
    ['%s miesiące temu', 'za %s miesiące'],
    ['%s lata temu', 'za %s lata'],
];
// @ts-ignore
function default_1(number, index) {
    // to determine which plural form must be used check the last 2 digits
    // and calculate new index value to get the nominative form (14-20)
    // for all other cases use index value as it is (0-13)
    return l[index & 1 ? (number % 10 > 4 || number % 10 < 2 || 1 === ~~(number / 10) % 10 ? index : ++index / 2 + 13) : index];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBeUM7QUFDekMsb0VBQW9FO0FBQ3BFLHNEQUFzRDtBQUN0RCwwREFBMEQ7QUFDMUQsTUFBTSxDQUFDLEdBQUc7SUFDUixDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUM7SUFDN0IsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7SUFDbEMsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDO0lBQ2hDLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQztJQUNoQyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztJQUNsQyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztJQUNsQyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUM7SUFDOUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO0lBQzVCLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO0lBQ2xDLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO0lBQ3BDLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO0lBQ2xDLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQzFCLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztJQUM1QixDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztJQUNwQyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztJQUNsQyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztJQUNwQyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7SUFDNUIsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO0lBQ3RDLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQztDQUMvQixDQUFBO0FBRUQsYUFBYTtBQUNiLG1CQUF5QixNQUFjLEVBQUUsS0FBYTtJQUNwRCxzRUFBc0U7SUFDdEUsbUVBQW1FO0lBQ25FLHNEQUFzRDtJQUN0RCxPQUFPLENBQUMsQ0FDTixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLE1BQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUM5RixDQUFBO0FBQ3ZCLENBQUM7QUFQRCw0QkFPQyJ9