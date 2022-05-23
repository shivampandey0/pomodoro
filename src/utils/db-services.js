import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase-config';

// Firestore methods
export const addTaskToFirestore = async (uid, data) => {
  try {
    const docRef = collection(db, 'pomodoro', uid, 'tasks');
    await addDoc(docRef, data);
  } catch (e) {
    throw new Error(e);
  }
};

export const updateTaskToFirestore = async (uid, docId, data) => {
  try {
    const docRef = doc(db, 'pomodoro', uid, 'tasks', docId);
    await updateDoc(docRef, data);
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteTask = async (uid, docId) => {
  try {
    const docRef = doc(db, 'pomodoro', uid, 'tasks', docId);
    await deleteDoc(docRef);
  } catch (e) {
    throw new Error(e);
  }
};
