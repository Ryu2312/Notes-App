import { useAppDispatch } from "../Store/hooks";
import { Note, UpdateNote, updateNote } from "../Store/notesSlice";

function Badge (note:Note) {
    const dispatch = useAppDispatch();

    const handleClick = (data:UpdateNote) => {
        dispatch(updateNote(data))
    }

    return (
        <div className="d-flex gap-2">
            <div className="form-check p-0">
                <button
                    type="button"
                    onClick={() => handleClick({...note,important:!note.important})}
                    className={`form-check-label badge rounded-pill ${note.important ? "text-bg-warning" : "text-bg-secondary"}`}>
                    Importante
                </button>
            </div>
            <div className="form-check p-0">
                <button 
                    type="button"
                    onClick={() => handleClick({...note,pending:!note.pending})}
                    className={`form-check-label badge rounded-pill ${note.pending ? "text-bg-primary" : "text-bg-secondary"}`}>
                    Pendiente
                </button>
            </div>
        </div>
    )
}

export default Badge;