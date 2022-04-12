const Measured_Power = -69;
export class bleDOMClass {
    SNo;
    name: string = '';
    id: string = '';
    rssi: number;
    isBLEMatched: boolean;
    Distance: number;
    top: any;
    left: any;
    N: number;//strength
    active: string = 'In-Active';
    strengthColor: string = '';
    deviceColor: '#3880ff';
    loc: string;
    color = 'warning';
    circleColor: string;
    getDistance(rssi: number): void {
        if (rssi >= -60 && rssi <= 0) {
            // this.N = 4;//not working properly, so setting by default 2
            this.N = 2;
            this.strengthColor = 'teritary';
            this.circleColor = '#3880ff';
        } else if (rssi < -60 && rssi >= -70) {
            // this.N = 3;
            this.N = 2;
            this.strengthColor = 'success';
            this.circleColor = '#00CC33';

        } else if (rssi < -70) {
            this.N = 2;
            this.strengthColor = 'warning';
            this.circleColor = '#e40000';

        }
        const distance = Math.pow(10, (Measured_Power - (rssi)) / (10 * this.N))
        this.Distance = parseFloat(distance.toFixed(2));

    }

    getNearByLocated(meter: number) {
        console.log(meter)
        if (meter <= .8) {
            return true
        } else {
            return false
        }
    }
}

export interface bleList {
    SNo: number;
    name: string;
    id: string;
    rssi: number;
    isBLEMatched: boolean;
    Distance: number;
    top: any;
    left: any;
    N: number;//strength
    active: string;
    strengthColor: string;
    deviceColor: string;
    loc: string;
    color: string; circleColor: string;

}
export interface bleStatic {
    name: string,
    id: string,
    advertising: [],
    rssi: number
}
export class Main {
    staticList: any = [{
        'name': 'HC-08',
        'id': '10:08:2C:21:FE:EA', 'top': 80, 'left': 125,
        'SNo': 1,
        'rssi': null,
        'strengthColor': 'medium',
        'active': 'In-Active',
        'Distance': null,
        'isBLEMatched': false,
        'loc': 'IoT-Team',
        'deviceColor': '#3880ff',
        'circleColor': ''

    },
    {
        'name': 'HC-08',
        'id': '34:14:B5:50:12:2A',
        'top': 180, 'left': 225,
        'SNo': 2,
        'rssi': null,
        'strengthColor': 'medium',
        'active': 'In-Active',
        'Distance': null,
        'isBLEMatched': false,
        'loc': 'IoT-Lab',
        'deviceColor': '#3880ff',
        'circleColor': ''

    },
    {
        'name': 'HC-08',
        'id': '34:14:B5:C5:70:E3',
        'top': 180, 'left': 50,
        'SNo': 3,
        'rssi': null,
        'active': 'in-Active',
        'strengthColor': 'medium',
        'Distance': null,
        'isBLEMatched': false,
        'loc': 'Network-Team',
        'deviceColor': '#3880ff',
        'circleColor': ''

    },
    {
        'name': 'HC-08',
        'id': 'F8:33:31:A9:E3:26',
        'top': 180, 'left': 50,
        'SNo': 4,
        'rssi': null,
        'active': 'In-Active',
        'strengthColor': 'medium',
        'Distance': null,
        'isBLEMatched': false,
        'loc': 'ISL-Entrance',
        'deviceColor': '#3880ff',
        'circleColor': ''

    }
    ];


    locationList: any = [{
        'name': 'IoT-Lab',
        'id': '',
        'x': 0.58, 'y': 0.57, z: -0.46
    },
    {
        'name': 'IoT-Team',
        'id': '',
        'x': -0.73, 'y': -0.76, z: 0.53
    },
    {
        'name': 'ISL-Pantry',
        'id': '',
        'x': 0, 'y': 0, z: 0
    },
    {
        'name': 'ISL-Hall',
        'id': '',
        'x': 0, 'y': 0, z: 0
    }
    ]
}

export class dataparams {
    loading: boolean = false;
    data: any = []
    overlay: boolean = false;
}