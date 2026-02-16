import { createSlice } from "@reduxjs/toolkit";

const savedWeights = JSON.parse(localStorage.getItem("weights")) || [];

const weightSlice = createSlice({
  name: "weights",
  initialState: {
    list: savedWeights,
  },
  reducers: {
   addWeight: (state, action) => {
  const { userId, weight, date } = action.payload;
  const inputDateOnly = new Date(date).toISOString().split('T')[0]; 
  const alreadyExists = state.list.find(entry => {
    const entryDateOnly = new Date(entry.date).toISOString().split('T')[0];
    return entry.userId === userId && entryDateOnly === inputDateOnly;
  });

  if (alreadyExists) {
    alert("A weight entry already exists for this date!");
    return;
  }


  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const dateWithCurrentTime = new Date(date);
  dateWithCurrentTime.setHours(currentHours);
  dateWithCurrentTime.setMinutes(currentMinutes);
  dateWithCurrentTime.setSeconds(0);
  dateWithCurrentTime.setMilliseconds(0);

  
  const newEntry = {
    id: Date.now(),
    userId,
    weight: parseFloat(weight),
    date: dateWithCurrentTime.toISOString(), 
  };

  state.list.push(newEntry);
  localStorage.setItem("weights", JSON.stringify(state.list));
},


      editWeight: (state, action) => {
      const { id, weight } = action.payload;
      const index = state.list.findIndex((w) => w.id === id);
      if (index !== -1) {
        state.list[index].weight = parseFloat(weight);
        localStorage.setItem("weights", JSON.stringify(state.list));
      }
    },
    deleteWeight: (state, action) => {
      state.list = state.list.filter((w) => w.id !== action.payload);
      localStorage.setItem("weights", JSON.stringify(state.list));
    },
  },
});

export const { addWeight, editWeight, deleteWeight } = weightSlice.actions;
export default weightSlice.reducer;
