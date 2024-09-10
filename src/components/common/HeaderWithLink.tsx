import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

export function HeaderWithLink({ title, subTitle }: { title: string, subTitle: string }) {
    return (
        <div className="flex justify-between w-full py-5">
            <h1 className="text-3xl font-bold">{title}</h1>
            <button className="text-sm text-gray-500 cursor-pointer">{subTitle}<EastOutlinedIcon /></button>
        </div>
    )

}