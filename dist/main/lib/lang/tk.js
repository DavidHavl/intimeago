"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TK = ['sekunt', 'minut', 'sagat', 'gün', 'hepde', 'aý', 'ýyl'];
function getSuffix(unit) {
    return unit.match(/[aouy]/) ? 'dan' : 'den';
}
// @ts-ignore
function default_1(diff, idx) {
    if (idx === 0)
        return ['biraz öň', 'şuwagt'];
    const unit = TK[Math.floor(idx / 2)];
    return [`${diff} ${unit} öň`, `${diff} ${unit}${getSuffix(unit)}`];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvdGsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQ3BFLFNBQVMsU0FBUyxDQUFDLElBQVk7SUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtBQUM3QyxDQUFDO0FBQ0QsYUFBYTtBQUNiLG1CQUF5QixJQUFZLEVBQUUsR0FBVztJQUNoRCxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUM1QyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNwQyxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUUsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDcEUsQ0FBQztBQUpELDRCQUlDIn0=