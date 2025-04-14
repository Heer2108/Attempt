export interface BlogType {
    id: number,
    slug: string,
    tag: string,
    category: string,
    img: string,
    title: string,
    author: string,
    avatar: string,
    date: string,
    desc: string,
    listImg: Array<string>,
    quote?: {
        text: string,
        author: string
    }
    ingress?: string,
    paragraphs: IParagraph[]
}

export interface IParagraph {
    title: string,
    content: string,
    listTitle: string,
    listContent: string[],
    break: boolean
}