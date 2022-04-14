export interface WarningCardProps {
    title: string;
    text: string;
    setOpen: (isOpen:boolean)=>{};
    actionFunction: ()=>{};
}