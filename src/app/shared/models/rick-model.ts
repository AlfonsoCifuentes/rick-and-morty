
export interface IRickModel {
    nav: INav;
    layout: ILayout;
    footer: IFooter;
}

export interface INav {
    logo: Iimg;
}

export interface Iimg {
    src: string;
    alt: string;
}

export interface ILayout {
    title: string;
    container: string;
}

export interface IFooter {
    copyright: string;
}