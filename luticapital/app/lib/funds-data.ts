export interface CaseItem {
    name: string;
    year: string;
    size: string;
    image: string;
    buffLink: string;
}

export interface CollectionSkin {
    name: string;
    rarity: string;
    image: string;
    buffLink?: string;
}

export interface Collection {
    id: string;
    name: string;
    size: string;
    image: string;
    skins: CollectionSkin[];
    description?: string;
}

export const CASE_FUND_DATA: CaseItem[] = [
    {
        name: "Dangerzone",
        year: "2018",
        size: "32%",
        image: "/images/Cases/dangerzone.png",
        buffLink: "https://buff.163.com/goods/763236?from=market#tab=selling"
    },
    {
        name: "Horizon",
        year: "2018",
        size: "20%",
        image: "/images/Cases/horizon.png",
        buffLink: "https://buff.163.com/goods/759175?from=market#tab=selling"
    },
    {
        name: "Spectrum 2",
        year: "2018",
        size: "12%",
        image: "/images/Cases/spectrum2.png",
        buffLink: "https://buff.163.com/goods/38148?from=market#tab=selling"
    },
    {
        name: "Gamma 2",
        year: "2018",
        size: "10.5%",
        image: "/images/Cases/gamma2.png",
        buffLink: "https://buff.163.com/goods/34987?from=market#tab=selling"
    }
];

export const RIPTIDE_FUND_DATA: Collection[] = [
    {
        id: "dust2",
        name: "Dust 2 Collection",
        size: "49%",
        image: "/images/dust2.webp",
        description: "These are the skins of the Dust 2 Collection which were hand picked for the 2021 Collections fund. They range from Classified grade down to Consumer grade.",
        skins: [
            {
                name: "SSG 08 Death Strike",
                rarity: "Classified",
                image: "/images/Skins/dust2/ssgdeath.png",
                buffLink: "https://buff.163.com/goods/871480?from=market#tab=selling"
            },
            {
                name: "Galil Amber Fade",
                rarity: "Mil-Spec",
                image: "/images/Skins/dust2/galamber.png",
                buffLink: "https://buff.163.com/goods/871408#tab=selling&page_num=1"
            },
            {
                name: "P250 Black-Tan",
                rarity: "Mil-Spec",
                image: "/images/Skins/dust2/balcktan.png",
                buffLink: "https://buff.163.com/goods/871522#tab=selling&page_num=1"
            },
            {
                name: "Nova Quick Sand",
                rarity: "Mil-Spec",
                image: "/images/Skins/dust2/quicksand.png",
                buffLink: "https://buff.163.com/goods/871217#tab=selling&page_num=1"
            },
            {
                name: "AUG Spalted Woods",
                rarity: "Industrial Grade",
                image: "/images/Skins/dust2/spatwood.png",
                buffLink: "https://buff.163.com/goods/871335?from=market#tab=selling"
            },
            {
                name: "MP9 Old Roots",
                rarity: "Industrial Grade",
                image: "/images/Skins/dust2/oldroots.png",
                buffLink: "https://buff.163.com/goods/871272?from=market#tab=selling"
            }
        ]
    },
    {
        id: "mirage",
        name: "Mirage 2021 Collection",
        size: "30%",
        image: "/images/mirage2021.webp",
        description: "These are the skins of the Mirage 2021 Collection which were hand picked for the 2021 Collections fund. They range from Classified grade down to Consumer grade.",
        skins: [
            {
                name: "Desert Eagle Fennec Fox",
                rarity: "Classified",
                image: "/images/Skins/mirage/fennfox.png",
                buffLink: "https://buff.163.com/goods/871700?from=market#tab=selling"
            },
            {
                name: "USP Purple DDPAT",
                rarity: "Mil-Spec",
                image: "/images/Skins/mirage/purpddp.png",
                buffLink: "https://buff.163.com/goods/871592?from=market#tab=selling"
            },
            {
                name: "SG 553 Desert Blossom",
                rarity: "Mil-Spec",
                image: "/images/Skins/mirage/desbloss.png",
                buffLink: "https://buff.163.com/goods/871156?from=market#tab=selling"
            },
            {
                name: "MP9 Music Box",
                rarity: "Mil-Spec",
                image: "/images/Skins/mirage/musicbox.png",
                buffLink: "https://buff.163.com/goods/871218?from=market#tab=selling"
            },
            {
                name: "Famas CaliCamo",
                rarity: "Industrial Grade",
                image: "/images/Skins/mirage/famcali.png",
                buffLink: "https://buff.163.com/goods/871207?from=market#tab=selling"
            },
            {
                name: "P250 Drought",
                rarity: "Consumer Grade",
                image: "/images/Skins/mirage/drought.png",
                buffLink: "https://buff.163.com/goods/871138?from=market#tab=selling"
            },
            {
                name: "MAG-7 Navy Sheen",
                rarity: "Consumer Grade",
                image: "/images/Skins/mirage/magnavy.png",
                buffLink: "https://buff.163.com/goods/871135?from=market#tab=selling"
            }
        ]
    },
    {
        id: "control",
        name: "Control Collection",
        size: "17.5%",
        image: "/images/control.webp",
        description: "These are the skins in the Control Collection which were hand picked for the 2021 Collections fund. They are Mil-Spec and Industrial Grade rarity.",
        skins: [
            {
                name: "USP Purple DDPAT",
                rarity: "Mil-Spec",
                image: "/images/Cases/dangerzone.png", // Legacy data had this image
                buffLink: "#"
            }
        ]
    },
    {
        id: "havoc",
        name: "Havoc Collection",
        size: "3.5%",
        image: "/images/havoc.webp",
        description: "These is the skin of the Havoc Collection which was hand picked for the 2021 Collections fund. From this Collection only one skin of Mil-Spec rarity has been picked",
        skins: [
            {
                name: "Desert Eagle Night Heist",
                rarity: "Mil-Spec",
                image: "/images/Cases/dangerzone.png", // Legacy data had this image
                buffLink: "#"
            }
        ]
    }
];
