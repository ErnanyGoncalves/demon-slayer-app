export interface DangerCardProps {
    title: string;
    text: string;
    fields: string[];
    setOpen: (isOpen:boolean)=>{};
}