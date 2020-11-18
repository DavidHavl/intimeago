"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
function default_1(number, index) {
    const langTable = [
        ['chiar acum', 'chiar acum'],
        ['acum %s secunde', 'peste %s secunde'],
        ['acum un minut', 'peste un minut'],
        ['acum %s minute', 'peste %s minute'],
        ['acum o oră', 'peste o oră'],
        ['acum %s ore', 'peste %s ore'],
        ['acum o zi', 'peste o zi'],
        ['acum %s zile', 'peste %s zile'],
        ['acum o săptămână', 'peste o săptămână'],
        ['acum %s săptămâni', 'peste %s săptămâni'],
        ['acum o lună', 'peste o lună'],
        ['acum %s luni', 'peste %s luni'],
        ['acum un an', 'peste un an'],
        ['acum %s ani', 'peste %s ani'],
    ];
    if (number < 20) {
        return langTable[index];
    }
    // A `de` preposition must be added between the number and the adverb
    // if the number is greater than 20.
    return [langTable[index][0].replace('%s', '%s de'), langTable[index][1].replace('%s', '%s de')];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvcm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxhQUFhO0FBQ2IsbUJBQXlCLE1BQWMsRUFBRSxLQUFhO0lBQ3BELE1BQU0sU0FBUyxHQUFHO1FBQ2hCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztRQUM1QixDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO1FBQ3ZDLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO1FBQ25DLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7UUFDckMsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO1FBQzdCLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztRQUMvQixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7UUFDM0IsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDO1FBQ2pDLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUM7UUFDekMsQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsQ0FBQztRQUMzQyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7UUFDL0IsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDO1FBQ2pDLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztRQUM3QixDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7S0FDaEMsQ0FBQTtJQUVELElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRTtRQUNmLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBcUIsQ0FBQTtLQUM1QztJQUVELHFFQUFxRTtJQUNyRSxvQ0FBb0M7SUFDcEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFDakcsQ0FBQztBQXpCRCw0QkF5QkMifQ==