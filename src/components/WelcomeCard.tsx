import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const WelcomeCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-center text-xl font-semibold">
        Welcome to Circles!
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-center text-muted-foreground mb-4">
        Log in to view your profile and connect with others on Circles.
      </p>
      <SignInButton mode="modal">
        <Button className="w-full mx-auto" variant="outline">
          Log In
        </Button>
      </SignInButton>
      <SignUpButton mode="modal">
        <Button className="w-full mt-2" variant="default">
          Sign Up
        </Button>
      </SignUpButton>
    </CardContent>
  </Card>
);

export default WelcomeCard;
