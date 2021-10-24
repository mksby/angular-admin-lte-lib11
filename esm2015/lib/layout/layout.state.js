export class LayoutState {
    constructor(config) {
        this.isSidebarLeftCollapsed = false;
        this.isSidebarLeftExpandOnOver = false;
        this.isSidebarLeftMouseOver = false;
        this.isSidebarLeftMini = true;
        this.sidebarRightSkin = 'dark';
        this.isSidebarRightCollapsed = true;
        this.isSidebarRightOverContent = true;
        this.layout = 'normal';
        this.sidebarLeftMenu = [];
        this.sidebarLeftMenuActiveUrl = '';
        this.skin = 'blue';
        Object.assign(this, config);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicmFyeS9hbmd1bGFyLWFkbWluLWx0ZS9zcmMvbGliL2xheW91dC9sYXlvdXQuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUEsTUFBTSxPQUFPLFdBQVc7SUFrQnRCLFlBQVksTUFBZ0M7UUFaNUMsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLDhCQUF5QixHQUFHLEtBQUssQ0FBQztRQUNsQywyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDL0Isc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLHFCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUMxQiw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFDL0IsOEJBQXlCLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLFdBQU0sR0FBSSxRQUFRLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsNkJBQXdCLEdBQUcsRUFBRSxDQUFDO1FBQzlCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFHWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlQ29uZiB7XG4gIGlzU2lkZWJhckxlZnRDb2xsYXBzZWQ/OiBib29sZWFuO1xuICBpc1NpZGViYXJMZWZ0RXhwYW5kT25PdmVyPzogYm9vbGVhbjtcbiAgaXNTaWRlYmFyTGVmdE1vdXNlT3Zlcj86IGJvb2xlYW47XG4gIGlzU2lkZWJhckxlZnRNaW5pPzogYm9vbGVhbjtcbiAgc2lkZWJhclJpZ2h0U2tpbj86IHN0cmluZztcbiAgaXNTaWRlYmFyUmlnaHRDb2xsYXBzZWQ/OiBib29sZWFuO1xuICBpc1NpZGViYXJSaWdodE92ZXJDb250ZW50PzogYm9vbGVhbjtcbiAgbGF5b3V0Pzogc3RyaW5nO1xuICBzaWRlYmFyTGVmdE1lbnU/OiBBcnJheTxvYmplY3Q+O1xuICBzaWRlYmFyTGVmdE1lbnVBY3RpdmVVcmw/OiBzdHJpbmc7XG4gIHNraW4/OiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIExheW91dFN0YXRlIGltcGxlbWVudHMgTGF5b3V0U3RhdGVDb25mIHtcbiAgd2luZG93SW5uZXJIZWlnaHQ/OiBudW1iZXI7XG4gIHdpbmRvd0lubmVyV2lkdGg/OiBudW1iZXI7XG4gIHNpZGViYXJMZWZ0RWxlbWVudEhlaWdodD86IG51bWJlcjtcbiAgc2lkZWJhclJpZ2h0RWxlbWVudEhlaWdodD86IG51bWJlcjtcblxuICBpc1NpZGViYXJMZWZ0Q29sbGFwc2VkID0gZmFsc2U7XG4gIGlzU2lkZWJhckxlZnRFeHBhbmRPbk92ZXIgPSBmYWxzZTtcbiAgaXNTaWRlYmFyTGVmdE1vdXNlT3ZlciA9IGZhbHNlO1xuICBpc1NpZGViYXJMZWZ0TWluaSA9IHRydWU7XG4gIHNpZGViYXJSaWdodFNraW4gPSAnZGFyayc7XG4gIGlzU2lkZWJhclJpZ2h0Q29sbGFwc2VkID0gdHJ1ZTtcbiAgaXNTaWRlYmFyUmlnaHRPdmVyQ29udGVudCA9IHRydWU7XG4gIGxheW91dCA9ICAnbm9ybWFsJztcbiAgc2lkZWJhckxlZnRNZW51ID0gW107XG4gIHNpZGViYXJMZWZ0TWVudUFjdGl2ZVVybCA9ICcnO1xuICBza2luID0gJ2JsdWUnO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUGFydGlhbDxMYXlvdXRTdGF0ZUNvbmY+KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG59XG4iXX0=