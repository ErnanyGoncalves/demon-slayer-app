export interface WarningCardProps {
    title: string;
    text: string;
    setIsOpen: (isOpen:boolean)=>{};
    actionFunction: ()=>{};
}