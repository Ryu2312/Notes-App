import { Note } from "../Store/notesSlice";

export function filtersNotes({
  field,
  listNote,
}: {
  field: { [k: string]: FormDataEntryValue };
  listNote: Note[];
}) {

    return listNote.filter((note) => {
        if (typeof field.pending === "string" && !note.pending) {
        return false;
        }

        if (typeof field.important === "string" && !note.important) {
        return false;
        }

        return true;

    }).sort((a:Note,b: Note) => {
        let valueA;
        let valueB;
        let comparison = 0;
        console.log(a)

       if (field.order === "creacion") {
            valueA = new Date(a.creationDate).getTime();
            valueB = new Date(b.creationDate).getTime();
            return valueB - valueA;
       }

       if(field.order === "modificacion") {
            valueA = new Date(a.updateDate).getTime();
            valueB = new Date(b.updateDate).getTime();
            return valueB - valueA;
       }

       if(field.order === "asc" || field.order === "desc") {
            valueA = a.title.toLowerCase();
            valueB = b.title.toLowerCase();

            if (valueA > valueB) comparison = 1;
            if (valueA < valueB) comparison = -1;
        }
        
        return field.order === 'asc' ? comparison : -comparison;

    });
}