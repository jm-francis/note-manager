'use server';

import { State } from "@popperjs/core";
import { MongoClient } from "mongodb";
import {redirect} from "next/navigation";
import Snackbar from '@mui/material/Snackbar';
import {Note} from "@/app/lib/types";

const uri = "mongodb://localhost:27017/";

const dbClient = new MongoClient(uri);
const db = dbClient.db('note-manager');
const users = db.collection('users');
const notes = db.collection('notes');

export async function addNote(formData: FormData) {

   await notes.insertOne({
       title: formData.get("title"),
       content: formData.get("content"),
       date: Date.now()
   });

   redirect('/home');

/*     return (
         <Snackbar
             open={open}
             autoHideDuration={6000}
             message="Note archived" />
     ).redirect('/home');*/
}

export async function getNotes() : Promise<Note[]> {
    let noteList = await notes.find({}).sort({date: "desc"}).toArray() as unknown as Note[];
    console.log(noteList.length)
    for (const note of noteList) {
        console.log(note)
    }
    // console.log(noteList.at(0))

    return  noteList;
}