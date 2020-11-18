// As persian language has different number symbols we need to replace regular numbers
// to standard persian numbres.
function toPersianNumber(number) {
    // List of standard persian numbers from 0 to 9
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, (x) => persianDigits[parseInt(x)]);
}
// @ts-ignore
export default function (number, index) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvZmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQXNGO0FBQ3RGLCtCQUErQjtBQUMvQixTQUFTLGVBQWUsQ0FBQyxNQUFjO0lBQ3JDLCtDQUErQztJQUMvQyxNQUFNLGFBQWEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBRXhFLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzVFLENBQUM7QUFFRCxhQUFhO0FBQ2IsTUFBTSxDQUFDLE9BQU8sV0FBVyxNQUFjLEVBQUUsS0FBYTtJQUNwRCxNQUFNLGVBQWUsR0FBRztRQUN0QixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7UUFDM0IsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDO1FBQ2pDLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztRQUMvQixDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUM7UUFDakMsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO1FBQzdCLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztRQUMvQixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7UUFDM0IsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO1FBQzdCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztRQUM3QixDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7UUFDL0IsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO1FBQzNCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztRQUM3QixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7UUFDM0IsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO0tBQzlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFUiw2RkFBNkY7SUFDN0YsT0FBTztRQUNMLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDMUQsQ0FBQTtBQUNILENBQUMifQ==