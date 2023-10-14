import { Icons } from "@/models/icon.model";
import { sidebarIcons } from "./sidebar-icons";
import { utilIcons } from "./icons";

const icons = {
    ...sidebarIcons,
    ...utilIcons
}

const getListOfKeys = (Obj: Icons) => {
    if (!Obj) return [];
    return Object.keys(Obj);
}

const listOfKeys = getListOfKeys(icons);

export {  
    icons,
    listOfKeys
}
