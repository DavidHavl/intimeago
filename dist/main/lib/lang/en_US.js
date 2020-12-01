"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
// @ts-ignore
function default_1(diff, idx) {
    let unit = EN_US[Math.floor(idx / 2)];
    if (diff > 1)
        unit += 's';
    if (idx === 0)
        return ['just now', `in ${diff} ${unit}`];
    return [`${diff} ${unit} ago`, `in ${diff} ${unit}`];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5fVVMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvZW5fVVMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEtBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBRTFFLGFBQWE7QUFDYixtQkFBeUIsSUFBWSxFQUFFLEdBQVc7SUFDaEQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckMsSUFBSSxJQUFJLEdBQUcsQ0FBQztRQUFFLElBQUksSUFBSSxHQUFHLENBQUE7SUFDekIsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUN4RCxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxNQUFNLEVBQUUsTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUN0RCxDQUFDO0FBTEQsNEJBS0MifQ==