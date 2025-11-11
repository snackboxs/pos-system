import { Button } from "../src/components/ui/button";
import {
   Card,
   CardAction,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "../src/components/ui/card";
import { Input } from "../src/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

export default function Login() {
   const navigate = useNavigate();

   return (
      <div className="font-imperialscript absolute top-0 left-0 bg-gray-900/59 w-screen h-screen flex justify-center items-center">
         <Card className="w-full max-w-sm bg-white">
            <CardHeader>
               <CardTitle className="font-imperialscript text-center text-xl ">
                  Sign Up
               </CardTitle>
               <CardDescription className="text-center">
                  Enter your email below to create an account
               </CardDescription>
            </CardHeader>
            <CardContent>
               <form>
                  <div className="flex flex-col gap-6">
                     <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                           id="email"
                           type="email"
                           placeholder="m@example.com"
                           required
                        />
                     </div>
                     <div className="grid gap-2">
                        <Label htmlFor="password">New Password</Label>
                        <Input id="password" type="password" required />
                        <Label htmlFor="password">Re Password</Label>
                        <Input id="password" type="password" required />
                     </div>
                     <Button
                        type="submit"
                        className="w-full bg-blue-700 text-white"
                     >
                        Login
                     </Button>
                  </div>
               </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
               <Button variant="outline" className="w-full">
                  Continue with Google
               </Button>
               <div className="flex items-center justify-between w-full">
                  <p>Do you have account?</p>
                  <CardAction>
                     <Button
                        className="text-blue-700"
                        variant="link"
                        onClick={() => navigate("/login")}
                     >
                        Sign In
                     </Button>
                  </CardAction>
               </div>
            </CardFooter>
         </Card>
      </div>
   );
}
