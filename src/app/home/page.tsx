import {getNotes} from "@/app/lib/db";
import {Card} from "@/app/ui/card";
import {Button} from "@/app/ui/button";
import {ArrowRightIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

export default async function Home() {
    let noteList = await getNotes();
    noteList.sort()
    if (noteList.length === 0) {
        return (
            <main className="flex min-h-full flex-col text-center place-content-center p-6">
                <p className={"text-5xl"}>No notes at the moment</p>
                <p className={"text-2xl my-4"}>Try adding some!</p>
                <Button className={"w-48 self-center"}>
                    <Link className={"w-full flex"} href={"/home/add"}>
                        Add a new note <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
                    </Link>
                </Button>
            </main>
        );
    }

    else return (
        <main className="flex min-h-full flex-col p-6">
            {
                noteList.map((note)=>
                    <Link key={note.id} href={`/note/${note.id}`}><Card title={note.title} content={note.content}></Card></Link>
                )
            }
        </main>
    );
}
