type Alive = {
    value: "Alive"
}
type Dead = {
    value: "Dead"
}

type Unkown = {
    value: "Unknown"
}
type Status = Alive | Dead | Unkown

class Character {

    status: Status;

    constructor(status: Status) {
        this.status = status
    }

}