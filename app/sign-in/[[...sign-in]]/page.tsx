import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center p-4">
            <SignIn />
        </main>
    );
}