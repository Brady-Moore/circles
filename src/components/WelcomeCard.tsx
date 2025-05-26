import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const WelcomeCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-center text-xl font-semibold">
        Welcome to Circles!
      </CardTitle>
    </CardHeader>
    <Image
      src="/android-chrome-192x192.png"
      alt="Circles logo"
      width={192}
      height={192}
      className=" mx-auto -my-8"
    />
    <CardContent>
      <p className="text-center text-muted-foreground mb-4">
        Log in to view your profile and connect with others on Circles.
      </p>
      <SignInButton mode="modal">
        <Button className="w-full mx-auto" variant="default">
          Log In
        </Button>
      </SignInButton>
      <SignUpButton mode="modal">
        <Button className="w-full mt-2" variant="outline">
          Sign Up
        </Button>
      </SignUpButton>
    </CardContent>
  </Card>
);

export default WelcomeCard;
