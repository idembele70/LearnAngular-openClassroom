import { Subject } from "rxjs";

export class AppareilService {
    appareilSubject = new Subject<any[]>()
    private appareils = [
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
    emitAppareilSubject() {
        return this.appareilSubject.next(this.appareils.slice());
    }

    getAppareilById(id = Number()) {
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.id === id;
            }
        );
        this.emitAppareilSubject()
        return appareil;
    }

    switchOnAll() {
        this.appareils.forEach(el => el.status = "allumer");
        this.emitAppareilSubject()
    }
    switchOfAll() {
        this.appareils.forEach(el => el.status = 'éteint');
        this.emitAppareilSubject()
    }

    switchOnOne(index = Number()) {
        this.emitAppareilSubject()
        return this.appareils[index].status = 'allumer';
    }
    switchOffOne(index = Number()) {
        this.emitAppareilSubject()
        return this.appareils[index].status = 'éteint';
    }
}