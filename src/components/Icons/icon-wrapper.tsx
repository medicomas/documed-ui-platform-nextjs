import { icons, listOfKeys } from "@/components/Icons";

type Props = {
    id: string;
    color?: CSSStyleValue;
    width?: CSSStyleValue;
}
export const IconWrapper = ({ id, color, width }: Props) => {
    console.log(id, listOfKeys, listOfKeys.includes(id))
   if(!listOfKeys.includes(id)) return <></>;
   const Icon = icons[id]
   return <Icon sx={{ color, fontSize: width }} />;
}