export class AppareilService {
    appareils = [
        {
            name: "Machine à laver",
            status: "éteint",
        },
        {
            name: "Télévsion",
            status: "allumer",
        },
        {
            name: "Ordinateur",
            status: "éteint",
        },
    ];

    switchOnAll() {
        this.appareils.forEach(el => el.status = "allumer");
    }
    switchOfAll() {
        this.appareils.forEach(el => el.status = 'éteint');
    }

    switchOnOne(index = Number()) {
        return this.appareils[index].status = 'allumer';
    }
    switchOffOne(index = Number()) {
        return this.appareils[index].status = 'éteint';
    }
}