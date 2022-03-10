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
    color='warning';
    getDistance(rssi: number): void {
        if (rssi >= -60 && rssi <= 0) {
            this.N = 4
        } else if (rssi < -60 && rssi >= -70) {
            this.N = 3
        } else if (rssi < -70) {
            this.N = 2
        }
        this.Distance = Math.pow(10, (Measured_Power - (rssi)) / (10 * this.N))
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
    color:string;
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
        'rssi': -19,
        'strengthColor': '#00ff00',
        'active': 'In-Active',
        'Distance': 0.75678843,
        'isBLEMatched': false,
        'loc': 'IoT - Team'
    },
    {
        'name': 'HC-08',
        'id': '34:14:B5:50:12:2A',
        'top': 180, 'left': 225,
        'SNo': 122,
        'rssi': -70,
        'strengthColor': '#ff0000',
        'active': 'In-Active',
        'Distance': 3.75678843,
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


    dummyList: any = [{
        'name': 'HC-08',
        'id': '10:08:2C:21:FE:EA',
        'advertising': [2, 1, 6, 3, 3, 15, 24, 8, 9, 66, 97, 116, 116, 101, 114, 121],
        'rssi': -33
    },
    {
        'name': ' Demo2',
        'id': '23:FF:D0:FF:D1:C0',
        'advertising': [2, 1, 6, 3, 3, 15, 24, 8, 9, 66, 97, 116, 116, 101, 114, 121],
        'rssi': -55
    },
    {
        'name': 'Demo',
        'id': '20:FF:D0:FF:D1:C0',
        'advertising': [2, 1, 6, 3, 3, 15, 24, 8, 9, 66, 97, 116, 116, 101, 114, 121],
        'rssi': -55
    },
    {
        'name': 'Battery Demo',
        'id': '20:FF:D0:FF:D1:C0',
        'advertising': [2, 1, 6, 3, 3, 15, 24, 8, 9, 66, 97, 116, 116, 101, 114, 121],
        'rssi': -55
    }
        ,
    {
        'name': 'Battery Demo',
        'id': '20:FF:D0:FF:D1:C0',
        'advertising': [2, 1, 6, 3, 3, 15, 24, 8, 9, 66, 97, 116, 116, 101, 114, 121],
        'rssi': -55
    }]
}

export class dataparams {
    loading: boolean = false;
    data: any = []
    overlay: boolean = false;
}