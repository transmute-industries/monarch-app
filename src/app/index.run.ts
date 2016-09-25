
import {EthereumService} from './com/ethereum.service'
import {IpfsService} from './com/ipfs.service'
import {MonarchService} from './com/monarch.service'

import {UserService} from './user/user.service'


export interface IMonarchConfig {
    Version: string;
    EthereumService: EthereumService;
    IpfsService: IpfsService;
    MonarchService: MonarchService;
    firebaseConfig: any;
    firebase: any;
    UserService: any;
}

export interface IRootScopeService extends angular.IRootScopeService {
    App: IMonarchConfig

}

/** @ngInject */
export function runBlock(
    $location: any,
    $timeout: angular.ITimeoutService,
    $log: angular.ILogService,
    $rootScope: IRootScopeService,
    $state: any,
    EthereumService: EthereumService,
    IpfsService: IpfsService,
    MonarchService: MonarchService,
    UserService: UserService
) {

    var w = <any>window;

    $rootScope.App = <IMonarchConfig>{};

    $rootScope.App.Version = '0.0.0';

    $rootScope.App.EthereumService = EthereumService;
    $rootScope.App.IpfsService = IpfsService;
    $rootScope.App.MonarchService = MonarchService;

    $rootScope.App.firebaseConfig = {
        apiKey: "AIzaSyDIXrTv0TD9zdaCy5n_QXm6_VMaS-1B3sQ",
        authDomain: "transmute-industries.firebaseapp.com",
        databaseURL: "https://transmute-industries.firebaseio.com",
        storageBucket: "transmute-industries.appspot.com",
        messagingSenderId: "1068223304219"
    };
    $rootScope.App.firebase = w.firebase.initializeApp($rootScope.App.firebaseConfig);
    $rootScope.App.Version = '0.0.0';
    $rootScope.App.UserService = UserService;


    $rootScope.$on('$stateChangeStart', function (evt, to, params) {
        if (to.redirectTo) {
            evt.preventDefault();
            $state.go(to.redirectTo, params, { location: 'replace' })
        }
    });

    // $log.debug('MonarchService.CarePlan', $rootScope.App.MonarchService.CarePlan);

}
