
import {IRootScopeService } from '../index.run';

import {UserService} from '../user/user.service'

declare var Keen: any;

export class PulseController {

    /* @ngInject */
    constructor(
        public $scope: any,
        public $mdSidenav: any,
        public $http: angular.IHttpService,
        public $log: angular.ILogService,
        public $rootScope: IRootScopeService,
        public $timeout: angular.ITimeoutService,
        public $state: angular.ui.IStateService,
        public toastr: any,
        public UserService: UserService,
        public keen_project_id: string,
        public keen_read_key: string,
        private $firebaseObject: any
    ) {

        $log.log('PulseController...')

        this.renderPageViews();
        this.countUserInstances();

     
    }



    public countUserInstances = () => {

        var client = new Keen({
            projectId: this.keen_project_id,
            readKey: this.keen_read_key,
        });


        // Configure a Dataviz instance
        var chart = new Keen.Dataviz()
            .el('#chart_1')
            .colors(["#6ab975"])
            .height(180)
            .type('metric')
            .prepare();

        // Run a query
        client
            .query('count', {
                event_collection: "activity_instance_captures",
                timeframe: "this_14_days",
                timezone: "UTC"
            })
            .then(function (res) {
                // Handle the result
                chart
                    .data(res)
                    .render();
            })
            .catch(function (err) {
                // Handle errors
                chart.message(err.message);
            });
    }

    public renderPageViews = () => {

        var client = new Keen({
            projectId: this.keen_project_id,
            readKey: this.keen_read_key,
        });


        // Configure a Dataviz instance
        var chart = new Keen.Dataviz()
            .el('#chart_2')
            .colors(["#6ab975"])
            .height(180)
            .type('area')
            .prepare();

        // Run a query
        client
            .query('count', {
                event_collection: 'pageviews',
                interval: 'daily',
                timeframe: 'this_14_days'
            })
            .then(function (res) {
                // Handle the result
                chart
                    .data(res)
                    .render();
            })
            .catch(function (err) {
                // Handle errors
                chart.message(err.message);
            });
    }

}