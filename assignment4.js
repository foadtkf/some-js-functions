//Qstn-1
function anaToVori(ana) {
    if (typeof ana != "number" || ana < 0) {
        return "wrong input enter Numbers only";
    }
    return ana / 16;
}
// console.log(anaToVori('1'));
// console.log(anaToVori(1));

//Qstn-2
function pandaCost(singara, samusa, jilapi) {
    if (typeof singara != "number" || typeof samusa != "number" || typeof jilapi != "number" || samusa < 0 || singara < 0 || jilapi < 0) {
        return "wrong input enter Numbers only";
    }
    const singara_price = 7,
        samusa_price = 10,
        jilapi_price = 15;
    return ((singara * singara_price) + (samusa * samusa_price) + (jilapi * jilapi_price));
}
// console.log(pandaCost('4', '3', 1));
// console.log(pandaCost(4, 3, 1));

//Qstn-3
function picnicBudget(persons) {
    if (typeof persons != "number" || persons < 0) {
        return "wrong input enter Numbers only";
    }
    var budget = 0;
    if (persons <= 100) {
        budget = persons * 5000;
    } else if (persons <= 200) {
        let p1 = 100,
            p2 = persons - 100;
        budget = (p1 * 5000) + (p2 * 4000);
    } else {
        let p1 = 100,
            p2 = 100,
            p3 = persons - 200;
        budget = (p1 * 5000) + (p2 * 4000) + (p3 * 3000);
    }
    return budget;
}
// console.log(picnicBudget("103"));
// console.log(picnicBudget(103));

//Qstn 4
function oddFriend(friend_list) {
    if (typeof friend_list != "object") {
        return "wrong input enter Array only";
    }
    for (let i = 0; i < friend_list.length; i++) {
        if (friend_list[i].length % 2 != 0)
            return friend_list[i];
        else
            continue;
    }
}
// console.log(oddFriend(3));
// console.log(oddFriend(['fuad', 'fata', 'auvee', 'apon', 'shoyeb']));