import { useAppDispatch } from "../Store/hooks";
import { addNewNote } from "../Store/notesSlice";

function NoteForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const newNote = {
      title: data.title as string,
      body: data.body as string,
    };

    dispatch(addNewNote(newNote));
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          maxLength={30}
          placeholder="Ingresa el título"
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="body"
          name="body"
          rows={3}
          maxLength={150}
          placeholder="Escribe tu nota"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary col-12  p-2">
        Agregar Nota
      </button>
    </form>
  );
}

export default NoteForm;
