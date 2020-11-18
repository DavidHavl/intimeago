// 0-13 alternately: single unit of time,
// genitive plural form for all other numbers excluding cases below:
// 14-20: nominative plural form for the numbers 2,3,4
// and all other numbers higher than 21 which end in 2,3,4
const l = [
    ['w tej chwili', 'za chwilę'],
    ['%s sekund temu', 'za %s sekund'],
    ['1 minutę temu', 'za 1 minutę'],
    ['%s minut temu', 'za %s minut'],
    ['1 godzinę temu', 'za 1 godzinę'],
    ['%s godzin temu', 'za %s godzin'],
    ['1 dzień temu', 'za 1 dzień'],
    ['%s dni temu', 'za %s dni'],
    ['1 tydzień temu', 'za 1 tydzień'],
    ['%s tygodni temu', 'za %s tygodni'],
    ['1 miesiąc temu', 'za 1 miesiąc'],
    ['%s miesięcy temu', 'za %s miesięcy'],
    ['1 rok temu', 'za 1 rok'],
    ['%s lat temu', 'za %s lat'],
    ['%s sekundy temu', 'za %s sekundy'],
    ['%s minuty temu', 'za %s minuty'],
    ['%s godziny temu', 'za %s godziny'],
    ['%s dni temu', 'za %s dni'],
    ['%s tygodnie temu', 'za %s tygodnie'],
    ['%s miesiące temu', 'za %s miesiące'],
    ['%s lata temu', 'za %s lata'],
];
// @ts-ignore
export default function (number, index) {
    // to determine which plural form must be used check the last 2 digits
    // and calculate new index value to get the nominative form (14-20)
    // for all other cases use index value as it is (0-13)
    return l[index & 1 ? (number % 10 > 4 || number % 10 < 2 || 1 === ~~(number / 10) % 10 ? index : ++index / 2 + 13) : index];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDO0FBQ3pDLG9FQUFvRTtBQUNwRSxzREFBc0Q7QUFDdEQsMERBQTBEO0FBQzFELE1BQU0sQ0FBQyxHQUFHO0lBQ1IsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDO0lBQzdCLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO0lBQ2xDLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQztJQUNoQyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUM7SUFDaEMsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7SUFDbEMsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7SUFDbEMsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDO0lBQzlCLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztJQUM1QixDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztJQUNsQyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztJQUNwQyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztJQUNsQyxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO0lBQ3RDLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMxQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7SUFDNUIsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUM7SUFDcEMsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7SUFDbEMsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUM7SUFDcEMsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO0lBQzVCLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUM7Q0FDL0IsQ0FBQTtBQUVELGFBQWE7QUFDYixNQUFNLENBQUMsT0FBTyxXQUFXLE1BQWMsRUFBRSxLQUFhO0lBQ3BELHNFQUFzRTtJQUN0RSxtRUFBbUU7SUFDbkUsc0RBQXNEO0lBQ3RELE9BQU8sQ0FBQyxDQUNOLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQzlGLENBQUE7QUFDdkIsQ0FBQyJ9