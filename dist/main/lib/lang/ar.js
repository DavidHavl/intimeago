"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timeTypes = [
    ['ثانية', 'ثانيتين', '%s ثوان', '%s ثانية'],
    ['دقيقة', 'دقيقتين', '%s دقائق', '%s دقيقة'],
    ['ساعة', 'ساعتين', '%s ساعات', '%s ساعة'],
    ['يوم', 'يومين', '%s أيام', '%s يوماً'],
    ['أسبوع', 'أسبوعين', '%s أسابيع', '%s أسبوعاً'],
    ['شهر', 'شهرين', '%s أشهر', '%s شهراً'],
    ['عام', 'عامين', '%s أعوام', '%s عاماً'],
];
function formatTime(type, n) {
    if (n < 3)
        return timeTypes[type][n - 1];
    if (n >= 3 && n <= 10)
        return timeTypes[type][2];
    return timeTypes[type][3];
}
// @ts-ignore
function default_1(number, index) {
    if (index === 0) {
        return ['منذ لحظات', 'بعد لحظات'];
    }
    const timeStr = formatTime(Math.floor(index / 2), number);
    return ['منذ' + ' ' + timeStr, 'بعد' + ' ' + timeStr];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLFNBQVMsR0FBRztJQUNoQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUMzQyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztJQUM1QyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQztJQUN6QyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUN2QyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztJQUMvQyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUN2QyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztDQUN6QyxDQUFBO0FBRUQsU0FBUyxVQUFVLENBQUMsSUFBWSxFQUFFLENBQVM7SUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUFFLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFBRSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNoRCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMzQixDQUFDO0FBRUQsYUFBYTtBQUNiLG1CQUF5QixNQUFjLEVBQUUsS0FBYTtJQUNwRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDZixPQUFPLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0tBQ2xDO0lBRUQsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3pELE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLE9BQU8sRUFBRSxLQUFLLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFBO0FBQ3ZELENBQUM7QUFQRCw0QkFPQyJ9