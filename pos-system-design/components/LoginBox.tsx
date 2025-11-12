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
import { Label } from "../src/components/ui/label";
import { useNavigate } from "react-router";
import {
   Dialog,
   DialogContent, DialogTrigger
} from "../src/components/ui/dialog";
import {
   LogIn
} from "lucide-react";
interface LoginBoxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToSignUp: () => void;
}

export default function LoginBox({ open, onOpenChange, onSwitchToSignUp } :LoginBoxProps) {
   const navigate = useNavigate();

   return (
      <Dialog open={open} onOpenChange={onOpenChange}>
         <DialogContent className="w-fit">
            <Card className="w-250 max-w-sm border-none shadow-none bg-white">
               <CardHeader className="mb-5">
                  <CardTitle className="font-imperialscript text-center text-xl ">
                     Log in to you account
                  </CardTitle>
                  <CardDescription className="text-center">
                     Enter your email below to login to your account
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
                           <div className="flex items-center">
                              <Label htmlFor="password">Password</Label>
                              <a
                                 href="#"
                                 className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                              >
                                 Forgot your password?
                              </a>
                           </div>
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
                     <p>Don't you have account?</p>
                     <CardAction>
                        <Button
                           className="text-blue-700"
                           variant="link"
                           onClick={onSwitchToSignUp}
                        >
                           Sign Up
                        </Button>
                     </CardAction>
                  </div>
               </CardFooter>
            </Card>
         </DialogContent>
      </Dialog>
   );
}

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";


// interface LoginBoxProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   onSwitchToSignUp: () => void;
// }

// export default function LoginBox({ open, onOpenChange, onSwitchToSignUp } :LoginBoxProps) {
//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="w-fit">
//         <DialogHeader>
//           <DialogTitle className="text-center text-xl font-imperialscript">
//             Log in to your account
//           </DialogTitle>
//           <DialogDescription className="text-center">
//             Enter your email below to log in
//           </DialogDescription>
//         </DialogHeader>

//         <form className="flex flex-col gap-4 mt-4">
//           <div>
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" type="email" placeholder="m@example.com" required />
//           </div>

//           <div>
//             <Label htmlFor="password">Password</Label>
//             <Input id="password" type="password" required />
//           </div>

//           <Button type="submit" className="w-full bg-blue-700 text-white">
//             Login
//           </Button>
//         </form>

//         <p className="text-center mt-3">
//           Don’t have an account?{" "}
//           <Button variant="link" className="text-blue-700" onClick={onSwitchToSignUp}>
//             Sign Up
//           </Button>
//         </p>
//       </DialogContent>
//     </Dialog>
//   );
// }
