"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
// @ts-ignore
function default_1(diff, idx) {
    if (idx === 0)
        return ['just now', 'right now'];
    let unit = EN_US[Math.floor(idx / 2)];
    if (diff > 1)
        unit += 's';
    return [`${diff} ${unit} ago`, `in ${diff} ${unit}`];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5fVVMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvZW5fVVMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEtBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBRTFFLGFBQWE7QUFDYixtQkFBeUIsSUFBWSxFQUFFLEdBQVc7SUFDaEQsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDL0MsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckMsSUFBSSxJQUFJLEdBQUcsQ0FBQztRQUFFLElBQUksSUFBSSxHQUFHLENBQUE7SUFDekIsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUE7QUFDdEQsQ0FBQztBQUxELDRCQUtDIn0=