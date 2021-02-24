// Generated by psc version 0.9.3
"use strict";
var Data_Array = require("../Data.Array");
var Data_BigInt = require("../Data.BigInt");
var Data_Maybe = require("../Data.Maybe");
var Data_Modular = require("../Data.Modular");
var Data_Set = require("../Data.Set");
var Prelude = require("../Prelude");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Data_Eq = require("../Data.Eq");
var Data_Unfoldable = require("../Data.Unfoldable");
var Data_Foldable = require("../Data.Foldable");
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Functor = require("../Data.Functor");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var LGroup = (function () {
    function LGroup(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    LGroup.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new LGroup(value0, value1, value2);
            };
        };
    };
    return LGroup;
})();
var validLGroup = function (v) {
    return Data_Ord.greaterThanOrEq(Data_BigInt.ordBigInt)(v.value0)(Data_BigInt.fromInt(2)) && (Data_Ord.lessThanOrEq(Data_BigInt.ordBigInt)(v.value0)(Data_Ring.sub(Data_BigInt.ringBigInt)(v.value2)(Data_BigInt.fromInt(1))) && Data_Eq.eq(Data_BigInt.eqBigInt)(Data_BigInt.modPow(v.value0)(v.value1)(v.value2))(Data_BigInt.fromInt(1)));
};
var remDups = function (a) {
    return Data_Set.toUnfoldable(Data_Unfoldable.unfoldableArray)(Data_Set.fromFoldable(Data_Foldable.foldableArray)(Data_BigInt.ordBigInt)(a));
};
var order = function (p) {
    return Data_EuclideanRing.div(Data_BigInt.euclideanRingBigInt)(Data_Ring.sub(Data_BigInt.ringBigInt)(p)(Data_BigInt.fromInt(1)))(Data_BigInt.fromInt(2));
};
var members = function (v) {
    return remDups(Data_Functor.map(Data_Functor.functorArray)(function ($16) {
        return Data_Modular.mPow(v.value2)(v.value0)(Data_BigInt.fromInt($16));
    })(Data_Array.range(0)(10000)));
};
var member = function (v) {
    return function (n) {
        return Data_Ord.lessThanOrEq(Data_BigInt.ordBigInt)(Data_BigInt.fromInt(1))(n) && (Data_Ord.lessThanOrEq(Data_BigInt.ordBigInt)(n)(v.value2) && Data_Eq.eq(Data_BigInt.eqBigInt)(Data_Modular.mPow(v.value2)(n)(v.value1))(Data_BigInt.fromInt(1)));
    };
};
var lgEasy = new LGroup(Data_BigInt.fromInt(2), Data_BigInt.fromInt(1559), Data_BigInt.fromInt(3119));
var big = function (hex) {
    return Data_Maybe.fromMaybe(Data_BigInt.fromInt(0))(Data_BigInt.fromBase(16)(hex));
};
var lGroupFromHex = function (g) {
    return function (q) {
        return function (p) {
            return new LGroup(big(g), big(q), big(p));
        };
    };
};
var lgHard = (function () {
    var prime = big("FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AACAA68FFFFFFFFFFFFFFFF");
    return new LGroup(Data_BigInt.fromInt(2), order(prime), prime);
})();
var lgMedium = (function () {
    var prime = big("FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A63A3620FFFFFFFFFFFFFFFF");
    return new LGroup(Data_BigInt.fromInt(2), order(prime), prime);
})();
module.exports = {
    LGroup: LGroup, 
    big: big, 
    lGroupFromHex: lGroupFromHex, 
    lgEasy: lgEasy, 
    lgHard: lgHard, 
    lgMedium: lgMedium, 
    member: member, 
    members: members, 
    order: order, 
    remDups: remDups, 
    validLGroup: validLGroup
};
