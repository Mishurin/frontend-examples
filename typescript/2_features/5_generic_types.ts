function identity<T>(arg: T): T {
    return arg;
}

let some: number = identity(5);

let myIdentity: <T>(arg: T) => T = identity;
let myIdentityResult: number = myIdentity(5);

// With classes
interface Unit {
    doWork(): void;
}

class Firm<U extends Unit> {
    personel: U[];
    constructor(people: U[]) {
        this.personel = people;
    }
    doWork() {
        this.personel.forEach((worker: U) => {
            worker.doWork();
        });
    }
}

class FrontEndDev implements Unit {
    doWork() {
        console.log('making layout');
        this.communicationWithCustomer();
    }
    communicationWithCustomer() {
        console.log('having fun');
    }
}

class BackendDev implements Unit {
    doWork() {
        console.log('making a service');
        this.doCompilation();
    }
    doCompilation() {
        console.log('drinking coffee');
    }
}

let piotr = new BackendDev();
let fiodor = new BackendDev();

let backendTeam = new Firm<BackendDev>([piotr, fiodor]);
backendTeam.doWork();

let vasiliy = new FrontEndDev();
let alexandr = new FrontEndDev();

let frontendTeam = new Firm<FrontEndDev>([vasiliy, alexandr]);
frontendTeam.doWork();

