// @ts-ignore
export default function (number, index) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2xhbmcvY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYTtBQUNiLE1BQU0sQ0FBQyxPQUFPLFdBQVcsTUFBYyxFQUFFLEtBQWE7SUFDcEQsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFBO0lBRXZCLE1BQU0sa0JBQWtCLEdBQ3RCLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUE7SUFDbEcsSUFBSSxrQkFBa0IsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ3JDLGVBQWUsR0FBRyxDQUFDLENBQUE7S0FDcEI7SUFFRCxPQUFPO1FBQ0wsQ0FBQyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM1QjtZQUNFLENBQUMsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO1lBQ3RDLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxDQUFDO1NBQ3RDO1FBQ0QsQ0FBQyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMvQjtZQUNFLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDO1lBQ3BDLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO1NBQ3BDO1FBQ0QsQ0FBQyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMvQjtZQUNFLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDO1lBQ3BDLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO1NBQ3BDO1FBQ0QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQjtZQUNFLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztZQUM1QixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7U0FDN0I7UUFDRCxDQUFDLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2xDO1lBQ0UsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDO1lBQ2hDLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQztTQUNqQztRQUNELENBQUMsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDbEM7WUFDRSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztZQUNsQyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztTQUNuQztRQUNELENBQUMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDOUI7WUFDRSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUM7WUFDOUIsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDO1NBQzlCO0tBQ0YsQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLENBQXFCLENBQUE7QUFDL0MsQ0FBQyJ9