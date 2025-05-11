import ColorThemeToggle from "@/components/ColorThemeToggle";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
        {/* <SignUpButton mode="modal" /> */}
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ColorThemeToggle />
    </div>
  );
}
