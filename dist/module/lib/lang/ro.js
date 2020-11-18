// @ts-ignore
export default function (number, index) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvcm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYTtBQUNiLE1BQU0sQ0FBQyxPQUFPLFdBQVcsTUFBYyxFQUFFLEtBQWE7SUFDcEQsTUFBTSxTQUFTLEdBQUc7UUFDaEIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO1FBQzVCLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7UUFDdkMsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7UUFDbkMsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQztRQUNyQyxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7UUFDN0IsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDO1FBQy9CLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQztRQUMzQixDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUM7UUFDakMsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQztRQUN6QyxDQUFDLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDO1FBQzNDLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztRQUMvQixDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUM7UUFDakMsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO1FBQzdCLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztLQUNoQyxDQUFBO0lBRUQsSUFBSSxNQUFNLEdBQUcsRUFBRSxFQUFFO1FBQ2YsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFxQixDQUFBO0tBQzVDO0lBRUQscUVBQXFFO0lBQ3JFLG9DQUFvQztJQUNwQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtBQUNqRyxDQUFDIn0=