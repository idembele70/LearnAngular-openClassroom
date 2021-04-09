export class AppareilService {
    appareils = [
        {
            id: 1,
            name: "Machine à laver",
            status: "éteint",
        },
        {
            id: 2,
            name: "Télévsion",
            status: "allumer",
        },
        {
            id: 3,
            name: "Ordinateur",
            status: "éteint",
        },
    ];

    getAppareilById(id = Number()) {
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.id === id;
            }
        );
        return appareil;
    }

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