"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
function default_1(number, index) {
    let inflectionIndex = 0;
    const isInflectionNeeded = index == 1 || index == 3 || index == 5 || index == 7 || index == 9 || index == 11 || index == 13;
    if (isInflectionNeeded && number >= 5) {
        inflectionIndex = 1;
    }
    return [
        [['právě teď', 'právě teď']],
        [
            ['před %s vteřinami', 'za %s vteřiny'],
            ['před %s vteřinami', 'za %s vteřin'],
        ],
        [['před minutou', 'za minutu']],
        [
            ['před %s minutami', 'za %s minuty'],
            ['před %s minutami', 'za %s minut'],
        ],
        [['před hodinou', 'za hodinu']],
        [
            ['před %s hodinami', 'za %s hodiny'],
            ['před %s hodinami', 'za %s hodin'],
        ],
        [['včera', 'zítra']],
        [
            ['před %s dny', 'za %s dny'],
            ['před %s dny', 'za %s dnů'],
        ],
        [['minulý týden', 'příští týden']],
        [
            ['před %s týdny', 'za %s týdny'],
            ['před %s týdny', 'za %s týdnů'],
        ],
        [['minulý měsíc', 'přístí měsíc']],
        [
            ['před %s měsíci', 'za %s měsíce'],
            ['před %s měsíci', 'za %s měsíců'],
        ],
        [['před rokem', 'přístí rok']],
        [
            ['před %s lety', 'za %s roky'],
            ['před %s lety', 'za %s let'],
        ],
    ][index][inflectionIndex];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxhQUFhO0FBQ2IsbUJBQXlCLE1BQWMsRUFBRSxLQUFhO0lBQ3BELElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQTtJQUV2QixNQUFNLGtCQUFrQixHQUN0QixLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFBO0lBQ2xHLElBQUksa0JBQWtCLElBQUksTUFBTSxJQUFJLENBQUMsRUFBRTtRQUNyQyxlQUFlLEdBQUcsQ0FBQyxDQUFBO0tBQ3BCO0lBRUQsT0FBTztRQUNMLENBQUMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDNUI7WUFDRSxDQUFDLG1CQUFtQixFQUFFLGVBQWUsQ0FBQztZQUN0QyxDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQztTQUN0QztRQUNELENBQUMsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDL0I7WUFDRSxDQUFDLGtCQUFrQixFQUFFLGNBQWMsQ0FBQztZQUNwQyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztTQUNwQztRQUNELENBQUMsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDL0I7WUFDRSxDQUFDLGtCQUFrQixFQUFFLGNBQWMsQ0FBQztZQUNwQyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztTQUNwQztRQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEI7WUFDRSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7WUFDNUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO1NBQzdCO1FBQ0QsQ0FBQyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNsQztZQUNFLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQztZQUNoQyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUM7U0FDakM7UUFDRCxDQUFDLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2xDO1lBQ0UsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7WUFDbEMsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7U0FDbkM7UUFDRCxDQUFDLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzlCO1lBQ0UsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDO1lBQzlCLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQztTQUM5QjtLQUNGLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFxQixDQUFBO0FBQy9DLENBQUM7QUE5Q0QsNEJBOENDIn0=