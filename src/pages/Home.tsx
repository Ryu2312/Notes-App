import { useEffect } from "react";
import FilterForm from "../components/FilterForm";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { fetchNotes } from "../Store/notesSlice";

function Home() {
  const dispatch = useAppDispatch();
  const { notes, loading, error } = useAppSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4 col-xl-8 position-relative">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-5 col-md-8 col-10 ">
          <h1 className="mb-3 text-center">Notas App</h1>
          <NoteForm />
        </div>
      </div>
      <div className="d-flex gap-4 flex-column flex-md-row">
        <FilterForm />
        <div className="col-md-9 mt-4">
          <h2 className="mb-3">Notas</h2>
          {loading ? <p className="text-center mt-5">Cargando notas...</p> :
          (!notes.length ? (
            <p>No hay notas disponibles</p>
          ) : (
            notes.map((note) => <NoteCard key={note.id} {...note} />)
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
