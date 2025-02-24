import { deleteNote, Note } from "../Store/notesSlice";
import { getTimeDifference } from "../utils/dateUtils";
import Badge from "./Badge";
import { useAppDispatch } from "../Store/hooks";

function NoteCard(note:Note) {
 const differenceTime = getTimeDifference(note.updateDate);
 const dispatch = useAppDispatch();

 const handleClick = () => {
    dispatch(deleteNote(note.id))
 }

  return (
    <div className="card mb-3" key={note.id}>
      <div className="card-body">
        <div className="d-flex gap-2 mb-1">
          <h5 className="card-title">{note.title}</h5>
          <Badge {...note} />
        </div>
        <p className="card-text">{note.body}</p>
        <small className="text-body-secondary">Last updated {differenceTime}</small>
        <button className="btn btn-sm btn-danger mx-3 position-absolute botton-0 end-0" onClick={handleClick}>
          Eliminar
        </button>
      </div>
      <s></s>
    </div>
  );
}

export default NoteCard;
