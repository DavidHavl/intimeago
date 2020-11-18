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
export default function (number, index) {
    if (index === 0) {
        return ['منذ لحظات', 'بعد لحظات'];
    }
    const timeStr = formatTime(Math.floor(index / 2), number);
    return ['منذ' + ' ' + timeStr, 'بعد' + ' ' + timeStr];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxTQUFTLEdBQUc7SUFDaEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDM0MsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7SUFDNUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7SUFDekMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDdkMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7SUFDL0MsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDdkMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7Q0FDekMsQ0FBQTtBQUVELFNBQVMsVUFBVSxDQUFDLElBQVksRUFBRSxDQUFTO0lBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFBRSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQUUsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDaEQsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDM0IsQ0FBQztBQUVELGFBQWE7QUFDYixNQUFNLENBQUMsT0FBTyxXQUFXLE1BQWMsRUFBRSxLQUFhO0lBQ3BELElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtRQUNmLE9BQU8sQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUE7S0FDbEM7SUFFRCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDekQsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUE7QUFDdkQsQ0FBQyJ9