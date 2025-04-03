"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.action";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const result = await signOut();

      if (result.success) {
        toast.success(result.message);
        router.push("/sign-in");
      } else {
        toast.error("Failed to sign out. Please try again.");
      }
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("An error occurred during sign out.");
    }
  };

  return (
    <Button
      onClick={handleSignOut}
      variant="destructive"
      size="sm"
      className="ml-auto cursor-pointer hover:cursor-pointer"
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
