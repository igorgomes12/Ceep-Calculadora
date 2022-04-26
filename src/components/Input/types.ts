export interface Props {
    placeholder:string;
    type:string;
    onChange:React.ChangeEventHandler<HTMLInputElement> | undefined;
    width?:string;
    heigth?:string;
}