export const ECategoryFilterCodes = {
    All: 'all',
    Cryptocurrencies: 'cryptocurrencies',
    Banks: 'banks',
    Cash: 'cash'
};

export const EDirectionCodes = {
    BTC: 'BTC',
    ETH: 'ETH',
    USDTTRC: 'USDTTRC',
    ACRUB: 'ACRUB',
    SBERRUB: 'SBERRUB',
    TCSBRUB: 'TCSBRUB',
    CASHUSD: 'CASHUSD',
    CASHRUB: 'CASHRUB'
};

export const categoryFilterCodesValues = {
    [ECategoryFilterCodes.Cryptocurrencies]: [
        EDirectionCodes.BTC,
        EDirectionCodes.ETH,
        EDirectionCodes.USDTTRC
    ],
    [ECategoryFilterCodes.Banks]: [
        EDirectionCodes.ACRUB,
        EDirectionCodes.SBERRUB,
        EDirectionCodes.TCSBRUB
    ],
    [ECategoryFilterCodes.Cash]: [
        EDirectionCodes.CASHUSD,
        EDirectionCodes.CASHRUB
    ]
};
