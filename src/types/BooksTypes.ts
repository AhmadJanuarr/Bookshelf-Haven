export interface BooksTypes {
    work_id: string;
    title: string;
    summary?: string;
    authors?: string[] | undefined;
    categories: string[];
    language?: string;
    copyright: number;
    published_works: Published_works[];
}

interface Published_works {
    published_work_id: number;
    cover_art_url: string;
    binding: string;
    page_count: number;
}
