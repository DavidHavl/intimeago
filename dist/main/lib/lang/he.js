"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
function default_1(number, index) {
    return [
        ['זה עתה', 'עכשיו'],
        ['לפני %s שניות', 'בעוד %s שניות'],
        ['לפני דקה', 'בעוד דקה'],
        ['לפני %s דקות', 'בעוד %s דקות'],
        ['לפני שעה', 'בעוד שעה'],
        number === 2 ? ['לפני שעתיים', 'בעוד שעתיים'] : ['לפני %s שעות', 'בעוד %s שעות'],
        ['אתמול', 'מחר'],
        number === 2 ? ['לפני יומיים', 'בעוד יומיים'] : ['לפני %s ימים', 'בעוד %s ימים'],
        ['לפני שבוע', 'בעוד שבוע'],
        number === 2 ? ['לפני שבועיים', 'בעוד שבועיים'] : ['לפני %s שבועות', 'בעוד %s שבועות'],
        ['לפני חודש', 'בעוד חודש'],
        number === 2 ? ['לפני חודשיים', 'בעוד חודשיים'] : ['לפני %s חודשים', 'בעוד %s חודשים'],
        ['לפני שנה', 'בעוד שנה'],
        number === 2 ? ['לפני שנתיים', 'בעוד שנתיים'] : ['לפני %s שנים', 'בעוד %s שנים'],
    ][index];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvaGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxhQUFhO0FBQ2IsbUJBQXlCLE1BQWMsRUFBRSxLQUFhO0lBQ3BELE9BQU87UUFDTCxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7UUFDbkIsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDO1FBQ2xDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztRQUN4QixDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7UUFDaEMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7UUFDaEYsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1FBQ2hCLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7UUFDaEYsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO1FBQzFCLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO1FBQ3RGLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztRQUMxQixNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQztRQUN0RixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7UUFDeEIsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQztLQUNqRixDQUFDLEtBQUssQ0FBcUIsQ0FBQTtBQUM5QixDQUFDO0FBakJELDRCQWlCQyJ9