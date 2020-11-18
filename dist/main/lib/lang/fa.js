"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// As persian language has different number symbols we need to replace regular numbers
// to standard persian numbres.
function toPersianNumber(number) {
    // List of standard persian numbers from 0 to 9
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, (x) => persianDigits[parseInt(x)]);
}
// @ts-ignore
function default_1(number, index) {
    const formattedString = [
        ['لحظاتی پیش', 'همین حالا'],
        ['%s ثانیه پیش', '%s ثانیه دیگر'],
        ['۱ دقیقه پیش', '۱ دقیقه دیگر'],
        ['%s دقیقه پیش', '%s دقیقه دیگر'],
        ['۱ ساعت پیش', '۱ ساعت دیگر'],
        ['%s ساعت پیش', '%s ساعت دیگر'],
        ['۱ روز پیش', '۱ روز دیگر'],
        ['%s روز پیش', '%s روز دیگر'],
        ['۱ هفته پیش', '۱ هفته دیگر'],
        ['%s هفته پیش', '%s هفته دیگر'],
        ['۱ ماه پیش', '۱ ماه دیگر'],
        ['%s ماه پیش', '%s ماه دیگر'],
        ['۱ سال پیش', '۱ سال دیگر'],
        ['%s سال پیش', '%s سال دیگر'],
    ][index];
    // We convert regular numbers (%s) to standard persian numbers using toPersianNumber function
    return [
        formattedString[0].replace('%s', toPersianNumber(number)),
        formattedString[1].replace('%s', toPersianNumber(number)),
    ];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvZmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzRkFBc0Y7QUFDdEYsK0JBQStCO0FBQy9CLFNBQVMsZUFBZSxDQUFDLE1BQWM7SUFDckMsK0NBQStDO0lBQy9DLE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFFeEUsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDNUUsQ0FBQztBQUVELGFBQWE7QUFDYixtQkFBeUIsTUFBYyxFQUFFLEtBQWE7SUFDcEQsTUFBTSxlQUFlLEdBQUc7UUFDdEIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO1FBQzNCLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQztRQUNqQyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7UUFDL0IsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDO1FBQ2pDLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztRQUM3QixDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7UUFDL0IsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO1FBQzNCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztRQUM3QixDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7UUFDN0IsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDO1FBQy9CLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQztRQUMzQixDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7UUFDN0IsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO1FBQzNCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztLQUM5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRVIsNkZBQTZGO0lBQzdGLE9BQU87UUFDTCxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzFELENBQUE7QUFDSCxDQUFDO0FBdkJELDRCQXVCQyJ9