// src/store/notesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

 export interface Note {
  id: number;
  title: string;
  body: string;
  createDate: string;
  updateDate: string;
  important: boolean;
  pending: boolean;
}

interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  notes: [],
  loading: false,
  error: null,
};

// Llamado asíncrono al backend (reemplaza la URL con tu endpoint real)
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await fetch('http://localhost:8080/api/notes');
  if (!response.ok) {
    throw new Error('Error fetching notes');
  }
  const data: Note[] = await response.json();
  return data;
});

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.notes.push(action.payload);
    },
    // Otros reducers que necesites
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotes.fulfilled, (state, action: PayloadAction<Note[]>) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching notes';
      });
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
