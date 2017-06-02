export interface Day9ControllerStateParams extends ng.ui.IStateParamsService
{
    parameter: string;
}
export class Day9Controller
{
  parameter: string;
  constructor($stateParams: Day9ControllerStateParams, $state: ng.ui.IStateService)
  {
    this.parameter = $stateParams.parameter;
    console.log($stateParams.parameter);
  }
}
