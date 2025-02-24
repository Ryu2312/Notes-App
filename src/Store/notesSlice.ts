import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotesState {
  notes: Note[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: NotesState = {
  notes: [],
  status: 'idle',
  error: null
};

// Async Thunks (Operaciones CRUD asincrónicas)
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await fetch('http://localhost:8080/api/notes');
  if (!response.ok) throw new Error('Error fetching notes');
  return await response.json() as Note[];
});

export const addNewNote = createAsyncThunk('notes/addNewNote', async (noteData: NewNote) => {
  const response = await fetch('http://localhost:8080/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(noteData)
  });
  if (!response.ok) throw new Error('Error creating note');
  return await response.json() as Note;
});

export const updateNote = createAsyncThunk('notes/updateNote', async (note: UpdateNote) => {
  const response = await fetch(`http://localhost:8080/api/notes/${note.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  });
  if (!response.ok) throw new Error('Error updating note');
  return await response.json() as Note;
});

export const deleteNote = createAsyncThunk('notes/deleteNote', async (noteId: number) => {
  const response = await fetch(`http://localhost:8080/api/notes/${noteId}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Error deleting note');
  return noteId;
});

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    // Reducers síncronos (opcionales)
    optimisticAddNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Notes
      .addCase(fetchNotes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      })

      // Add Note
      .addCase(addNewNote.fulfilled, (state, action) => {
        state.notes.push(action.payload);
      })

      // Update Note
      .addCase(updateNote.fulfilled, (state, action) => {
        const index = state.notes.findIndex((n:Note) => n.id === action.payload.id);
        if (index !== -1) state.notes[index] = action.payload;
      })

      // Delete Note
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.notes = state.notes.filter((n:Note) => n.id !== action.payload);
      });
  }
});

export const { optimisticAddNote } = notesSlice.actions;
export default notesSlice.reducer;

export interface Note {
  id: number;
  title: string;
  body: string;
  createDate: string;
  updateDate: string;
  important: boolean;
  pending: boolean;
}

export type UpdateNote = Partial<Note>;
type NewNote = Pick<UpdateNote, "title" | "body">;


     