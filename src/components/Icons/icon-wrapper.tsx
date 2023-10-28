import { icons, listOfKeys } from "@/components/Icons";

type Props = {
    id: string;
    color?: CSSStyleValue;
    width?: CSSStyleValue;
}
export const IconWrapper = ({ id, color, width }: Props) => {
   if(!listOfKeys.includes(id)) return <></>;

   const Icon = icons[id]

   console.log(id)
   if(id.startsWith("REMIX")) return <Icon color={color} size={width} />

   return <Icon sx={{ color, fontSize: width }} />;
}