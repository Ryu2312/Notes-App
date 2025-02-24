import { Note } from "../Store/notesSlice";
import { getTimeDifference } from "../utils/dateUtils";
import Badge from "./Badge";

function NoteCard(note:Note) {
 const diferencia = getTimeDifference(note.updateDate);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex gap-2 mb-1">
          <h5 className="card-title">{note.title}</h5>
          <Badge important={note.important} pending={note.pending} />
        </div>
        <p className="card-text">{note.body}</p>
        <small className="text-body-secondary">Last updated {diferencia}</small>
        <button className="btn btn-sm btn-danger mx-3 position-absolute botton-0 end-0">
          Eliminar
        </button>
      </div>
      <s></s>
    </div>
  );
}

export default NoteCard;
