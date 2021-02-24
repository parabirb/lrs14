// Generated by psc version 0.9.3
"use strict";
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Crypto_LRS_SimpleAPI = require("../Crypto.LRS.SimpleAPI");
var Prelude = require("../Prelude");
var Test_Assert = require("../Test.Assert");
var Control_Bind = require("../Control.Bind");
var Data_Functor = require("../Data.Functor");
var Crypto_LRS = require("../Crypto.LRS");
var Data_Function = require("../Data.Function");
var main = function __do() {
    var v = Crypto_LRS_SimpleAPI.gen();
    var v1 = Crypto_LRS_SimpleAPI.gen();
    var v2 = Crypto_LRS_SimpleAPI.gen();
    var group = Data_Functor.map(Data_Functor.functorArray)(Crypto_LRS.publicKey)([ v, v1, v2 ]);
    var v3 = Crypto_LRS_SimpleAPI.sign(group)(v)("The body is buried on the backyard")();
    Data_Function.apply(Test_Assert.assert)(Crypto_LRS_SimpleAPI.verify(group)(v3)("The body is buried on the backyard"))();
    var v4 = Crypto_LRS_SimpleAPI.sign(group)(v)("Just kidding, he is alive.")();
    return Data_Function.apply(Test_Assert.assert)(Crypto_LRS_SimpleAPI.link(v3)(v4))();
};
module.exports = {
    main: main
};
