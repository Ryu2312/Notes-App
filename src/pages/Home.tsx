import { useEffect, useState } from "react";
import FilterForm from "../components/FilterForm";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { fetchNotes} from "../Store/notesSlice";
import { filtersNotes } from "../utils/filterUtils";

function Home() {
  const dispatch = useAppDispatch();
  const { notes, status, error } = useAppSelector((state) => state.notes);
  const [ filters, setFilters ] = useState<{ [k: string]: FormDataEntryValue; }>({});
  const notesFilters = filtersNotes({field:filters,listNote:notes});
  console.log(notes)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNotes());
    }
  }, [dispatch, status]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4 col-xl-8 position-relative">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-5 col-md-8 col-10 ">
          <h1 className="mb-3 text-center">Notas App</h1>
          <NoteForm />
        </div>
      </div>
      <div className="d-flex gap-4 flex-column flex-md-row">
        <FilterForm filters={setFilters}/>
        <div className="col-md-9 mt-4">
          <h2 className="mb-3 sticky-top top-10 bg-white py-2">Notas</h2>
          { status === 'loading' ? <div>Loading...</div> :(!notes.length ? (
            <p>No hay notas disponibles</p>
          ) : (
            notesFilters.map((note) => <NoteCard key={note.id} {...note} />)
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
