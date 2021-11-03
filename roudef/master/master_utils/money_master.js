var last_bet = {};
var money_bet_rep = ""; //primera o segunda
var money_bet_type = ""; //simple o x2
var money_bet_quantity = 0; //cantitad a apostar
var money_bet_martingala = 0

function store_last_bet(param) {
    last_bet = param;
    console.log(JSON.stringify(last_bet));
}

function get_bet_rep() {
    return money_bet_rep;
}

function get_bet_type() {
    return money_bet_type;
}

function get_bet_quantity() {
    return money_bet_quantity;
}

//MAIN LOOP DONDE TENGO QUE HACERLO TODO!!!!!!!
function update_money(spin_id, spin, chk) {
    
    switch (money_bet_rep) {
        case "":
            money_bet_rep = "primera"
        break;

        case "primera":
            money_bet_rep = "segunda"
        break;

        case "segunda":
            money_bet_rep = ""
        break;
    
        default:
        break;
    }

    switch (money_bet_martingala) {
        case 0:
            money_bet_martingala=1
            money_bet_quantity= 0.1;

        break;

        case 1:
            money_bet_martingala=1
            money_bet_quantity=0.2;
        break;

        case 2:
            money_bet_martingala=1
            money_bet_quantity=0.4;
        break;
    




















        default:
            money_bet_martingala = 0;
        break;
    }


     



}

function get_bet_bet(spin_id, spin, bet_combi,chk) {
    
}








exports.store_last_bet=store_last_bet,
exports.update_money=update_money,
exports.get_bet_rep=get_bet_rep,
exports.get_bet_type=get_bet_type;
exports.get_bet_quantity=get_bet_quantity;
exports.get_bet_bet=get_bet_bet;