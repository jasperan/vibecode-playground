import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chrome, Github, Laptop } from "lucide-react";
import { signIn } from "@/auth";

async function handleGoogleSignIn() {
  "use server"
  await signIn("google")
}

async function handleGithubSignIn() {
  "use server"
  await signIn("github")
}

const SignInFormClient = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">Sign in</CardTitle>
        <CardDescription>Choose how you want to continue.</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-2">
        <form action={handleGoogleSignIn}>
          <Button type="submit" variant={"outline"} className="w-full justify-start gap-2">
            <Chrome className="size-4 text-muted-foreground" />
            <span>Continue with Google</span>
          </Button>
        </form>
        <form action={handleGithubSignIn}>
          <Button type="submit" variant={"outline"} className="w-full justify-start gap-2">
            <Github className="size-4 text-muted-foreground" />
            <span>Continue with GitHub</span>
          </Button>
        </form>
        <form
          action={async () => {
            "use server";
            await signIn("local");
          }}
        >
          <Button type="submit" variant={"outline"} className="w-full justify-start gap-2">
            <Laptop className="size-4 text-muted-foreground" />
            <span>Continue as local developer</span>
          </Button>
        </form>
      </CardContent>

      <CardFooter>
        <p className="w-full text-xs leading-relaxed text-muted-foreground">
          By signing in you agree to the{" "}
          <a href="#" className="underline underline-offset-2 hover:text-foreground">
            terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-2 hover:text-foreground">
            privacy policy
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignInFormClient;
