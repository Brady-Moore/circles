import { currentUser } from "@clerk/nextjs/server";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

async function Sidebar() {
  const authUser = await currentUser();
  if (!authUser) return <UnauthenticatedSidebar />;
  return <div>Sidebar</div>;
}

export default Sidebar;

const UnauthenticatedSidebar = () => (
  <div className="sticky top-20">
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
          <Button className="w-full mt-2 mx-auto" variant="default">
            Sign Up
          </Button>
        </SignUpButton>
      </CardContent>
    </Card>
  </div>
);
