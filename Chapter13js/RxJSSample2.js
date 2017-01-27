var Rx = require('rx');

var calculateChange = function (denominations, amount) {
    'use strict';
    var changeSets = 0;
    var subject = new Rx.Subject();
    var changeSetClient = subject
        .do
        (
            function (denominationSet) {
                console.log('changeSetClient Processing Denominations: ', denominationSet);
            }
        )
        .observeOn(Rx.Scheduler.default)
        .subscribe
        (
            function (denominationSet) {
                printChangeSet(denominationSet);
            },
            function (err) {
                console.log('changeSetClient Processing Error: ', err);
            },
            function () {
                console.log('changeSetClient Processing Completed!');
                changeSetClient.dispose();
                subject.dispose();
            }
        );

    // This function prints the applicable change sets

    var printChangeSet = function (denominationSet) {
        var matchFactors = [],
            findCombinationSet = function (denominationIndex, cumilativeSum) {
                var transientSum = 0,
                    i = 1,
                    denomination = denominationSet[denominationIndex],
                    factorCount = denominationSet.length;
                while (transientSum <= amount) {
                    //-----------------------Pretty Printing START
                    matchFactors[denominationIndex] = i.toString() + 
                                                        " x " + 
                                                        denomination.toString() + 
                                                        "c";
                    transientSum = cumilativeSum + (denomination * i);
                    if ((denominationIndex + 1) === factorCount) {
                        if (transientSum === amount) {
                            changeSets += 1;
                            console.log(changeSets + ". " + matchFactors);
                        }
                    } else {
                        findCombinationSet(denominationIndex + 1, transientSum);
                    }
                    i += 1;
                    //------------------------Pretty Printing END
                }
            };
        findCombinationSet(0, 0);
    };
    
    // This function computes the possible denomination sets

    var generateChangeSets = function () {
        var bitcount = denominations.length,
            mask = Math.pow(2, bitcount),
            i = 1,
            j = 0,
            k = 1,
            denominationSet = null,
            denominationSum = 0;
        while (i < mask) {
            j = 0;
            denominationSet = [];
            denominationSum = 0;
            while (j < bitcount) {
                if ((i & (k << j)) > 0) {
                    denominationSet.push(denominations[j]);
                    denominationSum += denominations[j];
                }
                j += 1;
            }
            if (denominationSum <= amount) {
                subject.onNext(denominationSet);
            }
            i += 1;
        }
        subject.onCompleted();
    };

    generateChangeSets();       //Start execution here
};

calculateChange([1, 5, 10, 25], 25);