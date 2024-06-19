import { z } from "zod";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { users } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { setUser } from "@/store/slices/global";
import { ModeToggle } from "@/components/global/mode-toggle";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .trim()
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(64, { message: "Password cannot exceed 64 characters" })
    .refine((password) => !/(password|123456|qwerty)/i.test(password), {
      message: "Password contains a common pattern",
    }),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setLoading(true);

    const user = users.filter(
      (user) => user.email === values.email && user.password === values.password
    )[0];

    setTimeout(() => {
      if (user) {
        toast.success("Success!", {
          className:
            "p-2.5 rounded-lg border flex items-center justify-start space-x-2.5",
          description: "Successfully Logged In!",
        });
        dispatch(setUser(user));
        navigate("/");
      } else {
        toast.error("Error!", {
          className:
            "p-2.5 rounded-lg border flex items-center justify-start space-x-2.5",
          description: "User not Found!",
        });
      }

      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    dispatch(setUser(null));
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-1/5">
        <CardHeader>
          <div className="w-full flex items-center justify-between">
            <CardTitle className="w-full text-2xl">Login</CardTitle>
            <ModeToggle />
          </div>
        </CardHeader>
        <CardContent>
          <Form {...loginForm}>
            <form
              onSubmit={loginForm.handleSubmit(onSubmit)}
              className="grid gap-4"
            >
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="email@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <div className="flex items-center">
                      <FormLabel>Password</FormLabel>
                      <Link
                        to="/"
                        className="ml-auto inline-block text-sm underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <FormControl>
                      <div className="w-full flex items-center justify-between rounded-md space-x-1.5 border px-3 py-2 h-10">
                        <Input
                          className="border-none p-0 h-full"
                          type={showPassword ? "text" : "password"}
                          placeholder="**********"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          disabled={field.value === ""}
                          className="p-0 hover:bg-transparent"
                          onClick={() =>
                            setShowPassword((prev) => (prev = !prev))
                          }
                        >
                          {showPassword ? <EyeOff /> : <Eye />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={loading} type="submit" className="w-full">
                {loading ? (
                  <div className="w-full flex items-center justify-center space-x-3">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Please Wait...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </Button>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?&nbsp;
                <Link to="/" className="underline">
                  Sign up
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
