var last_bet = {};

var money_bet_rep = "primera"; //primera o segunda
var money_bet_type = "simple"; //simple o x2
var money_bet_quantity = 0.1; //cantitad a apostar

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
function update_money(spin_id, spin) {
    



}










exports.store_last_bet=store_last_bet,
exports.update_money=update_money,
exports.get_bet_rep=get_bet_rep,
exports.get_bet_type=get_bet_type;
exports.get_bet_quantity=get_bet_quantity;