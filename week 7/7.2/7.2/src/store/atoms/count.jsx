import { atom, selector } from "recoil";
 
export const countAtom = atom({
    key:"countAtom",
    default: 0
});



export const evenSelectror = selector({
    key : "evenSelectror",
    get : ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
});