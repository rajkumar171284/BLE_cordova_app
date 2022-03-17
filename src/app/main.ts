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
    loc: string;
    color = 'warning';
    getDistance(rssi: number): void {
        if (rssi >= -60 && rssi <= 0) {
            this.N = 4
        } else if (rssi < -60 && rssi >= -70) {
            this.N = 3
        } else if (rssi < -70) {
            this.N = 2
        }
        const distance = Math.pow(10, (Measured_Power - (rssi)) / (10 * this.N))
        this.Distance = parseFloat(distance.toFixed(2));

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
    loc: string;
    color: string;
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
        'SNo': 111,
        'rssi': null,
        'strengthColor': '#00ff00',
        'active': 'In-Active',
        'Distance': null,
        'isBLEMatched': false,
        'loc': 'IoT - Team'
    },
    {
        'name': 'HC-08',
        'id': '34:14:B5:50:12:2A',
        'top': 180, 'left': 225,
        'SNo': 122,
        'rssi': null,
        'strengthColor': '#ff0000',
        'active': 'In-Active',
        'Distance': null,
        'isBLEMatched': false,
        'loc': 'IoT - Lab'
    },
    {
        'name': 'Boult',
        'id': 'C8:9B:D7:64:9B:14',
        'top': 180, 'left': 50,
        'SNo': 223,
        'rssi': -80,
        'active': 'In-Active',
        'strengthColor': '#ff0000',
        'Distance': 1.75678843,
        'isBLEMatched': false,
        'loc': 'ISL - Team'
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