"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
// @ts-ignore
function default_1(diff, idx) {
    if (idx === 0)
        return ['刚刚', '片刻后'];
    const unit = ZH_CN[~~(idx / 2)];
    return [`${diff} ${unit}前`, `${diff} ${unit}后`];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhfQ04uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvemhfQ04udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBRXBELGFBQWE7QUFDYixtQkFBeUIsSUFBWSxFQUFFLEdBQVc7SUFDaEQsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDbkMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQy9CLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ2pELENBQUM7QUFKRCw0QkFJQyJ9