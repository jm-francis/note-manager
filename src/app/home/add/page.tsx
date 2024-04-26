'use client'

import {useFormState, useFormStatus} from "react-dom";
import {Button} from "@/app/ui/button";
import {PlusIcon} from "@heroicons/react/24/outline";
import {addNote} from "@/app/lib/db";

export default function Add() {
    // const [errorMessage, dispatch] = useFormState(addNote, undefined);

    return (
        <main className="flex min-h-screen flex-col p-6">
            <p className={"text-4xl"}>Add new note</p>

            <div className={"my-4"}>
                <form action={addNote}>
                    <div className={"my-8"}>
                        <label className="mb-3 mt-5 block text-xl font-medium text-gray-900" htmlFor="title">Title</label>
                            <input className={"block w-full rounded-md border border-gray-300 focus:border-blue-600 focus:border-2 focus:outline-none py-[9px] pl-10 placeholder:text-gray-300"}
                                   id={"title"}
                                   name={"title"}
                                   type={"text"}
                                   placeholder={"Enter title here"}
                                   required
                            />
                    </div>
                    <div className={"my-8"}>
                        <label className="mb-3 mt-5 block text-xl font-medium text-gray-900" htmlFor="title">Content</label>
                            <textarea className={"block w-full rounded-md border border-gray-300 focus:border-blue-600 focus:border-2 focus:outline-none py-4 px-8 h-72 text-sm"}
                                   id={"content"}
                                   name={"content"}
                                   maxLength={10000}
                                   required
                            />
                    </div>
                    <AddButton/>
                </form>
            </div>
        </main>
    );
}

function AddButton() {
    const { pending } = useFormStatus();

    return (
        <Button type={"submit"} className="mt-4 mb-4 w-32 h-12 flex float-right text-lg" aria-disabled={pending}>
            <PlusIcon className="mr-2 h-6 w-6 text-gray-50" />Add
        </Button>
    );
}